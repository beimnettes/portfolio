# Environment Variables Setup for Contact Form

Copy this file to `.env.local` and fill in your actual values.

## Required Environment Variables

### RESEND_API_KEY
Get your API key from: https://resend.com/api-keys

```
RESEND_API_KEY=your_resend_api_key_here
```

### RECIPIENT_EMAIL
Email address where contact form submissions will be sent

```
RECIPIENT_EMAIL=bemnetfeleke96@gmail.com
```

## Setup Steps

1. Sign up at https://resend.com
2. Generate an API key from your dashboard
3. Create a file named `.env.local` in the project root
4. Copy the environment variables above into `.env.local`
5. Replace the placeholder values with your actual API key
6. Restart your dev server: `npm run dev`

## Testing

For testing, Resend allows you to send emails from `onboarding@resend.dev`. 
To send to any email address, you'll need to verify your own domain in Resend.
