import { Request, Response, NextFunction } from "express";
import { UserModel } from "../model/user.model"

export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const userNew = new UserModel(req.body);
        await userNew.save();
        res.status(200).json({username: userNew.username});
        } catch (err) {
          next(err);
    }
}