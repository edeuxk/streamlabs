<template>
	<div id="app">
		<div class="container">
			<div id="nav">
				<b-navbar toggleable="md" type="dark" variant="info">
					<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
					<b-navbar-brand to="/streamlabs">StreamLabs</b-navbar-brand>
					<b-collapse is-nav id="nav_collapse">.
						<b-navbar-nav>
							<b-nav-item to="/streamlabs">
								Home
							</b-nav-item>
							<input type="text" class="form-control" placeholder="Search for a livestream" v-model="searchQuery" v-on:keyup.enter="searchLiveStreams">
						</b-navbar-nav>

						<b-navbar-nav class="ml-auto">
							<Auth></Auth>
						</b-navbar-nav>
					</b-collapse>
				</b-navbar>
			</div>
		</div>

		<router-view/>

	</div>
</template>

<style>
</style>

<script>
	import Auth from "./components/Auth.vue";

	export default {
		data () {
			return {
				searchQuery: ""
			}
		},
		components: { Auth },
		methods: {
			searchLiveStreams: async function(){
				await this.$store.dispatch('fetchLiveStreamsWithQuery', this.searchQuery);
				this.$router.push('/streamlabs');
			}
		},
	}
</script>
