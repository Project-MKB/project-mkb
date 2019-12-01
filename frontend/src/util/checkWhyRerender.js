// Check why the component is re-rendered
// and print what have been changed per each rerender
const checkWhyRerender = (prevProps, prevState, props, state) => {
  Object.entries(props).forEach(
    ([key, val]) =>
      prevProps[key] !== val &&
      console.log(
        `Prop '${key}' changed \n Prev: ${JSON.stringify(
          prevProps[key]
        )} \n Now: ${JSON.stringify(val)}`
      )
  );
  if (state) {
    Object.entries(state).forEach(
      ([key, val]) =>
        prevState[key] !== val &&
        console.log(
          `State '${key}' changed \n Prev: ${JSON.stringify(
            prevState[key]
          )} \n Now: ${JSON.stringify(val)}`
        )
    );
  }
};

export default checkWhyRerender;
