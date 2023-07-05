import { ADD_USER, DEL_USER, UPDATE_USER } from "../constant";

const initialState = {
  users: [],
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log("Reducer Called", action);
      const { id, userData } = action.payload;
      const newUser = { id, userData };
      return {
        ...state,
        users: [...state.users, newUser],
      };

    case DEL_USER:
      const { userId } = action.payload;
      return {
        ...state,
        users: state.users.filter(user => user.id !== userId),
      };

    case UPDATE_USER:
      const { user } = action.payload;
      const updatedUsers = state.users.map(existingUser =>
        existingUser.id === user.id
          ? { ...existingUser, ...user }
          : existingUser
      );
      return {
        ...state,
        users: updatedUsers,
      };

    default:
      return state;
  }
};
