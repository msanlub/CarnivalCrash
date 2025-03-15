<template>
    <v-container>
      <v-card>
        <v-card-title>Personaliza tu personaje</v-card-title>
        <v-card-text>
          <v-carousel
            cycle
            height="300"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item
              v-for="(personaje, index) in personajes"
              :key="index"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-col cols="12" class="text-center">
                  <v-img :src="personaje.imagen" max-height="250" class="mx-auto"></v-img>
                  <p class="mt-2">{{ personaje.nombre }}</p>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import personaje from '../assets/personaje.png'
  import indio from '../assets/indio.png'
  import pirata from '../assets/pirata.png'
  
  export default {
    name: 'CharacterSection',
    data() {
      return {
        personajes: [
          { nombre: 'Personaje principal', imagen: personaje },
          { nombre: 'Disfraz indio', imagen: indio },
          { nombre: 'Disfraz pirata', imagen: pirata},
        ],
      };
    },
  };
  </script>
  