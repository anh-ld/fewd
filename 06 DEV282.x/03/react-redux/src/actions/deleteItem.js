const deleteItem = (index) => {
  return {
    type: "DELETE_ITEM",
    index: index
  };
};

export default deleteItem;