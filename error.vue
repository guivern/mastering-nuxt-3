<template>
  <NuxtLayout>
    <div v-if="error" class="prose flex flex-col">
      <template v-if="error.statusCode === '404'">
        <h1>404</h1>
        <p>I guess the page does not exist.</p>
      </template>
      <template v-else>
        <h1>Oops!</h1>
        <p>Something went wrong.</p>
        <p>Sorry about that.</p>
      </template>
      <p>
        <b>{{ error.message }}</b>
      </p>
      <p>
        Go to the
        <NuxtLink :to="firstLesson.path"> First Lesson </NuxtLink>
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
const firstLesson = useFirstLesson();
const router = useRouter();
const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
});

const handleError = () => {
  // router.push(firstLesson.path);
  clearError({
    redirect: firstLesson.path,
  });
};
</script>
