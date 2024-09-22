import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    try {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) {
        console.error("Error exchanging code for session:", error);
        // You might want to redirect to an error page here
        return NextResponse.redirect(`${requestUrl.origin}/auth-error`);
      }
    } catch (error) {
      console.error("Unexpected error during auth:", error);
      return NextResponse.redirect(`${requestUrl.origin}/auth-error`);
    }
  }

  // Successful auth
  return NextResponse.redirect(requestUrl.origin);
}
