import firebase from "firebase";
import { fetchDataPending, fetchDataSuccess, fetchDataError } from "../actions";

const config = {
  apiKey: "AIzaSyDy6L5xXg2WRwBR7bSTO-WyO3f5bQpFvbI",
  authDomain: "warcraft-quiz.firebaseapp.com",
  databaseURL: "https://warcraft-quiz.firebaseio.com",
  projectId: "warcraft-quiz",
  storageBucket: "warcraft-quiz.appspot.com",
  messagingSenderId: "31351224183",
  appId: "1:31351224183:web:6af8207e8ed17e23e85372",
};

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.database();

function get(path) {
  return (dispatch) => {
    dispatch(fetchDataPending());
    const itemsRef = db.ref(path);
    itemsRef.on("value", (snapshot) => {
      let items = snapshot.val();
      dispatch(fetchDataSuccess(Object.values(items)));
    });
  };
}

function post(path, id, data) {
  return new Promise((resolve, reject) => {
    db.ref(`${path}/${id}`).set(data, (error) => {
      if (error) console.log(error);
      else resolve();
    });
  });
}

function deleteNode(path, id) {
  return new Promise((resolve, reject) => {
    db.ref(path).child(id).remove();
  });
}

export default {
  get,
  post,
  auth,
  deleteNode,
};
