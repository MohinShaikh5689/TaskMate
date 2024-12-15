import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`Connected to DB: ${connection.connection.host}`);

    } catch (error) {
        console.log("Error connecting to DB: ", error);
    }
}

