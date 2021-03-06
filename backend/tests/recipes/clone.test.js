/* 
  # create recipe test
  1. should clone recipe successfully
*/

const { setupDB, request } = require("../test-setup");
const { getToken, signup, deleteUser } = require("../auth-setup");
setupDB("recipe-test");

describe("Clone recipe test", () => {
  let testUid = "";
  beforeAll(async () => {
    testUid = await signup();
  });
  afterAll(() => deleteUser(testUid));

  const create = async (recipe, token) => {
    return await request
      .post("/recipes/add")
      .send(recipe)
      .set("Authorization", "Bearer " + token);
  };

  const clone = async (id, token) => {
    return await request
      .post(`/recipes/clone/${id}`)
      .set("Authorization", "Bearer " + token);
  };

  test("Should clone recipe successfully", async done => {
    const token = await getToken();
    const resCreate = await create(
      {
        title: "The Best Shrimp Alfredo",
        ingredients: ["shrimp", "fettuccine", "soy sauce"],
        directions: ["prepare ingredients", "cook", "eat", "clean"],
        prepTime: 10,
        cookTime: 15,
        servingSize: 3,
        category: "entry",
        cuisine: "italy",
        difficulty: 2,
        mainImage:
          "https://firebasestorage.googleapis.com/v0/b/project-mkb.appspot.com/o/shrimp-alfredo2.jpg?alt=media&token=d202d3e6-9d73-41ed-a4c3-1490e455998e",
        tags: ["italy", "shrimp", "creamy"]
      },
      token
    );

    const resClone = await clone(resCreate.body._id, token);
    if (resClone.error) {
      console.error(resClone.error);
    }

    const recipe = resClone.body;

    expect(recipe.title).toBe("The Best Shrimp Alfredo");
    expect(recipe.totalTime).toBe(25);
    expect(recipe.uid).toBe(testUid);
    expect(recipe._id).not.toBe(resCreate.body._id);

    done();
  });
});
