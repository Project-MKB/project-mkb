/* 
  # get recommended recipe test
  1. should return recipes that match user preferences
  2. Should return correct array for recommendation
*/

const { setupDB, request } = require("../test-setup");
const { getToken, signup, deleteUser } = require("../auth-setup");
const { calRecRecipes } = require("../../routes/recipes");
setupDB("recipe-test");

describe("List recommended recipes test", () => {
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

  const listRec = async token => {
    return await request
      .get("/recipes/listRecs")
      .set("Authorization", "Bearer " + token);
  };

  test("Should return recipes that match user preferences", async done => {
    const token = await getToken();
    await create(
      {
        title: "The Best Shrimp Alfredo",
        ingredients: ["shrimp", "fettuccine", "soy sauce"],
        directions: ["prepare ingredients", "cook", "eat", "clean"],
        prepTime: 10,
        cookTime: 15,
        servingSize: 3,
        category: "entry",
        cuisine: "italy",
        footNote: ["use peeled shrimp", "be careful not to burn your house"],
        difficulty: 2,
        mainImage:
          "https://firebasestorage.googleapis.com/v0/b/project-mkb.appspot.com/o/shrimp-alfredo2.jpg?alt=media&token=d202d3e6-9d73-41ed-a4c3-1490e455998e",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/project-mkb.appspot.com/o/shrimp-alfredo.jpg?alt=media&token=064dd89d-9a63-471b-b964-da882f2cdc7b",
          "https://firebasestorage.googleapis.com/v0/b/project-mkb.appspot.com/o/antman.png?alt=media&token=6af2570a-33fb-4f5c-ad47-f90a75cf2a86"
        ],
        tags: ["italy", "shrimp", "creamy"]
      },
      token
    );

    const res = await listRec(token);

    const recipe = res.body[0];
    expect(recipe.title).toBe("The Best Shrimp Alfredo");
    expect(recipe.cuisine).toBe("italy");
    expect(recipe.tags).toEqual(["italy", "shrimp", "creamy"]);

    done();
  });

  // business logic test
  test("Should return correct array for recommendation", () => {
    const userPref = ["3", "9", "6"];
    const allRecipes = [];
    for (let i = 0; i < 100; i++) {
      const length = Math.floor(Math.random() * 10);
      const tags = [];
      for (let j = 0; j < length; j++) {
        const randomNumber = Math.floor(Math.random() * 10 + 1).toString();
        tags.push(randomNumber);
      }
      const setTags = new Set(tags);
      allRecipes.push({ tags: [...setTags] });
    }

    const recRecipes = calRecRecipes(userPref, allRecipes);
    console.log(recRecipes);
    recRecipes.forEach(recipe => {
      expect(recipe.tags).toEqual(expect.arrayContaining(userPref));
    });
  });
});
