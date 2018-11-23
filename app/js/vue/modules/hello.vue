<script>
  export default {

    computed: {
      text() {
        return this.$store.state.text
      }
    },

    mounted() {
      this.$http.get('/test').then((response) => {
        this.$store.commit('setText', response.data.text);
      })
    }
  }
</script>

<template>
  <span>
    {{ text }}
  </span>
</template>