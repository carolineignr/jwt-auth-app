<template>
	<div>
    <router-link v-if="!isLoggedIn" to="/login"><button>Login</button></router-link>

		<div v-else>
			<h1>Welcome</h1>
			<p>Simples fluxo de login usando JWT, Vuex e vue-router</p>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(['isLoggedIn']),
	},
};
</script>