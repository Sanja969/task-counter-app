import request from "supertest";
import { app } from "../src/app";

describe("GET /api/tasks/count", () => {
  it("returns task count for userId and status", async () => {
    const response = await request(app)
      .get("/api/tasks/count")
      .query({ userId: 1, status: "done" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      userId: 1,
      status: "done",
      count: 2,
    });
  });

  it("returns 400 if userId is missing", async () => {
    const response = await request(app)
      .get("/api/tasks/count")
      .query({ status: "done" });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "userId and status are required",
    });
  });
});