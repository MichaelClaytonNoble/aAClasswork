export const ADD_STEP = "ADD_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const addStep = (step) => ({
  type: ADD_STEP,
  step
});

export const removeStep = (step) => ({
  type: REMOVE_STEP,
  step
});

