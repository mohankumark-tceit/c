import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyDRQFtGnbQFybV3bgmj5eaLlplBBdKqtY0",
  authDomain: "nnnn-d4604.firebaseapp.com",
  projectId: "nnnn-d4604",
  storageBucket: "nnnn-d4604.firebasestorage.app",
  messagingSenderId: "172990162335",
  appId: "1:172990162335:web:3a742eb905314ff288c9aa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "home.html")
    .catch(err => alert(err.message));
});

document.getElementById("signupBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Account created! You can login now."))
    .catch(err => alert(err.message));
});
