import User from "../models/userModel";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../config/jwtToken";

export const createUser = expressAsyncHandler(
  async (req: any, res: any, next: any) => {
    const email = req.body.email;
    const mobile = req.body.mobile;
    const findUserEmail = await User.findOne({ email: email });
    const findUserMobile = await User.findOne({ mobile: mobile });
    if (!findUserEmail && !findUserMobile) {
      try {
        const newUser = await User.create(req.body);
        res.json(newUser);
      } catch (error) {
        throw new Error(error as string);
      }
    } else {
      res.status(400);
      const error = new Error("User already exist!");
      next(error);
    }
  }
);

export const loginUser = expressAsyncHandler(
  async (req: any, res: any, next: any) => {
    const email = req.body.email;
    const password = req.body.password;
    const findUserEmail = await User.findOne({ email: email });
    if (findUserEmail && (await findUserEmail.isPasswordMatched(password))) {
      res.json({
        _id: findUserEmail._id,
        firstname: findUserEmail.firstname,
        lastname: findUserEmail.lastname,
        email: findUserEmail.email,
        mobile: findUserEmail.mobile,
        token: generateToken(findUserEmail._id),
      });
    } else {
      res.status(400);
      const error = new Error("Invalid User!");
      next(error);
    }
  }
);
