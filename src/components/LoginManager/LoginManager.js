import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";

//initializing firebase app
export const initializeLoginFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

//google sign in
export const googleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const user = result.user;
      const newUser = {
        displayName: user.displayName,
        email: user.email,
      };
      return [newUser, true];
    })
    .catch((error) => {
      return ["This is from error", false];
    });
};

//facebook sign in
export const fbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      var user = result.user;
      const newUser = {
        displayName: user.displayName,
        email: user.email,
      };
      return [newUser, true];
    })
    .catch((error) => {
      return ["This is from error", false];
    });
};

//sign in with email and password
export const signInWithEmailAndPassword = (props) => {
  const { email, password } = props;
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const newUser = {
        displayName: user.displayName,
        email: user.email,
      };
      return [newUser, true];
    })
    .catch((error) => {
      return ["This is from error", false];
    });
};

//creating new user with email and password
export const creatingNewUserWithEmailAndPassword = (props) => {
  const { email, password, name } = props;
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const newUser = {
        displayName: name,
        email: email,
      };
      return [newUser, true];
    })
    .catch((error) => {
      return ["This is from error", false];
    });
};

export const updateUsername = (name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      //console.log("Username updated successfully");
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const storeAuthToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(true)
    .then(function (idToken) {
      sessionStorage.setItem("token", idToken);
    })
    .catch(function (error) {});
};

const LoginManager = () => {
  return <div></div>;
};

export default LoginManager;
