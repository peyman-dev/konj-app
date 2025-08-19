import { SignOptions } from "jsonwebtoken";

export const TOKEN_EXPIRE_TIME = 60 * 60 * 3;

export const configs = {
  jwt: {
    sign: {
      expiresIn: TOKEN_EXPIRE_TIME,
      algorithm: "HS256",
    } as SignOptions,
  }
};
