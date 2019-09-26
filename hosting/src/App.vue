<template>
  <v-app>
    <v-navigation-drawer
      app
      v-if="auth"
      v-model="drawer"
      clipped
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      dense
      clipped-left
    >
      <v-app-bar-nav-icon
        @click.stop="drawer=!drawer"
        v-if="!isBreak"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span>TITLE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-if="!auth" @click="login">SIGN IN</v-btn>
      <v-btn text v-if="!auth">SIGN UP</v-btn>
      <v-btn text v-if="auth">SIGN OUT</v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import * as firebase from "firebase/app";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: () => ({
    drawer: true,
    item: 1,
    items: [
      {title: "Home", icon: "mdi-home-city"},
      {title: "My Account", icon: "mdi-account"},
      {title: "Users", icon: "mdi-account-group-outline"},
    ],
  }),
  computed: {
    auth(){
      return this.$store.state.auth;
    },
    isBreak(){
      return this.$vuetify.breakpoint.lg;
    },
  },
  methods: {
    login(){
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result => {
        console.log(result.user)
        // router.push('/success')
      }).catch(error => {
        console.log(error)
        // this.errorMessage = error.message
        // this.showError = true
      })
    },
  },
};
</script>
