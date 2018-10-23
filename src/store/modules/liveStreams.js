import axios from 'axios';

const state = {
	livestreams: [],
	videoData: [],
	loading: true
};

export const getters = {
	livestreams: state => state.livestreams,
	videoData: state => state.videoData,
	loading: state => state.loading,
};

export const mutations = {
	SET_LIVESTREAMS(state, payload) {
		state.livestreams = payload.data;
	},
	SET_VIDEO_DATA(state, payload) {
		state.videoData = payload.data.items[0];
	},
	LOADING(state, payload){
		state.loading = payload;
	}
};

export const actions = {
	fetchLiveStreams(store) {
		axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&videoCategoryId=20&maxResults=25&key=' + store.getters.user.m)
		.then(res => {
			store.commit('SET_LIVESTREAMS', res);
		});
	},
	fetchLiveInformation(store, videoID) {
		axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=' + videoID + '&key=' + store.getters.user.m)
		.then(res => {
			store.commit('SET_VIDEO_DATA', res);
			store.commit('LOADING', false);
		});
	}
}

export default {
	state,
	getters,
	mutations,
	actions
};
