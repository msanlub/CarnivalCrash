<template>
    <video controls width="100%" class="video-player">
            <source :src="trailer" type="video/mp4" />
            Tu navegador no soporta el tag de video.
    </video>
</template>

<script>
import trailer from '../assets/trailer.mp4'

export default {
  name: 'Trailer',
  data() {
      return {
      trailer: trailer
      }
  }
  }
</script>
<style scoped>

.video-player {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  object-fit: cover;
}

/* Estilizar los controles del video */
.video-player::-webkit-media-controls {
  background-color: rgba(0, 0, 0, 0.5);
}

.video-player::-webkit-media-controls-panel {
  border-radius: 0 0 8px 8px;
}
</style>
