/* 
  # create recipe test
  1. should update recipe successfully
*/

const { setupDB, request } = require("../test-setup");
const { getToken, signup, deleteUser } = require("../auth-setup");
setupDB("recipe-test");

describe("Update recipe test", () => {
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

  const update = async (id, recipe, token) => {
    return await request
      .post(`/recipes/update/${id}`)
      .send(recipe)
      .set("Authorization", "Bearer " + token);
  };

  test("Should update recipe successfully", async done => {
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

    const resUpdate = await update(
      resCreate.body._id,
      {
        title: "updated",
        ingredients: ["updated"],
        directions: ["updated"],
        prepTime: 100,
        cookTime: 100,
        servingSize: 100,
        category: "updated",
        cuisine: "updated",
        difficulty: 100,
        mainImage: "updated",
        tags: ["updated"]
      },
      token
    );
    if (resUpdate.error) {
      console.error(resUpdate.error);
    }

    const recipe = resUpdate.body;

    expect(recipe.title).toBe("updated");
    expect(recipe.totalTime).toBe(200);
    expect(recipe.ingredients).toEqual(["updated"]);
    expect(recipe.directions).toEqual(["updated"]);
    expect(recipe.tags).toEqual(["updated"]);

    done();
  });
});
