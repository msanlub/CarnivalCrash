<template>
    <v-container>
      <v-card>
        <v-card-title>Villanos en el carnaval</v-card-title>
        <v-card-text>
          <v-carousel
            cycle
            height="300"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item
              v-for="(villano, index) in villanos"
              :key="index"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-col cols="12" class="text-center">
                  <v-img :src="villano.imagen" max-height="250" class="mx-auto"></v-img>
                  <p class="mt-2">{{ villano.nombre }}</p>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import borracho from '../assets/borracho.png'
  import basura from '../assets/basura.png'
  
  export default {
    name: 'VillainsSection',
    data() {
      return {
        villanos: [
          { nombre: 'Borracho etílico', imagen: borracho },
          { nombre: 'Montaña de basura con moscas', imagen: basura },
          
        ]
      }
    }
  };
  </script>
  