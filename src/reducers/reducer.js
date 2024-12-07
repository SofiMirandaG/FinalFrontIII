export const reducer = (state, action) => {
  debugger;
    switch (action.type) {
      case "GET_DOCTORS":
        return { ...state, doctors: action.payload };
      case "ADD_CART":
        return { ...state, cart: [...state.cart, action.payload] };
      case "ADD_FAV":
        return {  ...state, favs: [...state.favs, action.payload]};
      case "DELETE_FAV":
        const filterFavs= state.favs.filter((fav) => fav.id !== action.payload.id);
        return {  ...state, favs: filterFavs};
        case "THEME":
          return {  ...state, them: !state.them };        
      default:
        throw new Error("Acción no existente");
    }
  };