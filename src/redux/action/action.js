import { ADD_USER, DEL_USER, UPDATE_USER } from "../constant";

export const addUser = userData => {
  console.log("Action Called", userData);
  return {
    type: ADD_USER,
    payload: {
      id: new Date().getTime().toString(),
      userData,
    },
  };
};

export const deleteUser = userId => {
  return {
    type: DEL_USER,
    payload: {
      userId: userId,
    },
  };
};

export const updateUser = user => {
  console.log("updateuserData", user);
  return {
    type: UPDATE_USER,
    payload: {
      user,
    },
  };
};
