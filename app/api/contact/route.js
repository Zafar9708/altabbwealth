// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     const { name, email, phone, service, message } = await request.json();

//     // Validate required fields
//     if (!name || !email) {
//       return NextResponse.json(
//         { error: 'Name and email are required' },
//         { status: 400 }
//       );
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     // Email to company (arun.mishra@altabb.com)
//     const companyMailOptions = {
//       from: process.env.GMAIL_USER,
//       to: 'arun.mishra@altabb.com',
//       subject: `New Consultation Request from ${name}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
//             .header { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 25px; text-align: center; border-radius: 10px 10px 0 0; }
//             .content { background: #f8fafc; padding: 25px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0; }
//             .field { margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #f59e0b; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
//             .label { font-weight: bold; color: #64748b; display: block; margin-bottom: 8px; font-size: 14px; }
//             .value { color: #1e293b; font-size: 16px; }
//             .footer { margin-top: 25px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px; }
//             .logo { text-align: center; margin-bottom: 20px; }
//           </style>
//         </head>
//         <body>
//           <div class="logo">
//             <h2 style="color: #f59e0b; margin: 0;">ALTABB WEALTH</h2>
//             <p style="color: #666; margin: 5px 0 0 0; font-style: italic;">Building Wealth, Creating Legacy</p>
//           </div>
          
//           <div class="header">
//             <h1 style="margin: 0; font-size: 24px;">New Consultation Request</h1>
//             <p style="margin: 10px 0 0 0; opacity: 0.9;">Website Contact Form</p>
//           </div>
          
//           <div class="content">
//             <div class="field">
//               <span class="label">👤 Client Name</span>
//               <span class="value">${name}</span>
//             </div>
            
//             <div class="field">
//               <span class="label">📧 Email Address</span>
//               <span class="value">${email}</span>
//             </div>
            
//             <div class="field">
//               <span class="label">📞 Phone Number</span>
//               <span class="value">${phone || 'Not provided'}</span>
//             </div>
            
//             <div class="field">
//               <span class="label">💼 Service Interested In</span>
//               <span class="value">${service || 'Not specified'}</span>
//             </div>
            
//             <div class="field">
//               <span class="label">💬 Message</span>
//               <div class="value">${message || 'No message provided'}</div>
//             </div>
            
//             <div class="field">
//               <span class="label">⏰ Submitted At</span>
//               <span class="value">${new Date().toLocaleString('en-US', { 
//                 year: 'numeric', 
//                 month: 'long', 
//                 day: 'numeric', 
//                 hour: '2-digit', 
//                 minute: '2-digit',
//                 timeZone: 'Asia/Kolkata'
//               })} (IST)</span>
//             </div>
//           </div>
          
//           <div class="footer">
//             <p><strong>ALTABB WEALTH</strong></p>
//             <p>Website: www.altabb.com | Email: hi@altabb.com | Phone: +91 8505804836</p>
//             <p>This email was automatically generated from the website contact form.</p>
//           </div>
//         </body>
//         </html>
//       `,
//     };

//     // Auto-reply to client
//     const clientMailOptions = {
//       from: process.env.GMAIL_USER,
//       to: email,
//       subject: 'Thank You for Contacting Altabb Wealth',
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
//             .header { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 25px; text-align: center; border-radius: 10px 10px 0 0; }
//             .content { background: #f8fafc; padding: 25px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0; }
//             .footer { margin-top: 25px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px; }
//             .thank-you { text-align: center; font-size: 18px; color: #059669; margin-bottom: 20px; }
//             .next-steps { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981; }
//           </style>
//         </head>
//         <body>
//           <div class="header">
//             <h1 style="margin: 0; font-size: 24px;">ALTABB WEALTH</h1>
//             <p style="margin: 10px 0 0 0; opacity: 0.9;">Building Wealth, Creating Legacy</p>
//           </div>
          
//           <div class="content">
//             <div class="thank-you">
//               <h2>Thank You, ${name}!</h2>
//               <p>We have received your consultation request and will get back to you within 24 hours.</p>
//             </div>
            
//             <div class="next-steps">
//               <h3 style="color: #059669; margin-top: 0;">What Happens Next?</h3>
//               <ul style="text-align: left;">
//                 <li>Our financial expert will review your requirements</li>
//                 <li>We'll contact you to schedule a free consultation</li>
//                 <li>Prepare a customized solution for your needs</li>
//                 <li>Discuss next steps and implementation</li>
//               </ul>
//             </div>
            
//             <div style="text-align: center; margin: 25px 0;">
//               <p><strong>Need immediate assistance?</strong></p>
//               <p>📞 Call us: +91 8505804836</p>
//               <p>📧 Email: hi@altabb.com</p>
//             </div>
//           </div>
          
//           <div class="footer">
//             <p><strong>ALTABB WEALTH Private Limited</strong></p>
//             <p>5204, ATS Rhapsody, Sector-1, Greater Noida, UP, 201306, India</p>
//             <p>Website: www.altabb.com</p>
//           </div>
//         </body>
//         </html>
//       `,
//     };

//     // Send both emails
//     await transporter.sendMail(companyMailOptions);
//     await transporter.sendMail(clientMailOptions);

//     console.log('✅ Emails sent successfully');
//     return NextResponse.json(
//       { 
//         success: true,
//         message: 'Form submitted successfully! Check your email for confirmation.'
//       },
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error('❌ Error sending emails:', error);
//     return NextResponse.json(
//       { error: 'Failed to send emails. Please try again.' },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Safe date formatting for SSR build
    const dateIST = new Date().toLocaleString('en-IN', {
      hour12: true,
      timeZone: 'Asia/Kolkata',
    });

    // ---------------------------------------
    // EMAIL TO COMPANY
    // ---------------------------------------
    await resend.emails.send({
      from: 'Altabb Wealth <hi@altabb.com>',
      to: 'arun.mishra@altabb.com',
      subject: `New Consultation Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 25px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 25px; border: 1px solid #e2e8f0; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; padding: 15px; background: white; border-left: 4px solid #f59e0b; border-radius: 8px; }
            .label { font-weight: bold; color: #64748b; }
            .footer { margin-top: 25px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>

          <div class="header">
            <h1>New Consultation Request</h1>
            <p>Website Contact Form</p>
          </div>

          <div class="content">
            <div class="field"><span class="label">👤 Name:</span> ${name}</div>
            <div class="field"><span class="label">📧 Email:</span> ${email}</div>
            <div class="field"><span class="label">📞 Phone:</span> ${phone || 'Not provided'}</div>
            <div class="field"><span class="label">💼 Service:</span> ${service || 'Not specified'}</div>
            <div class="field"><span class="label">💬 Message:</span> ${message || 'No message provided'}</div>
            <div class="field"><span class="label">⏰ Submitted At:</span> ${dateIST} (IST)</div>
          </div>

          <div class="footer">
            ALTABB WEALTH • www.altabb.com • hi@altabb.com • +91 8505804836
          </div>

        </body>
        </html>
      `,
    });

    // ---------------------------------------
    // AUTO-REPLY EMAIL TO CLIENT
    // ---------------------------------------
    await resend.emails.send({
      from: 'Altabb Wealth <onboarding@resend.dev>',
      to: email,
      subject: 'Thank You for Contacting Altabb Wealth',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial; max-width: 600px; margin: auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 25px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 25px; border: 1px solid #e2e8f0; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 25px; }
          </style>
        </head>
        <body>

          <div class="header">
            <h1>ALTABB WEALTH</h1>
            <p>Building Wealth, Creating Legacy</p>
          </div>

          <div class="content">
            <h2>Thank You, ${name}!</h2>
            <p>We have received your consultation request.</p>

            <h3>What Happens Next?</h3>
            <ul>
              <li>Our financial expert will review your details.</li>
              <li>We will contact you to schedule a free consultation.</li>
              <li>A personalized financial roadmap will be prepared for you.</li>
            </ul>

            <p><strong>Need help sooner?</strong><br>
            📞 +91 8505804836<br>
            📧 hi@altabb.com</p>
          </div>

          <div class="footer">
            ALTABB WEALTH Private Limited • www.altabb.com
          </div>

        </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully! Check your email for confirmation.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
