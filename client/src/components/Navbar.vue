<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
}

watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}, { immediate: true })

</script>

<template>
  <nav class="navbar navbar-expand-md bg-codeworks border-bottom border-black p-2">
    <div class="container">
      <div class="logo-box">
        <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center text-light">
          <img class="navbar-brand logo p-0 m-0" alt="logo"
            src="https://static.vecteezy.com/system/resources/thumbnails/018/741/618/small/castle-towers-tall-png.png"
            height="45" />
          <b class="fs-2 me-4 logo-text">Citadel</b>
        </RouterLink>
      </div>
      <!-- collapse button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="mdi mdi-menu text-light"></span>
      </button>
      <!-- collapsing menu -->
      <div class="collapse navbar-collapse " id="navbar-links">
        <ul class="navbar-nav">
          <div class="logo-box mx-2">
            <li>
              <RouterLink :to="{ name: 'Home' }" class="btn text-white selectable">
                Events
              </RouterLink>
            </li>
          </div>
          <div class="logo-box">
            <li class="">
              <RouterLink :to="{ name: 'About' }" class="btn text-white selectable">
                About
              </RouterLink>
            </li>
          </div>
        </ul>


        <!-- LOGIN COMPONENT HERE -->
        <div class="ms-auto">
          <button class="btn text-light" @click="toggleTheme"
            :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
            <i v-if="theme == 'dark'" class="mdi mdi-weather-sunny"></i>
            <i v-if="theme == 'light'" class="mdi mdi-weather-night"></i>
          </button>
        </div>
        <Login />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

nav {
  background-image: url(https://www.shutterstock.com/image-photo/black-stone-wall-old-castle-600nw-2472484225.jpg);

}

.logo {
  object-fit: contain;
  object-position: center;
  min-height: 5em;
}

.logo-box {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50px;
}

.logo-text {
  text-shadow: 2px 2px 2px black;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-grey);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
