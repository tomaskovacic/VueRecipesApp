<script>
import AboutRecipe from "@/components/AboutRecipe.vue";
import Footer from "@/components/Footer.vue";

export default {
  props: ["id"],
  components: {
    AboutRecipe,
    Footer,
  },
  methods: {
    send(param) {
      console.log(param);
    },
  },
};
</script>

<template>
  <main>
    <AboutRecipe :recipeId="this.id" @recipeSend="send" />
    <Footer />
  </main>
</template>

