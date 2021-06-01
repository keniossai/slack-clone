// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyBY0_1hf7e-ioXy38KeOOaOq07TeflkUNU',
	authDomain: 'slack-app-68767.firebaseapp.com',
	projectId: 'slack-app-68767',
	storageBucket: 'slack-app-68767.appspot.com',
	messagingSenderId: '1079255779472',
	appId: '1:1079255779472:web:d1c2aeaa30563c21f8f015',
	measurementId: 'G-L00XK2XWB5',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

//  Completed
