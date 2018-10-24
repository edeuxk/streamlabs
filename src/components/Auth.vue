<template>
	<div>
		<div v-if="loggedIn">
			<span style="color: #fff; margin: 5px"> {{ user.displayName }} </span>
			<button class="btn btn-danger" @click="logOut()">Log Out</button>
		</div>
		<button class="btn btn-primary" v-if="!loggedIn" @click=startLogin()>Log in</button>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from "vuex";

	export default {
		methods: {
			...mapMutations(['LOG_OUT']),
			logOut: async function() {
				localStorage.clear()
				this.LOG_OUT();
				window.location = '/';
			},
			startLogin: async function(){
				let results = await this.$store.dispatch('logIn', localStorage);

				localStorage.accessToken = results.accessToken;
				localStorage.displayName = results.displayName;
				localStorage.email = results.email;
				localStorage.photoURL = results.photoURL;
				localStorage.uid = results.uid;
				localStorage.m = results.m;
				window.location = '/';
			}
		},
		computed: {
			...mapGetters(['user', 'loggedIn'])
		},
		async beforeCreate() {
			await this.$store.dispatch('checkAuth', localStorage);
		}
	};
</script>

<style>
</style>
