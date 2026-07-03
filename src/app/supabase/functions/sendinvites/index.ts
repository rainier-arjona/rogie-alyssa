// @deno-types="npm:@types/nodemailer@6"
// deno-lint-ignore no-import-prefix
import nodemailer from "npm:nodemailer@6";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let body: Record<string, unknown> = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    const email = typeof body?.email === "string" ? body.email : undefined;
    const html = typeof body?.html === "string" ? body.html : undefined;

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: "A valid email address is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!html) {
      return new Response(
        JSON.stringify({ success: false, error: "HTML content is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const gmailUser = Deno.env.get("GMAIL_USER");
    const gmailPass = Deno.env.get("GMAIL_APP_PASSWORD");

    if (!gmailUser || !gmailPass) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "GMAIL_USER or GMAIL_APP_PASSWORD is not configured for this edge function.",
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const subject = typeof body?.subject === "string" && body.subject.trim().length > 0
      ? body.subject
      : "💌 You're Invited to Our Wedding Celebration";

    let info;
    try {
      info = await transporter.sendMail({
        from: `"Rogimer & Alyssa Camille" <${gmailUser}>`,
        to: email,
        subject,
        html,
      });
    } catch (sendError) {
      const message = sendError instanceof Error ? sendError.message : String(sendError);
      return new Response(
        JSON.stringify({ success: false, error: message }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: info }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});