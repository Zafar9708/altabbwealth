// 'use client';

// import { useState, useEffect } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function ApplyPage() {
//   const params = useParams();
//   const router = useRouter();
//   const jobId = params.id;

//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     experience: '',
//     linkedin: '',
//     portfolio: '',
//     coverLetter: '',
//   });

//   useEffect(() => {
//     if (jobId) {
//       fetchJob();
//     }
//   }, [jobId]);

//   const fetchJob = async () => {
//     try {
//       const response = await fetch('/api/jobs');
//       const data = await response.json();
//       if (data.success) {
//         const foundJob = data.data.find(j => j._id === jobId);
//         setJob(foundJob);
//       }
//     } catch (error) {
//       console.error('Error fetching job:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       const applicationData = {
//         ...formData,
//         jobId: jobId,
//         resume: 'uploaded-resume-placeholder' // In real app, handle file upload
//       };

//       const response = await fetch('/api/applications', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(applicationData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert('Application submitted successfully!');
//         router.push('/careers');
//       } else {
//         alert('Error submitting application: ' + result.error);
//       }
//     } catch (error) {
//       console.error('Error submitting application:', error);
//       alert('Error submitting application');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading job details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!job) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
//           <Link href="/careers" className="text-brand-gold hover:underline">
//             Back to Careers
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Link href="/careers" className="inline-flex items-center text-brand-gold mb-6 hover:underline">
//           ← Back to Careers
//         </Link>

//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for {job.title}</h1>
//           <p className="text-gray-600 mb-6">{job.department} • {job.location} • {job.type}</p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
//                   placeholder="Enter your email"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
//                   Years of Experience *
//                 </label>
//                 <input
//                   type="text"
//                   id="experience"
//                   name="experience"
//                   required
//                   value={formData.experience}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
//                   placeholder="e.g., 5 years"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
//                 LinkedIn Profile
//               </label>
//               <input
//                 type="url"
//                 id="linkedin"
//                 name="linkedin"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
//                 placeholder="https://linkedin.com/in/yourprofile"
//               />
//             </div>

//             <div>
//               <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
//                 Portfolio/Website
//               </label>
//               <input
//                 type="url"
//                 id="portfolio"
//                 name="portfolio"
//                 value={formData.portfolio}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
//                 placeholder="https://yourportfolio.com"
//               />
//             </div>

//             <div>
//               <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
//                 Cover Letter *
//               </label>
//               <textarea
//                 id="coverLetter"
//                 name="coverLetter"
//                 rows={6}
//                 required
//                 value={formData.coverLetter}
//                 onChange={handleChange}
//                 placeholder="Tell us why you're interested in this position and what makes you a good fit..."
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
//               />
//             </div>

//             {/* <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
//               <p className="text-sm text-yellow-800">
//                 <strong>Note:</strong> File upload functionality is not implemented in this demo. 
//                 In a real application, you would handle resume file uploads here.
//               </p>
//             </div> */}

//             <div className="flex items-center justify-between pt-6">
//               <Link
//                 href="/careers"
//                 className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300"
//               >
//                 Cancel
//               </Link>
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="px-6 py-2 bg-brand-gold text-white rounded-md hover:bg-brand-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
//               >
//                 {submitting ? 'Submitting...' : 'Submit Application'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


// app/careers/apply/[id]/page.js
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ApplyPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    linkedin: '',
    portfolio: '',
  });

  useEffect(() => {
    if (jobId) {
      fetchJob();
    }
  }, [jobId]);

  const fetchJob = async () => {
    try {
      const response = await fetch('/api/jobs');
      const data = await response.json();
      if (data.success) {
        const foundJob = data.data.find(j => j._id === jobId);
        setJob(foundJob);
      } else {
        console.error('Failed to fetch jobs');
      }
    } catch (error) {
      console.error('Error fetching job:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResumeError('');
    
    if (file) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        setResumeError('Please upload a PDF or Word document');
        setResumeFile(null);
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setResumeError('File size must be less than 5MB');
        setResumeFile(null);
        return;
      }

      setResumeFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResumeError('');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.experience) {
      alert('Please fill all required fields');
      setSubmitting(false);
      return;
    }

    // Validate resume file
    if (!resumeFile) {
      setResumeError('Please upload your resume');
      setSubmitting(false);
      return;
    }

    try {
      const submitData = new FormData();
      
      // Append form data
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      
      submitData.append('jobId', jobId);
      submitData.append('resume', resumeFile);

      const response = await fetch('/api/applications', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        alert('Application submitted successfully!');
        router.push('/careers');
      } else {
        alert('Error submitting application: ' + result.error);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
          <Link href="/careers" className="text-brand-gold hover:underline">
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/careers" className="inline-flex items-center text-brand-gold mb-6 hover:underline">
          ← Back to Careers
        </Link>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for {job.title}</h1>
          <p className="text-gray-600 mb-6">{job.department} • {job.location} • {job.type}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  placeholder="e.g., 5 years"
                />
              </div>
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio/Website
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                placeholder="https://yourportfolio.com"
              />
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Resume *
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                required
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-gold file:text-white hover:file:bg-brand-gold/90"
              />
              {resumeError && (
                <p className="mt-1 text-sm text-red-600">{resumeError}</p>
              )}
              {resumeFile && (
                <p className="mt-1 text-sm text-green-600">
                  Selected file: {resumeFile.name}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
              </p>
            </div>

            <div className="flex items-center justify-between pt-6">
              <Link
                href="/careers"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2 bg-brand-gold text-white rounded-md hover:bg-brand-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}