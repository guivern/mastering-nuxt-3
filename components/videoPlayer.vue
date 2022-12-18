<template>
  <iframe
    :src="`https://player.vimeo.com/video/${videoId}`"
    :width="videoWidth"
    :height="videoHeight"
    :title="videoTitle"
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
  ></iframe>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  videoWidth: {
    type: Number,
    default: 500,
  },
  videoHeight: {
    type: Number,
    default: 315,
  },
  videoTitle: {
    type: String,
    default: 'Video',
  },
});
</script>

<style lang="scss" scoped></style>
