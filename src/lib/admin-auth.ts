import type { NextRequest } from 'next/server'

export const ADMIN_SESSION_COOKIE = 'admin_session'

export function isAdminAuthorized(request: NextRequest) {
  const secret = process.env.ADMIN_API_KEY
  if (!secret) return false

  return (
    request.headers.get('x-admin-key') === secret ||
    request.cookies.get(ADMIN_SESSION_COOKIE)?.value === secret
  )
}
