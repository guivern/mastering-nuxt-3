<template>
  <h1>Hello world!</h1>
  <NuxtLink :to="firstLesson.path">Go To the first lesson</NuxtLink>
</template>

<script setup lang="ts">
const firstLesson = useFirstLesson();
</script>
