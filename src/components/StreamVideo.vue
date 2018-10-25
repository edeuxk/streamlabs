<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6" v-if="!loading">
				<h3>Live stream</h3>
				<p>{{ videoData.items[0].snippet.title }}</p>

				<div class="row">
					<b-embed type="iframe"
					aspect="16by9"
					:src="'https://www.youtube.com/embed/' + videoData.items[0].id"
					allowfullscreen
					allowautoplay
					></b-embed>
				</div>

				<div>
					Views: {{ videoData.items[0].statistics.viewCount }} <br>
					Likes: {{ videoData.items[0].statistics.likeCount }} <br>
					Dislikes: {{ videoData.items[0].statistics.dislikeCount }} <br>
					Favorites: {{ videoData.items[0].statistics.favoriteCount }} <br>
					Comments: {{ videoData.items[0].statistics.commentCount }} <br>
				</div>
			</div>
			<div class="col-md-6" v-else>
				<p> Loading... </p>
			</div>
			<div class="col-md-6">
				<h3>Live chat</h3>
				<div style="margin-top: 10px; height: 450px; overflow-y: scroll;" id="messages">
					<b-list-group-item v-if="!loading" v-for="comment in videoComments.items">
						<b-img slot="aside" :src="comment.authorDetails.profileImageUrl" width="24" :alt="'Profil picture of' + comment.authorDetails.displayName"/>
						<a :href=comment.authorDetails.channelUrl target="_blank">{{comment.authorDetails.displayName}}</a> {{comment.snippet.displayMessage}}
					</b-list-group-item>

					<div v-else>
						<p> Loading... </p>
					</div>
				</div>
				<!-- Input for comments  -->
				<input v-if="!loading" type="text" class="form-control" id="inputPassword" placeholder="Enter your message" v-on:keyup.enter="sendComment" v-model="message">
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		data () {
			/* I only use this variable within this component, that's why it's not in the store */
			return {
				message: ""
			}
		},
		computed: {
			...mapGetters(['user', 'loggedIn', 'livestreams', 'videoData', 'loading', 'videoComments']),
		},
		async beforeCreate() {
			await this.$store.dispatch('checkAuth', localStorage);
			await this.$store.dispatch('fetchLiveInformation', this.$route.params.videoID);
			await this.$store.dispatch('fetchLiveComments');
		},
		methods: {
			sendComment: function() {
				this.$store.dispatch('postComment', this.message);
				this.message = "";
			},
		},
		mounted() {
			var container = this.$el.querySelector("#messages");
			container.scrollTop = container.scrollHeight;

			/* Interval will automatically destroy when user leave the page*/
			setInterval(() => {
				this.$store.dispatch('fetchLiveComments');
				var container = this.$el.querySelector("#messages");
				container.scrollTop = container.scrollHeight;
			}, 1500);
		}
	};
</script>

<style>
::-webkit-scrollbar {
	width: 0px;  /* remove scrollbar space */
	background: transparent;  /* optional: just make scrollbar invisible */
}
</style>