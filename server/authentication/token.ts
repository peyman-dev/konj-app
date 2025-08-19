import jwt from "jsonwebtoken";
import { configs, TOKEN_EXPIRE_TIME } from "../settings";

export const createToken = async (key: any) => {
  try {
    const token = await jwt.sign(
      key,
      process.env.NEXT_PUBLIC_NEXT_PUBLIC_SECRET_KEY as string,
      configs.jwt.sign
    );

    return token;
  } catch (error: any) {
    throw new Error(error);
  }
};
