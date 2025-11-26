const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = 'mongodb+srv://ArunMishra:smdKWc7tsZwLaZPq@cluster0.jzwng9i.mongodb.net/altabb-careers?retryWrites=true&w=majority&appName=Cluster0/altabb-careers';

async function setupAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    
    const User = mongoose.model('User', {
      email: String,
      password: String,
      role: String,
      createdAt: Date,
    });

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'arun.mishra@altabb.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 12);
    await User.create({
      email: 'arun.mishra@altabb.com',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date(),
    });

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email: admin@altabb.com');
    console.log('🔑 Password: admin123');
    console.log('\n⚠️  Please change the password after first login!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error setting up admin:', error);
    process.exit(1);
  }
}

setupAdmin();