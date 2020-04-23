import http from "./httpService";

const tokenKey = "user";

function register({ email, password, username }) {
  return new Promise(async (resolve) => {
    const response = await http.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const uid = response.user.uid;
    const user = {
      username,
      level: 0,
      characterId: 0,
      id: uid,
    };

    await http.post("users", uid, user);
    localStorage.setItem(tokenKey, JSON.stringify(user));
    resolve();
  });
}

function login({ email, password }) {
  return new Promise(async (resolve) => {
    const response = await http.auth.signInWithEmailAndPassword(
      email,
      password
    );
    const uid = response.user.uid;
    const user = await http.get(`users/${uid}`);
    console.log(user);
    localStorage.setItem(tokenKey, JSON.stringify(user));
    resolve();
  });
}

function logOut() {
  localStorage.removeItem(tokenKey);
  window.location = "/";
}

function getCurrentUser() {
  return new Promise(async (resolve) => {
    const uid = getToken();
    if (uid) {
      const user = await http.get(`users/${uid}`);
      // user.favouriteList = user.favouriteList || [];
      return resolve(user);
    }
    localStorage.setItem({ id: 0, level: 0, characterId: 0, username: "User" });
  });
}

function getToken() {
  return localStorage.getItem(tokenKey);
}

export default {
  register,
  login,
  logOut,
  getCurrentUser,
  getToken,
};
