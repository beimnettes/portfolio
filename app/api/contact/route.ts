import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation helper
function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Validate email format
        if (!validateEmail(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // Validate environment variables
        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not set");
            return NextResponse.json(
                { error: "Email service is not configured. Please contact the administrator." },
                { status: 500 }
            );
        }

        if (!process.env.RECIPIENT_EMAIL) {
            console.error("RECIPIENT_EMAIL is not set");
            return NextResponse.json(
                { error: "Recipient email is not configured. Please contact the administrator." },
                { status: 500 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>", // Resend's test domain
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: subject || `New message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        ${subject ? `<p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>` : ""}
                    </div>
                    
                    <div style="margin-top: 20px;">
                        <h3 style="color: #555;">Message:</h3>
                        <p style="line-height: 1.6; color: #666;">${message.replace(/\n/g, "<br>")}</p>
                    </div>
                    
                    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                    
                    <p style="color: #999; font-size: 12px; text-align: center;">
                        This email was sent from your portfolio contact form
                    </p>
                </div>
            `,
        });

        // Handle Resend errors
        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send email. Please try again later." },
                { status: 500 }
            );
        }

        // Success response
        return NextResponse.json(
            {
                success: true,
                message: "Email sent successfully",
                id: data?.id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again later." },
            { status: 500 }
        );
    }
}
