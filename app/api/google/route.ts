import { NextResponse } from 'next/server';
import { setAuthCookies } from '@/shared/auth';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');

  if (!accessToken || !refreshToken) {
    return NextResponse.json(
      { error: '토큰이 제공되지 않았습니다.' },
      { status: 400 }
    );
  }

  try {
    const response = NextResponse.redirect(new URL('/', request.url));
    
    // 쿠키 설정
    setAuthCookies(accessToken, refreshToken);

    return response;
  } catch (error) {
    console.error('Google 로그인 처리 중 오류 발생:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
