import firebase from "../../helpers/firebase";

const state = {
	user: {},
	credential: ""
};

export const getters = {
	user: state => state.user,
	loggedIn: state => 'uid' in state.user,
	credential: state => state.credential
};

export const mutations = {
	SET_USER(state, payload) {
		state.user = payload;
	},
	SET_CREDENTIAL(state, payload) {
		state.credential = payload;
	},
	LOG_OUT() {
		firebase.auth().signOut();
	}
};

export const actions = {
	logIn(store) {
		return new Promise((resolve, reject) => {
			const provider = new firebase.auth.GoogleAuthProvider();
			provider.addScope("https://www.googleapis.com/auth/youtube");
			provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

			firebase.auth().signInWithPopup(provider).then((result) => {
				let { displayName, email, photoURL, uid, m } = result.user;
				let cleanedUser = { displayName, email, photoURL, uid, m };

				store.commit('SET_USER', cleanedUser);

				store.commit('SET_CREDENTIAL', result.credential.accessToken);
				return resolve({
					accessToken: result.credential.accessToken,
					displayName: cleanedUser.displayName,
					email: cleanedUser.email,
					photoURL: cleanedUser.photoURL,
					uid: cleanedUser.uid,
					m: cleanedUser.m
				});
			});
		});
	},
	checkAuth(store, localEnv){
		return new Promise((resolve, reject) => {
			if (localEnv.accessToken && localEnv.displayName && localEnv.email && localEnv.photoURL && localEnv.uid && localEnv.m){
				let { displayName, email, photoURL, uid, m } = localEnv;
				let cleanedUser = { displayName, email, photoURL, uid, m };

				store.commit('SET_USER', cleanedUser);
				store.commit('SET_CREDENTIAL', localEnv.accessToken);

				return resolve(localEnv);
			}
		});
	}
}

export default {
	state,
	getters,
	mutations,
	actions
};
