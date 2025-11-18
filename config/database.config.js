const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://:ttthinha24062:ttthinha24062@cluster0.fgvh56z.mongodb.net/?appName=Cluster0');
        console.log('Kết nối MongoDB thành công.');
    } catch (err) {
        console.error('Lỗi kết nối MongoDB: ', err);
        process.exit(1);
    }
};

module.exports = connectDB;