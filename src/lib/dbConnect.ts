import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }
  // jodi mongodb uri na thake
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not defined");
    throw new Error("MONGODB_URI is not defined in the environment variables");
  }
  // try catch
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });

    mongoose.set("bufferCommands", false);
    connection.isConnected = db.connections[0].readyState;
    // Ensure the connection is ready before proceeding
    if (mongoose.connection.readyState !== 1) {
      await new Promise((resolve, reject) => {
        mongoose.connection.once("connected", resolve);
        mongoose.connection.once("error", reject);
      });
    }

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    // Handle onnection error gracefully
    throw new Error("Failed to connect to the database");
  }
}

export default dbConnect;
