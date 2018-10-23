import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		user: null,
		// livestreams: [],
		// searchQuery: "",
	},
	getters: {
		getUser: state => state.user,
		getVideoInformation(state, videoID) {
			axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + videoID + "&key=" + state.user.m)
			.then(response => {
				console.log(response)
			});
		}
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
			// state.user = firebase.auth().currentUser;
			console.log("[STORE] User connected");
			// axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&videoCategoryId=20&maxResults=40&key=" + state.user.m)
			// .then(response => {
			// 	state.livestreams = response.data.items
			// });
		}
	},
	actions: {
		searchQuery: context => {
			context.commit('setSearchQuery');
		},
		setUser(context, user) {
			context.commit('SET_USER', user);
		},
		getVideoInformation: context => {
			context.commit('getVideoInformation');
		}
	}
});
