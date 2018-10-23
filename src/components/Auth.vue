<template>
	<div>
		<div v-if="loggedIn">
			<span style="text-color: #000"> {{ user.displayName }} </span>
			<button class="btn btn-danger" @click="LOG_OUT()">Log Out</button>
		</div>
		<button class="btn btn-primary" v-if="!loggedIn" @click="LOG_IN()">Log in</button>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from "vuex";

	export default {
		methods: {
			...mapMutations(['LOG_IN', 'LOG_OUT'])
		},
		computed: {
			...mapGetters(['user', 'loggedIn'])
		},
		beforeCreate() {
			this.$store.dispatch('fetchCreds');
		}
	};
</script>

<style>
</style>
