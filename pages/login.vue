<template>
  <div class="prose">
    <h1>Login in {{ title }}</h1>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="handleLogin"
    >
      Login in with GitHub
    </button>
  </div>
</template>
<script setup>
const { title } = useCourse();
</script>
