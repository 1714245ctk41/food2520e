import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import CartReducer from "./cart/CartReducer";
import { persistReducer } from "redux-persist";
//* là local storage object của window browser cũng có thể thay thế cho sessionStorage
//* bên dưới là regular storage
import storage from "redux-persist/lib/storage";
import directoryReducer from "./dataFood/DataFoodReducer";
import shopReducer from "./shop/ShopReducer";

const persistConfig = {
  //* storage from the root
  key: "root",
  //* redux sử dụng storage này
  storage,
  //* chứa các reducer mà chúng ta muốn lưu trữ trong storage
  whitelist: ["cart"],
};
//* top-level
const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
