<template>
	<div class="container">
		<div v-if="!loading">
			<h5>{{ videoData.snippet.title }}</h5>
			<div class="row">
				<b-embed type="iframe"
				aspect="16by9"
				:src="'https://www.youtube.com/embed/' + videoData.id"
				allowfullscreen
				allowautoplay
				></b-embed>
			</div>
		</div>
		<div v-else> Loading... </div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		computed: {
			...mapGetters(['user', 'loggedIn', 'livestreams', 'videoData', 'loading']),
		},
		beforeCreate() {
			this.$store.dispatch('fetchLiveInformation', this.$route.params.videoID);
		}
	};
</script>

<style>
</style>
