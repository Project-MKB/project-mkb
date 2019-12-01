/* 
  # create recipe test
  1. should create recipe successfully
*/

const { setupDB, request } = require("../test-setup");
const { getToken, signup, deleteUser } = require("../auth-setup");
setupDB("recipe-test");

describe("Create recipe test", () => {
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

  test("Should create recipe successfully", async done => {
    const token = await getToken();
    const res = await create(
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

    const recipe = res.body;
    expect(recipe.title).toBe("The Best Shrimp Alfredo");
    expect(recipe.totalTime).toBe(25);
    expect(recipe.ingredients).toEqual(["shrimp", "fettuccine", "soy sauce"]);
    expect(recipe.directions).toEqual([
      "prepare ingredients",
      "cook",
      "eat",
      "clean"
    ]);
    expect(recipe.tags).toEqual(["italy", "shrimp", "creamy"]);

    done();
  });
});
