import jwt, { Secret } from "jsonwebtoken";
export const generateToken = (id: string) => {
  return jwt.sign({ id }, "datdz", { expiresIn: "3d" });
};
