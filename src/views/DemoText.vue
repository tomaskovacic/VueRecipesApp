<script>
import Footer from '../components/Footer.vue'

export default {
  data() {
    return {
      number: 0,
      activeId: 0
    };
  },
  methods: {
      getActiveClass(id) {
        if (id === this.activeId) {
            return "i-am-active";
        } else {
            return "";
        }
      }
  },
  components: {
    Footer,
  },
};
</script>
<template>
    <div class="text-wrapper">
        <h1>DEMO TEXT</h1>
    </div>
    <div class="main-wrapper">
        <div class="nav">
            <button @click="number = 10" :class="getActiveClass('10')" v-on:click="activeId = '10'">10</button>
            <button @click="number = 100" :class="getActiveClass('100')" v-on:click="activeId = '100'">100</button>
            <button @click="number = 1000" :class="getActiveClass('1000')" v-on:click="activeId = '1000'">1000</button>
            <button @click="number = 10000" :class="getActiveClass('10000')" v-on:click="activeId = '10000'">10000</button>
            <button @click="number = 100000" :class="getActiveClass('100000')" v-on:click="activeId = '100000'">100000</button>
        </div>
        <p v-for="num in number" :key="num">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <Footer />
</template>

<style scoped>
.main-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px;
}

.text-wrapper {
  margin-bottom: 0;
  background: #ed6a5a;
  color: white;
  font-weight: bold;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.i-am-active {
  background: #ed6a5a;
  color: white;
}

.nav {
  padding: 50px 100px 80px 100px;
  display: flex;
  justify-content: center;
  gap: 30px;
}

button {
  width: 150px;
  height: 30px;
  color: #333333;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  cursor: pointer;
}
</style>