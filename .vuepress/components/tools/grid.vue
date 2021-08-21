<template>
    <div class="wrapper">
      <slot />
    </div>
</template>

<script>
export default {
name: "grid"
}
</script>

<style lang="stylus" scoped>
.wrapper {
  display: grid;
  grid-gap: 1.5rem;
  grid-auto-rows: minmax(15rem, auto);
  word-wrap: break-word;
  word-break: break-all;
  max-width: 100%;
  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>