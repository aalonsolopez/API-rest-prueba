const app = require("../server");

const request = require("supertest");

const data = {
  title: "TEST GAME",
  year: "2021",
};

describe("POST /api/vgames", () => {
  let postvgameID;
  it("posts a new game", async () => {
    await request(app)
      .post("/api/vgames")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        postvgameID = res.body._id;
      })
  });

  it("posts game that already exists", async () => {
    await request(app)
      .post("/api/vgames")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400);
  });

  afterAll(async () => {
    await request(app)
      .delete(`api/vgames/${postvgameID}`);
  });
});

describe("GET api/vgames", () => {
  it("should return all the videogames in the database", async () => {
    await request(app)
      .get("/api/vgames")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("should return The Witcher game", async () => {
    await request(app)
      .get("/api/vgames/6122e901c0834e5120d1d95e")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
  it("should failure returning the videogame with 1234abcd ID", async () => {
    await request(app)
      .get("/api/vgames/1234abcd")
      .set("Accept", "application/json")
      .expect(400);
  });
});

describe("DELETE /api/vgames/", () => {
  let vgameID;
  beforeAll(async () => {
    await request(app)
      .post("/api/vgames/")
      .send(data)
      .then((response) => {
        vgameID = response.body._id;
      })
  });
  it("should delete the TEST GAME", async () => {
    await request(app)
      .delete(`/api/vgames/${vgameID}`)
      .set("Accept", "application/json")
      .expect(200);
  });
});
