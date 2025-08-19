"use server";

import { connectToServer } from "@/server/connect";

export const loginAction = async (data: any) => {
  try {
    await connectToServer();

  } catch (error) {}
};
