<template>
    <v-container class="container__story mt-12 pa-4" >
      <v-row align="stretch" justify="center">
        <!-- Primera columna de texto -->
        <v-col cols="12" md="4" class="d-flex flex-column justify-center">
          <p>
            ¡Ay, qué historia tan gaditana voy a contarte al ritmo de tres por cuatro!<br>
            De un juego que en mi ciudad se trama con sabor a febrero y marzo.
          </p>
          <br>
          <p>
            Un forastero llega a Cádiz buscando coplas y pregones.<br>
            Pero la calle es una batalla de restos y borrachones.
          </p>
          <br>
          <p>
            Disfrazado de indio o pirata, con plumas o garfio en la mano,<br>
            salta charcos de moscatel y manzanilla,<br>
            esquiva papelillos y serpentinas.
          </p>
          <br>
          <p>
            Entre meados y basurillas su camino se complica.<br>
            Borrachos disfrazados de corsarios,<br>
            botellas vacías y mascarillas.
          </p>
        </v-col>
  
        <!-- Logo -->
        <v-col cols="16" md="4" class="d-flex align-center justify-center">
          <v-img
            :src="logo"  
            max-width="700"
            class="mx-auto"
          />
        </v-col>
  
        <!-- Segunda columna de texto -->
        <v-col cols="12" md="4" class="d-flex flex-column justify-center text-right">
          <p>
            Nuestro héroe brinca y se escabulle al ritmo de tangos y cuplés.<br>
            El Pregonero espera impaciente en el escenario montado para él.
          </p>
          <br>
          <p>
            Mientras la marea de la gente dificulta cada movimiento,<br>
            con habilidad y mucho salero va superando cada pantalla.
          </p>
          <br>
          <p>
            Al fin llega a la Plaza San Antonio donde el Carnaval ya ha comenzado.<br>
            Y entre risas, coplas y jolgorio nuestro jugador ha triunfado.
          </p>
          <br>
          <p>
            Así es el juego del Carnaval que en Cádiz se quiere crear.<br>
            Con píxeles llenos de sal y mucho arte pa' disfrutar.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import logo from "../assets/logo.png";
  
  export default {
    name: 'StorySection',
    data() {
      return {
        logo: logo
      }
    }
  }
  </script>
