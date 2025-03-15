<template>
    <v-container>
      <v-card>
        <v-card-title>Escenarios de Cádiz</v-card-title>
        <v-card-text>
          <v-carousel
            cycle
            height="300"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item
              v-for="(escenario, index) in escenarios"
              :key="index"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-col cols="12" class="text-center">
                  <v-img :src="escenario.imagen" max-height="250" class="mx-auto"></v-img>
                  <p class="mt-2">{{ escenario.nombre }}</p>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import catedral from '../assets/catedralescenario.png'
  import plazaFlores from '../assets/plazaLasFlores.png'
  
  export default {
    name: 'StagesSection',
    data() {
      return {
        escenarios: [
          { nombre: 'Catedral', imagen: catedral },
          { nombre: 'Plaza de las Flores', imagen: plazaFlores },
        ],
      };
    },
  };
  </script>
  