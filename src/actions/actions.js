export const addToCart = (item, uniqueId) => {
  return {
    type: 'ADD_CART',
    payload: { ...item, uniqueId: uniqueId },
  };
};

export const deleteFromCart = (uniqueId) => {
  return {
    type: 'REMOVE_CART',
    payload: uniqueId,
  };
};
