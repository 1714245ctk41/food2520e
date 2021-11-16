import firebase from "firebase/app";
//* cách này tránh những gói không cần thiết
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYa0xkGLY88c2DODjOZtjdicxzaPIV0z0",
  authDomain: "marketproject-bbbff.firebaseapp.com",
  databaseURL: "https://marketproject-bbbff.firebaseio.com",
  projectId: "marketproject-bbbff",
  storageBucket: "marketproject-bbbff.appspot.com",
  messagingSenderId: "977781680543",
  appId: "1:977781680543:web:89b10332435d613a9535aa",
  measurementId: "G-7XHDYB6K68",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // const collectionRef = await firestore.collection("users");
  // const collectionSnapshot = await collectionRef.get();
  // console.log({ collection: collectionSnapshot.docs.map((doc) => doc.data()) });

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef.doc());

  const batch = firestore.batch();
  objectsToAdd.forEach((element) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, element);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    console.log(doc.data());
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

//* để xử dụng auth
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//* truy cập auth.GoogleAuthProvider class từ libraries này
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
