// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import Application from '@/models/Application';
// import { verifyToken } from '@/lib/auth';

// export async function GET(request) {
//   try {
//     await dbConnect();
    
//     // Verify admin access
//     const token = request.headers.get('authorization')?.replace('Bearer ', '');
//     const decoded = verifyToken(token);
//     if (!decoded) {
//       return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
//     }

//     const applications = await Application.find().populate('jobId').sort({ appliedAt: -1 });
//     return NextResponse.json({ success: true, data: applications });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// export async function POST(request) {
//   try {
//     await dbConnect();
//     const body = await request.json();
    
//     // Validate required fields
//     if (!body.name || !body.email || !body.phone || !body.jobId) {
//       return NextResponse.json(
//         { success: false, error: 'Name, email, phone, and job ID are required' },
//         { status: 400 }
//       );
//     }

//     const application = await Application.create(body);
    
//     return NextResponse.json({ success: true, data: application }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }



// app/api/applications/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Application from '@/models/Application';
import { verifyToken } from '@/lib/auth';
import cloudinary from '@/lib/cloudinary';

export async function GET(request) {
  try {
    await dbConnect();
    
    // Verify admin access
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const applications = await Application.find().populate('jobId').sort({ appliedAt: -1 });
    return NextResponse.json({ success: true, data: applications });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const experience = formData.get('experience');
    const linkedin = formData.get('linkedin');
    const portfolio = formData.get('portfolio');
    const jobId = formData.get('jobId');
    const resumeFile = formData.get('resume');

    // Validate required fields
    if (!name || !email || !phone || !experience || !jobId || !resumeFile) {
      return NextResponse.json(
        { success: false, error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!resumeFile.type.includes('pdf') && !resumeFile.type.includes('msword') && !resumeFile.type.includes('vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      return NextResponse.json(
        { success: false, error: 'Only PDF and Word documents are allowed' },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    if (resumeFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: 'job-applications/resumes',
          format: 'pdf',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    // Create application in database
    const application = await Application.create({
      jobId,
      name,
      email,
      phone,
      experience,
      linkedin: linkedin || '',
      portfolio: portfolio || '',
      resume: {
        public_id: uploadResult.public_id,
        url: uploadResult.secure_url,
      },
    });

    return NextResponse.json({ 
      success: true, 
      data: application,
      message: 'Application submitted successfully'
    }, { status: 201 });
    
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Failed to submit application' 
    }, { status: 500 });
  }
}