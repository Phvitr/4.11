import request from "supertest";

import app from "../index";

describe("test root path", () => {
    test("it should response the GET method", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    })
})