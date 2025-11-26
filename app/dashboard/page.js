// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function Dashboard() {
//   const [user, setUser] = useState(null);
//   const [jobs, setJobs] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [activeTab, setActiveTab] = useState('jobs');
//   const [showJobForm, setShowJobForm] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   const [jobForm, setJobForm] = useState({
//     title: '',
//     department: '',
//     location: 'Greater Noida, UP',
//     type: 'Full-time',
//     experience: '',
//     description: '',
//     requirements: [''],
//     responsibilities: [''],
//   });

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
    
//     if (!token || !userData) {
//       router.push('/admin/login');
//       return;
//     }

//     setUser(JSON.parse(userData));
//     fetchData(token);
//   }, [router]);

//   const fetchData = async (token) => {
//     try {
//       const [jobsRes, applicationsRes] = await Promise.all([
//         fetch('/api/jobs', {
//           headers: { Authorization: `Bearer ${token}` },
//         }),
//         fetch('/api/applications', {
//           headers: { Authorization: `Bearer ${token}` },
//         }),
//       ]);

//       const jobsData = await jobsRes.json();
//       const applicationsData = await applicationsRes.json();

//       if (jobsData.success) setJobs(jobsData.data);
//       if (applicationsData.success) setApplications(applicationsData.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     router.push('/admin/login');
//   };

//   const handleJobSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     try {
//       const response = await fetch('/api/jobs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           ...jobForm,
//           requirements: jobForm.requirements.filter(req => req.trim() !== ''),
//           responsibilities: jobForm.responsibilities.filter(resp => resp.trim() !== ''),
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setJobs(prev => [data.data, ...prev]);
//         setShowJobForm(false);
//         setJobForm({
//           title: '',
//           department: '',
//           location: 'Greater Noida, UP',
//           type: 'Full-time',
//           experience: '',
//           description: '',
//           requirements: [''],
//           responsibilities: [''],
//         });
//         alert('Job created successfully!');
//       } else {
//         alert('Error creating job: ' + data.error);
//       }
//     } catch (error) {
//       console.error('Error creating job:', error);
//       alert('Error creating job');
//     }
//   };

//   const addRequirement = () => {
//     setJobForm(prev => ({
//       ...prev,
//       requirements: [...prev.requirements, ''],
//     }));
//   };

//   const updateRequirement = (index, value) => {
//     setJobForm(prev => ({
//       ...prev,
//       requirements: prev.requirements.map((req, i) => i === index ? value : req),
//     }));
//   };

//   const removeRequirement = (index) => {
//     setJobForm(prev => ({
//       ...prev,
//       requirements: prev.requirements.filter((_, i) => i !== index),
//     }));
//   };

//   if (!user || loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Altabb Dashboard</h1>
//               <p className="text-gray-600">Welcome back, {user.email}</p>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Tabs */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="border-b border-gray-200">
//           <nav className="-mb-px flex space-x-8">
//             <button
//               onClick={() => setActiveTab('jobs')}
//               className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                 activeTab === 'jobs'
//                   ? 'border-brand-gold text-brand-gold'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               Jobs ({jobs.length})
//             </button>
//             <button
//               onClick={() => setActiveTab('applications')}
//               className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                 activeTab === 'applications'
//                   ? 'border-brand-gold text-brand-gold'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               Applications ({applications.length})
//             </button>
//           </nav>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {activeTab === 'jobs' && (
//           <div>
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-900">Job Postings</h2>
//               <button
//                 onClick={() => setShowJobForm(true)}
//                 className="px-4 py-2 bg-brand-gold text-white rounded-md hover:bg-brand-gold/90 transition-colors duration-300"
//               >
//                 Create New Job
//               </button>
//             </div>

//             {showJobForm && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//                 <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-4">Create New Job</h3>
//                     <form onSubmit={handleJobSubmit} className="space-y-4">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
//                           <input
//                             type="text"
//                             required
//                             value={jobForm.title}
//                             onChange={(e) => setJobForm(prev => ({ ...prev, title: e.target.value }))}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
//                             placeholder="e.g., Senior Financial Advisor"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
//                           <input
//                             type="text"
//                             required
//                             value={jobForm.department}
//                             onChange={(e) => setJobForm(prev => ({ ...prev, department: e.target.value }))}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
//                             placeholder="e.g., Wealth Management"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
//                           <input
//                             type="text"
//                             required
//                             value={jobForm.location}
//                             onChange={(e) => setJobForm(prev => ({ ...prev, location: e.target.value }))}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
//                             placeholder="e.g., Greater Noida, UP"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
//                           <select
//                             required
//                             value={jobForm.type}
//                             onChange={(e) => setJobForm(prev => ({ ...prev, type: e.target.value }))}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
//                           >
//                             <option value="Full-time">Full-time</option>
//                             <option value="Part-time">Part-time</option>
//                             <option value="Contract">Contract</option>
//                             <option value="Internship">Internship</option>
//                           </select>
//                         </div>
//                         <div className="md:col-span-2">
//                           <label className="block text-sm font-medium text-gray-700 mb-1">Experience Required *</label>
//                           <input
//                             type="text"
//                             required
//                             value={jobForm.experience}
//                             onChange={(e) => setJobForm(prev => ({ ...prev, experience: e.target.value }))}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
//                             placeholder="e.g., 5+ years"
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Job Description *</label>
//                         <textarea
//                           required
//                           rows={4}
//                           value={jobForm.description}
//                           onChange={(e) => setJobForm(prev => ({ ...prev, description: e.target.value }))}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
//                           placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
//                         {jobForm.requirements.map((req, index) => (
//                           <div key={index} className="flex gap-2 mb-2">
//                             <input
//                               type="text"
//                               value={req}
//                               onChange={(e) => updateRequirement(index, e.target.value)}
//                               className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
//                               placeholder={`Requirement ${index + 1}`}
//                             />
//                             {jobForm.requirements.length > 1 && (
//                               <button
//                                 type="button"
//                                 onClick={() => removeRequirement(index)}
//                                 className="px-3 py-2 text-red-600 hover:text-red-800"
//                               >
//                                 Remove
//                               </button>
//                             )}
//                           </div>
//                         ))}
//                         <button
//                           type="button"
//                           onClick={addRequirement}
//                           className="text-sm text-brand-gold hover:text-brand-gold/80"
//                         >
//                           + Add Requirement
//                         </button>
//                       </div>

//                       <div className="flex justify-end space-x-3 pt-4">
//                         <button
//                           type="button"
//                           onClick={() => setShowJobForm(false)}
//                           className="px-4 py-2 text-gray-600 hover:text-gray-800"
//                         >
//                           Cancel
//                         </button>
//                         <button
//                           type="submit"
//                           className="px-4 py-2 bg-brand-gold text-white rounded-md hover:bg-brand-gold/90"
//                         >
//                           Create Job
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="bg-white shadow-sm rounded-lg overflow-hidden">
//               {jobs.length === 0 ? (
//                 <div className="text-center py-12">
//                   <p className="text-gray-500">No jobs created yet. Create your first job posting!</p>
//                 </div>
//               ) : (
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Job Title
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Department
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Type
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Experience
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Created
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {jobs.map((job) => (
//                       <tr key={job._id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">{job.title}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-500">{job.department}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-500">{job.type}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-500">{job.experience}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {new Date(job.createdAt).toLocaleDateString()}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           </div>
//         )}

//         {activeTab === 'applications' && (
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Applications</h2>
//             <div className="bg-white shadow-sm rounded-lg overflow-hidden">
//               {applications.length === 0 ? (
//                 <div className="text-center py-12">
//                   <p className="text-gray-500">No applications received yet.</p>
//                 </div>
//               ) : (
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Applicant
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Position
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Email
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Phone
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Experience
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Applied
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {applications.map((application) => (
//                       <tr key={application._id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm font-medium text-gray-900">{application.name}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-900">{application.jobId?.title}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-500">{application.email}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-500">{application.phone}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-500">{application.experience}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {new Date(application.appliedAt).toLocaleDateString()}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                             application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                             application.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
//                             application.status === 'accepted' ? 'bg-green-100 text-green-800' :
//                             'bg-red-100 text-red-800'
//                           }`}>
//                             {application.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import * as XLSX from 'xlsx';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [activeTab, setActiveTab] = useState('jobs');
  const [showJobForm, setShowJobForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'card'
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const router = useRouter();

  const [jobForm, setJobForm] = useState({
    title: '',
    department: '',
    location: 'Greater Noida, UP',
    type: 'Full-time',
    experience: '',
    description: '',
    requirements: [''],
    responsibilities: [''],
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      router.push('/admin/login');
      return;
    }

    setUser(JSON.parse(userData));
    fetchData(token);
  }, [router]);

  const fetchData = async (token) => {
    try {
      const [jobsRes, applicationsRes] = await Promise.all([
        fetch('/api/jobs', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('/api/applications', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const jobsData = await jobsRes.json();
      const applicationsData = await applicationsRes.json();

      if (jobsData.success) setJobs(jobsData.data);
      if (applicationsData.success) setApplications(applicationsData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/admin/login');
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...jobForm,
          requirements: jobForm.requirements.filter(req => req.trim() !== ''),
          responsibilities: jobForm.responsibilities.filter(resp => resp.trim() !== ''),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setJobs(prev => [data.data, ...prev]);
        setShowJobForm(false);
        setJobForm({
          title: '',
          department: '',
          location: 'Greater Noida, UP',
          type: 'Full-time',
          experience: '',
          description: '',
          requirements: [''],
          responsibilities: [''],
        });
        alert('Job created successfully!');
      } else {
        alert('Error creating job: ' + data.error);
      }
    } catch (error) {
      console.error('Error creating job:', error);
      alert('Error creating job');
    }
  };

  const addRequirement = () => {
    setJobForm(prev => ({
      ...prev,
      requirements: [...prev.requirements, ''],
    }));
  };

  const updateRequirement = (index, value) => {
    setJobForm(prev => ({
      ...prev,
      requirements: prev.requirements.map((req, i) => i === index ? value : req),
    }));
  };

  const removeRequirement = (index) => {
    setJobForm(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }));
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      applications.map(app => ({
        'Applicant Name': app.name,
        'Email': app.email,
        'Phone': app.phone,
        'Position': app.jobId?.title || 'N/A',
        'Department': app.jobId?.department || 'N/A',
        'Experience': app.experience,
        'LinkedIn': app.linkedin || 'N/A',
        'Portfolio': app.portfolio || 'N/A',
        'Status': app.status,
        'Applied Date': new Date(app.appliedAt).toLocaleDateString(),
        'Resume URL': app.resume?.url || 'N/A'
      }))
    );
    
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Applications');
    XLSX.writeFile(workbook, `job-applications-${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const viewApplicationDetails = (application) => {
    setSelectedApplication(application);
    setShowApplicationModal(true);
  };

  const downloadResume = (application) => {
    if (application.resume?.url) {
      const link = document.createElement('a');
      link.href = application.resume.url;
      link.download = `resume-${application.name}-${application.jobId?.title || 'application'}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const updateApplicationStatus = async (applicationId, newStatus) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`/api/applications/${applicationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();

      if (data.success) {
        setApplications(prev => 
          prev.map(app => 
            app._id === applicationId ? { ...app, status: newStatus } : app
          )
        );
        if (selectedApplication && selectedApplication._id === applicationId) {
          setSelectedApplication(prev => ({ ...prev, status: newStatus }));
        }
        alert('Status updated successfully!');
      } else {
        alert('Error updating status: ' + data.error);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status');
    }
  };

  if (!user || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Altabb Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'jobs'
                  ? 'border-brand-gold text-brand-gold'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Jobs ({jobs.length})
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'applications'
                  ? 'border-brand-gold text-brand-gold'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Applications ({applications.length})
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'jobs' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Job Postings</h2>
              <button
                onClick={() => setShowJobForm(true)}
                className="px-4 py-2 bg-brand-gold text-white rounded-md hover:bg-brand-gold/90 transition-colors duration-300"
              >
                Create New Job
              </button>
            </div>

            {showJobForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Create New Job</h3>
                    <form onSubmit={handleJobSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                          <input
                            type="text"
                            required
                            value={jobForm.title}
                            onChange={(e) => setJobForm(prev => ({ ...prev, title: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                            placeholder="e.g., Senior Financial Advisor"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
                          <input
                            type="text"
                            required
                            value={jobForm.department}
                            onChange={(e) => setJobForm(prev => ({ ...prev, department: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                            placeholder="e.g., Wealth Management"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                          <input
                            type="text"
                            required
                            value={jobForm.location}
                            onChange={(e) => setJobForm(prev => ({ ...prev, location: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                            placeholder="e.g., Greater Noida, UP"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                          <select
                            required
                            value={jobForm.type}
                            onChange={(e) => setJobForm(prev => ({ ...prev, type: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                          >
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Experience Required *</label>
                          <input
                            type="text"
                            required
                            value={jobForm.experience}
                            onChange={(e) => setJobForm(prev => ({ ...prev, experience: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                            placeholder="e.g., 5+ years"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Description *</label>
                        <textarea
                          required
                          rows={4}
                          value={jobForm.description}
                          onChange={(e) => setJobForm(prev => ({ ...prev, description: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                          placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                        {jobForm.requirements.map((req, index) => (
                          <div key={index} className="flex gap-2 mb-2">
                            <input
                              type="text"
                              value={req}
                              onChange={(e) => updateRequirement(index, e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
                              placeholder={`Requirement ${index + 1}`}
                            />
                            {jobForm.requirements.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeRequirement(index)}
                                className="px-3 py-2 text-red-600 hover:text-red-800"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={addRequirement}
                          className="text-sm text-brand-gold hover:text-brand-gold/80"
                        >
                          + Add Requirement
                        </button>
                      </div>

                      <div className="flex justify-end space-x-3 pt-4">
                        <button
                          type="button"
                          onClick={() => setShowJobForm(false)}
                          className="px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-brand-gold text-white rounded-md hover:bg-brand-gold/90"
                        >
                          Create Job
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              {jobs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No jobs created yet. Create your first job posting!</p>
                </div>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Job Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Experience
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobs.map((job) => (
                      <tr key={job._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{job.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{job.department}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{job.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{job.experience}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(job.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Job Applications ({applications.length})</h2>
              <div className="flex items-center space-x-4">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      viewMode === 'table' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Table View
                  </button>
                  <button
                    onClick={() => setViewMode('card')}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      viewMode === 'card' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Card View
                  </button>
                </div>
                <button
                  onClick={exportToExcel}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Export to Excel</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {applications.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No applications received yet.</p>
              </div>
            ) : viewMode === 'table' ? (
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applicant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Experience
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applied
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applications.map((application) => (
                      <tr key={application._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{application.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{application.jobId?.title}</div>
                          <div className="text-sm text-gray-500">{application.jobId?.department}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{application.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{application.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{application.experience}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(application.appliedAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={application.status}
                            onChange={(e) => updateApplicationStatus(application._id, e.target.value)}
                            className={`text-xs font-semibold rounded-full px-2 py-1 border-0 focus:ring-2 focus:ring-brand-gold ${
                              application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              application.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                              application.status === 'accepted' ? 'bg-green-100 text-green-800' :
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button
                            onClick={() => viewApplicationDetails(application)}
                            className="text-brand-gold hover:text-brand-gold/80"
                          >
                            View
                          </button>
                          <button
                            onClick={() => downloadResume(application)}
                            className="text-green-600 hover:text-green-800"
                          >
                            Resume
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((application) => (
                  <div key={application._id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{application.name}</h3>
                        <p className="text-sm text-gray-600">{application.email}</p>
                      </div>
                      <select
                        value={application.status}
                        onChange={(e) => updateApplicationStatus(application._id, e.target.value)}
                        className={`text-xs font-semibold rounded-full px-2 py-1 border-0 focus:ring-2 focus:ring-brand-gold ${
                          application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          application.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                          application.status === 'accepted' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Position:</span>
                        <p className="text-sm text-gray-900">{application.jobId?.title}</p>
                        <p className="text-sm text-gray-600">{application.jobId?.department}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Phone:</span>
                        <p className="text-sm text-gray-900">{application.phone}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Experience:</span>
                        <p className="text-sm text-gray-900">{application.experience}</p>
                      </div>
                      {application.linkedin && (
                        <div>
                          <span className="text-sm font-medium text-gray-700">LinkedIn:</span>
                          <a href={application.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-gold hover:underline">
                            View Profile
                          </a>
                        </div>
                      )}
                      {application.portfolio && (
                        <div>
                          <span className="text-sm font-medium text-gray-700">Portfolio:</span>
                          <a href={application.portfolio} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-gold hover:underline">
                            Visit Website
                          </a>
                        </div>
                      )}
                      <div>
                        <span className="text-sm font-medium text-gray-700">Applied:</span>
                        <p className="text-sm text-gray-900">{new Date(application.appliedAt).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => viewApplicationDetails(application)}
                        className="flex-1 px-3 py-2 bg-brand-gold text-white text-sm rounded-md hover:bg-brand-gold/90 transition-colors duration-300"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => downloadResume(application)}
                        className="flex-1 px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors duration-300"
                      >
                        Download Resume
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Application Details Modal */}
      {showApplicationModal && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Application Details</h3>
                <button
                  onClick={() => setShowApplicationModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Personal Information</h4>
                    <div className="space-y-2">
                      <p><span className="font-medium">Name:</span> {selectedApplication.name}</p>
                      <p><span className="font-medium">Email:</span> {selectedApplication.email}</p>
                      <p><span className="font-medium">Phone:</span> {selectedApplication.phone}</p>
                      <p><span className="font-medium">Experience:</span> {selectedApplication.experience}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Job Information</h4>
                    <div className="space-y-2">
                      <p><span className="font-medium">Position:</span> {selectedApplication.jobId?.title}</p>
                      <p><span className="font-medium">Department:</span> {selectedApplication.jobId?.department}</p>
                      <p><span className="font-medium">Location:</span> {selectedApplication.jobId?.location}</p>
                      <p><span className="font-medium">Type:</span> {selectedApplication.jobId?.type}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Professional Links</h4>
                    <div className="space-y-2">
                      {selectedApplication.linkedin ? (
                        <p>
                          <span className="font-medium">LinkedIn:</span>{' '}
                          <a href={selectedApplication.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
                            View Profile
                          </a>
                        </p>
                      ) : (
                        <p><span className="font-medium">LinkedIn:</span> Not provided</p>
                      )}
                      {selectedApplication.portfolio ? (
                        <p>
                          <span className="font-medium">Portfolio:</span>{' '}
                          <a href={selectedApplication.portfolio} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
                            Visit Website
                          </a>
                        </p>
                      ) : (
                        <p><span className="font-medium">Portfolio:</span> Not provided</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Application Status</h4>
                    <div className="space-y-2">
                      <p><span className="font-medium">Status:</span> 
                        <select
                          value={selectedApplication.status}
                          onChange={(e) => updateApplicationStatus(selectedApplication._id, e.target.value)}
                          className={`ml-2 text-sm font-semibold rounded-full px-2 py-1 border-0 focus:ring-2 focus:ring-brand-gold ${
                            selectedApplication.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            selectedApplication.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                            selectedApplication.status === 'accepted' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="accepted">Accepted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </p>
                      <p><span className="font-medium">Applied:</span> {new Date(selectedApplication.appliedAt).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Resume</h4>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => downloadResume(selectedApplication)}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
                      >
                        Download Resume
                      </button>
                      <a
                        href={selectedApplication.resume?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-brand-gold text-white rounded-md hover:bg-brand-gold/90 transition-colors duration-300"
                      >
                        View Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowApplicationModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}