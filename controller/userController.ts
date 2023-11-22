import { Request, Response } from "mongoose";
import userModel from "../model/userModel";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, avatar, companyName } = req.body;

    const user = await userModel.create({ name, avatar, companyName });

    return res.status(201).json({
      msg: "User created",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error creating",
    });
  }
};
