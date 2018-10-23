<template>
	<div class="container">
		<div v-if="loggedIn">
			<h1>Live streams</h1>
			<p>Hello {{ user.displayName }} what do you want to watch today?</p>

			<div class="row">
				<div v-for="stream in livestreams.items">
					<b-card :title=stream.snippet.channelTitle
					:img-src=stream.snippet.thumbnails.high.url
					:img-alt="'Cover image youtube ' + stream.snippet.channelTitle"
					img-top
					tag="article"
					style="max-width: 20rem;"
					class="mb-2">
					<p class="card-text">
						{{ stream.snippet.title }}
						<br>
						<br>
						Started {{ stream.snippet.publishedAt }}
					</p>
					<b-button v-bind:href="'#/view/' + stream.id.videoId" variant="primary">Watch stream</b-button>
				</b-card>
			</div>
		</div>
	</div>

	<div v-else>
		<p>Access restricted, please use the connect button.</p>
	</div>
</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		computed: {
			...mapGetters(['user', 'loggedIn', 'livestreams']),
		},
		async beforeCreate() {
			await this.$store.dispatch('checkAuth', localStorage);
			this.$store.dispatch('fetchLiveStreams');
		}
	};
</script>

<style>
</style>
