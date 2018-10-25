import Vue from 'vue'
import Router from 'vue-router'
import StreamList from './components/StreamList.vue'
import StreamVideo from './components/StreamVideo.vue'
import Auth from './components/Auth.vue';

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
	{
		path: '/',
		component: StreamList
	},
	{
		path: '/streamlabs',
		component: StreamList
	},
	{
		path: '/streamlabs/view/:videoID',
		component: StreamVideo
	},
	{
		path: '/auth',
		component: Auth
	}
	]
})
