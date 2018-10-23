import firebase from "../../helpers/firebase";

const state = {
	user: {}
};

export const getters = {
	user: state => state.user,
	loggedIn: state => 'uid' in state.user
};

export const mutations = {
	SET_USER(state, payload) {
		state.user = payload;
	},
	LOG_IN() {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase.auth().signInWithRedirect(provider);
	},
	LOG_OUT() {
		firebase.auth().signOut();
	}
};

export const actions = {
	fetchCreds(store) {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				const { displayName, email, photoURL, uid, m } = user;
				const cleanedUser = { displayName, email, photoURL, uid, m};

				store.commit('SET_USER', cleanedUser);
				/* Fetch live streams */
				store.dispatch('fetchLiveStreams');
			} else {
				store.commit('SET_USER', {});
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
