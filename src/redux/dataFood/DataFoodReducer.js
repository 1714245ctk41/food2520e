const INTIAL_STATE = {
  section: [
    {
      id: 1,
      title: "Vegetables",
      routeName: "vegetables",
    },

    {
      id: 2,
      title: "Drink & Ice",
      routeName: "drinkice",
    },
    {
      id: 3,
      title: "Fresh Meat",
      routeName: "freshmeat",
    },
    {
      id: 4,
      title: "Juice",
      routeName: "juice",
    },
    {
      id: 5,
      title: "Bread & Cake",
      routeName: "breadcake",
    },
  ],
};
const directoryReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
