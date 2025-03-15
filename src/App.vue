<template>
  <v-app :theme="theme">
    <div class="parallax-background" ref="background"></div>
    <v-btn @click="toggleTheme" icon class="theme-toggle-button">
      <v-icon>{{ theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
    <v-main>
      <StorySection />

      <!-- Sección game -->
      <v-container>
        <h2> Podrás customizar tu personaje con diferentes disfraces y conocer muchos rincones de la ciudad de Cádiz</h2>
        <v-row class="game-sections" justify="space-around" align="stretch">
          <!-- Personaje principal -->
          <v-col cols="12" md="4" class="fill-height">
            <CharacterSection />
          </v-col>

          <!-- Villanos -->
          <v-col cols="12" md="4" class="fill-height">
            <VillainsSection />
          </v-col>

          <!-- Escenarios -->
          <v-col cols="12" md="4" class="fill-height">
            <StagesSection />
          </v-col>
        </v-row>
      </v-container>
      <v-container class="trailer-container">
        <Trailer />
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import StorySection from './components/StorySection.vue'
import CharacterSection from './components/CharacterSection.vue'
import VillainsSection from './components/VillainsSection.vue'
import StagesSection from './components/StagesSection.vue'
import Trailer from './components/Trailer.vue'

export default {
  name: 'App',
  components: {
    StorySection,
    CharacterSection,
    VillainsSection,
    StagesSection,
    Trailer,
  },
  data() {
    return {
      theme: 'light'
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style scoped>
.game-sections {
  margin-top: 32px;
}

.v-col {
  display: flex;
}

.game-container {
  margin-top: 32px;
  margin-bottom: 32px;
}

.game-sections {
  margin-top: 16px;
}

.v-col {
  display: flex;
}

.trailer-container {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  /* color: #1976D2; */
  font-weight: 500;
}

.theme-toggle-button {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
}

.parallax-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/papelillos.png'); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}
</style>
