// Di sini kita akan import beberapa fungsi dari package firebase
import { initializeApp } from "firebase/app";

// Di sini kita akan import beberapa fungsi dari package firebase/auth
// Firebase ini sebenarnya memungkinkan kita untuk bisa login dengan banyak sekali
// Provider (Google, Github, Meta, dsb).

// Tapi pada pembelajaran ini kita akan menggunakannya via Email saja yah
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm01qBWyd_Gad_Jw4M6Diqh9k40vuQ-JI",
  authDomain: "dts2022-dc329-190398.firebaseapp.com",
  projectId: "dts2022-dc329-190398",
  storageBucket: "dts2022-dc329-190398.appspot.com",
  messagingSenderId: "229454363393",
  appId: "1:229454363393:web:985258706ae885f839b900",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log(err);

    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sudah dikirimkan");
  } catch (err) {
    console.log(err);
  }
};

const keluarDariApps = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  resetPassword,
  keluarDariApps,
};
