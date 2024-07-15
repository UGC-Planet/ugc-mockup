<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav">
      <!--<template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>-->

      <v-app-bar-title><a class="logobrand" href="/">
        <img src="../assets/images/layer.png" alt="UGC Planet" style="height: 90px; width: 140px;">
        </a></v-app-bar-title>

      <!--<v-text-field density="compact" variant="solo" label="Search" append-inner-icon="fas fa-search" single-line
        hide-details @click:append-inner="onClick"></v-text-field>-->
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-list-item title="Home" value="" href="/"></v-list-item>
        <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props" append-icon="fas fa-caret-down">Explore</v-btn>
            </template>
            <v-list>
              <v-list-item title="Creator Listings" value="" href="/listings"></v-list-item>
              <v-list-item title="UGC Requests" value="" href="/requests"></v-list-item>
              <v-list-item title="Bespoke Solutions" value="" href="/solutions"></v-list-item>
            </v-list>
          </v-menu>
        <v-list-item title="Creators" value="" href="/creators"></v-list-item>
        <v-list-item title="Brands" value="" href="/brands"></v-list-item>
        <v-list-item title="Post a UGC Request" value="" href="/requests"></v-list-item>
        <v-col><v-btn variant="flat" color="primary" rounded>Become a Creator</v-btn></v-col>

        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-user-circle"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="My Account" value="my account" href="/admin/user/"></v-list-item>
              <v-list-item title="Logout" value="logout" href="/logout"></v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer v-model="drawer" temporary>
            <v-list-item title="Home" href="/"></v-list-item>
            <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <div v-for="departments in data.collections.items" :key="departments.id">
                        <v-list-item :title="departments.name" :value="departments.name"
                            :href="`/departments/${departments.slug}`">
                        </v-list-item>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
            <v-list-item title="" href="/projects/"></v-list-item>
            <v-list-item title="" href="/lists/"></v-list-item>
            <v-spacer></v-spacer>
          </v-navigation-drawer>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <slot />
          </main>
        </v-layout>
        <FooterNav />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
  import search from '../components/Search/search.vue'

  export default {
    components: {
      search
    },
    data() {
      return {
        drawer: null,
        location: 'bottom',
        rail: true,
        loaded: false,
        loading: false,
      }
    },

    methods: {
      onClick() {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>

<script setup>
  import {
    ref
  } from 'vue'

  const theme = ref('light')

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };
</script>