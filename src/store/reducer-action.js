let initialState = {
  categories: [{ normalizedName: 'Food ', displayName: 'Fruit', description: 'Fruit is the sweet, fleshy, edible part of a plant' },
    { normalizedName: 'Food ', displayName: 'Vegetables', description: 'Vegetables are filled with antioxidants, fiber, vitamins, and minerals' },
    { normalizedName: 'Food ', displayName: 'Meat', description: 'Meat is animal flesh that is eaten as food' }],
  activeCategories: '',
  products: [{ categoryAassociation: 'Fruit', name: 'Apple', description: 'An apple is a sweet, edible fruit produced by an apple tree', price: 10, inventoryCount: 40 },
    { categoryAassociation: 'Vegetables', name: 'potato', description: 'The potato is a root vegetable native to the Americas', price: 20, inventoryCount: 50 },
    { categoryAassociation: 'Meat', name: 'lamb', description: 'A sheep in its first year is a lamb and its meat is also lamb', price: 30, inventoryCount: 60 }],
};
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
  case 'RENDER':
    let activeCategories = state.activeCategories;
    let categories = state.categories.map(category => {
      if (category.displayName === payload) {
                    
        return activeCategories = category.displayName;
      }
      return category;
    });
    let activeCategoriesNew = activeCategories;
    let products = state.products.map(product => {
      if (product.categoryAassociation === payload) {
        return product.categoryAassociation = activeCategoriesNew;
      }
      return product;
    });
    return { activeCategories, categories, products};
     
  case 'RESET':
    return initialState;
  default:
    return state;
  }

};
export const render = (displayName) => {
  return {
    type: 'RENDER',
    payload: displayName,
  };
};
export const reset = () => {
  return {
    type: 'RESET',
  };
};


