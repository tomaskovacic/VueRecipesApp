<script>
import { RouterLink, RouterView } from "vue-router";
import LogoSVG from "./components/icons/Logo.vue";

export default {
components: {
    LogoSVG,
}
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="nav__left-side">
        <RouterLink to="/" class="nav__router-link">Recipes</RouterLink>
        <LogoSVG />
        </div>
        <div class="nav__right-side">
          <RouterLink to="/images" class="nav__router-link">Demo images</RouterLink>
          <RouterLink to="/text" class="nav__router-link">Demo text</RouterLink>
          <RouterLink to="/buttons" class="nav__router-link">Demo buttons</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.nav__left-side {
  display: flex;
  align-items: center;
  font-size: 25px;
}

.nav__right-side{
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav__router-link {
  margin-right: 5px;
  color: #ed6a5a;
  text-decoration: none;
  font-weight: 600;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px;
}

.wrapper {
  background-color: antiquewhite;
}
</style>
