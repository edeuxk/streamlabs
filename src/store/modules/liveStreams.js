import axios from 'axios';

const state = {
	livestreams: [],
	videoData: [],
	videoComments: [],
	loading: true
};

export const getters = {
	livestreams: state => state.livestreams,
	videoData: state => state.videoData,
	loading: state => state.loading,
	videoComments: state => state.videoComments,
};

export const mutations = {
	SET_LIVESTREAMS(state, payload) {
		state.livestreams = payload.data;
	},
	SET_VIDEO_DATA(state, payload) {
		state.videoData = payload.data;
	},
	LOADING(state, payload){
		state.loading = payload;
	},
	UPDATE_COMMENTS(state, payload){
		state.videoComments = payload.data;
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
		return new Promise((resolve, reject) => {
			try {
				axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails%2CcontentDetails%2Cstatistics&id=' + videoID + '&key=' + store.getters.user.m)
				.then(res => {
					store.commit('SET_VIDEO_DATA', res);
					store.commit('LOADING', false);
					return resolve(res);
				});
			} catch (err) {
				return reject(err);
			}
		});
	},
	fetchLiveComments(store){
		return new Promise((resolve, reject) => {
			try {
				axios.get('https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId='
					+ store.getters.videoData.items[0].liveStreamingDetails.activeLiveChatId
					+ '&maxResults=200&profileImageSize=24&part=snippet,id,authorDetails&key='
					+ store.getters.user.m)
				.then(res => {
					store.commit('UPDATE_COMMENTS', res);
					return resolve();
				});
			} catch (err) {
				return reject();
			}
		});
	},
	postComment(store, commentMessage){
		return new Promise((resolve, reject) => {
			try {
				// POST https://www.googleapis.com/youtube/v3/liveChat/messages
				axios.post('https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet&access_token=' + store.getters.credential, {
					"snippet": {
						"liveChatId": store.getters.videoData.items[0].liveStreamingDetails.activeLiveChatId,
						"type": "textMessageEvent",
						"textMessageDetails": {
							"messageText": commentMessage
						}
					}
				}).then((response) => {
					return resolve();
				});
			} catch (err) {
				return reject();
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
