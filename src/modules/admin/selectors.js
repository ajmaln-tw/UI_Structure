import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const userDetailas = (state) => state.userDetailas;
export const getUserDetails = flow(getState, userDetailas);
