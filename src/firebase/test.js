import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("GeeQPB3dN2UlSHfdDRK4")
  .collection("cartItems")
  .doc("K7ZsQzLZ2RAt217GZmKC");

firestore.doc("/users/GeeQPB3dN2UlSHfdDRK4/cartItems/K7ZsQzLZ2RAt217GZmKC");
firestore.collection("/users/GeeQPB3dN2UlSHfdDRK4/cartItems");
