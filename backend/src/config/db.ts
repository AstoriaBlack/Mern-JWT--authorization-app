import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log("Could not connect to database", error);
        process.exit(1);
        // Exit the process with a failure code
    }

}
export default connectToDatabase;
