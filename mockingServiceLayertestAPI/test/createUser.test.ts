import { UserModel } from "../src/model/user.model";
import {createUser} from "../src/controller/user.controller";
import {NextFunction} from "express";
import app from "../index"
import request from "supertest";

describe("Test create user", () => {
    it("should create user", async () => {
        jest.spyOn(UserModel.prototype, 'save')
            .mockImplementationOnce(() => Promise.resolve());
        const mockRequest: any = {
            body: {
                username: "test",
                password: "123456"
            }
        };
        const mockResponse: any = {
            json: jest.fn(),
            status: jest.fn()
        };
        const mockNext : NextFunction = jest.fn();
        await createUser(mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
    })
})

describe('User Endpoints', () => {
    it('should create a new users', async () => {
        const res = await request(app)
            .post('/api/v1/register')
            .send({
                username: "test2",
                password: "123456"
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('username')
    })
})