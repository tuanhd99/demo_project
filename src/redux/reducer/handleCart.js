const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      //check if product is already Exist
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        //increase the quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            pty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      // const exist1 = state.find((item) => item.id === product.id);
      // if (exist1.qty === 1) {
      //   return state.filter((item) => item.id !== exist1.id);
      // } else {
      //   return state.map((item) =>
      //     item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      //   );
      // }

      return (state = state.filter((item) => {
        return item.id !== product.id;
      }));
      break;
    default:
      return state;
      break;
  }
};
export default handleCart;
