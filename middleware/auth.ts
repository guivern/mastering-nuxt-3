export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.chapterSlug === '1-chapter-1') {
    return;
  } else {
    return navigateTo('/login');
  }
});
