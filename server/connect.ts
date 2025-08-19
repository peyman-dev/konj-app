import mongoose from "mongoose";

export const connectToServer = async () => {
  try {
    if (!mongoose.connections[0].readyState) {
      return;
    }

    await mongoose
      .connect(process.env.NEXT_PUBLIC_MONGO_URI as string)
      .then(() => {
        console.log("Mongodb connected successfully.");
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error: any) {
    throw new Error(error);
  }
};
