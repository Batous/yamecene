import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'

const schema = z.object({ signatoryId: z.string().min(1) })

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const secret = process.env.ADMIN_API_KEY
  if (!secret || request.headers.get('x-admin-key') !== secret) return NextResponse.json({ error: 'Administrator authorization is required' }, { status: 401 })
  const parsed = schema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ error: 'Invalid approval' }, { status: 400 })
  const { id } = await params
  const payout = await db.payoutRequest.findUnique({ where: { id }, include: { cause: { include: { signatories: true } }, approvals: true } })
  if (!payout) return NextResponse.json({ error: 'Payout not found' }, { status: 404 })
  if (payout.payoutModel !== 'multisig' || !['pending', 'partial_approval'].includes(payout.status)) return NextResponse.json({ error: 'This payout cannot be approved in this state' }, { status: 409 })
  const signatory = payout.cause.signatories.find((item) => item.id === parsed.data.signatoryId)
  if (!signatory) return NextResponse.json({ error: 'This signatory is not designated for the project' }, { status: 403 })
  try {
    const updated = await db.$transaction(async (tx) => {
      await tx.payoutApproval.create({ data: { payoutRequestId: payout.id, signatoryId: signatory.id } })
      const approvals = await tx.payoutApproval.count({ where: { payoutRequestId: payout.id } })
      return tx.payoutRequest.update({
        where: { id: payout.id },
        data: { status: approvals >= payout.approvalThreshold ? 'approved' : 'partial_approval' },
        include: { approvals: true },
      })
    })
    return NextResponse.json({ payout: updated })
  } catch {
    return NextResponse.json({ error: 'This signatory has already approved' }, { status: 409 })
  }
}
