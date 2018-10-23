import { initializeApp, auth } from "firebase";

const config = {
	apiKey: "AIzaSyBTq_Uti9tRC-j_EjNp4tUPJ4q2vCxTteQ",
	authDomain: "streamblabs-itw.firebaseapp.com",
	databaseURL: "https://streamblabs-itw.firebaseio.com",
	projectId: "streamblabs-itw",
	storageBucket: "streamblabs-itw.appspot.com",
	messagingSenderId: "803486570207"
};

initializeApp(config);

export default {
  auth
}
