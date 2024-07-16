export const dark = (val) => {
  return {
    type: "DARK",
    payload: val,
  };
};

export const light = (val) => {
  return {
    type: "LIGHT",
    payload: val,
  };
};

const themeActions = { dark, light };
export default themeActions;
