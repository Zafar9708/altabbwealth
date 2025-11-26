// import mongoose from 'mongoose';

// const ApplicationSchema = new mongoose.Schema({
//   jobId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Job',
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   resume: {
//     type: String,
//     required: true,
//   },
//   coverLetter: {
//     type: String,
//   },
//   experience: {
//     type: String,
//   },
//   linkedin: {
//     type: String,
//   },
//   portfolio: {
//     type: String,
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'reviewed', 'accepted', 'rejected'],
//     default: 'pending',
//   },
//   appliedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);


// models/Application.js
import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  experience: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
  },
  portfolio: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'accepted', 'rejected'],
    default: 'pending',
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);