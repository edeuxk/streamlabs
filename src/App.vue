<template>
	<div id="app">
		<div class="container">
			<div id="nav">
				<b-navbar toggleable="md" type="dark" variant="info">
					<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
					<b-navbar-brand to="/">StreamLabs</b-navbar-brand>
					<b-collapse is-nav id="nav_collapse">
						<b-navbar-nav>
							<b-nav-item to="/">
								Home
							</b-nav-item>
<!-- 							<b-nav-item to="/stats">
								Stats
							</b-nav-item>
 -->						</b-navbar-nav>

						<b-navbar-nav class="ml-auto">
							<b-nav-form>
								<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
								<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
							</b-nav-form>
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
		components: { Auth }
	}
</script>
