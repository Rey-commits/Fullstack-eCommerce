import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // these are the few options to add so we dont get warnings
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold) //.cyan.underline is added to change colors on the console
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB