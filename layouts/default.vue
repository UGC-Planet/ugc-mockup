<template>
  <v-app>
    <v-main>
      <v-card>
        <v-layout>
          <v-main></v-main>
          <Header />
          <main id="mainSection">
            <slot />
          </main>
        </v-layout>
      </v-card>
      <FooterNav /> 
    </v-main>
  </v-app>
</template>

<script>
  import search from '../components/Search/search.vue'
  import Header from '../components/Header.vue'

  export default {
    components: {
      Header,
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
  }
</script>

<script setup>

</script>