import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  const secret = process.env.ADMIN_API_KEY
  const body = await request.json().catch(() => null)

  if (!secret || body?.password !== secret) {
    return NextResponse.json(
      { error: 'Invalid administrator password' },
      { status: 401 }
    )
  }

  const response = NextResponse.json({ authenticated: true })
  response.cookies.set(ADMIN_SESSION_COOKIE, secret, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24,
    path: '/',
  })

  return response
}
