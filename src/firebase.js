import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
	apiKey: "AIzaSyCIhjHu-fc9SBS4HXjajhG75Ix0tefaNAM",
	authDomain: "hairstory-dc5ea.firebaseapp.com",
	databaseURL:
		"https://hairstory-dc5ea-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "hairstory-dc5ea",
	storageBucket: "hairstory-dc5ea.appspot.com",
	messagingSenderId: "1053972125328",
	appId: "1:1053972125328:web:cc8883527482f32c7a6a15",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signOut = () => auth.signOut();
