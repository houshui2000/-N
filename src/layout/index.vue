<template>
  <div id="homePC">
    <h1>layout</h1>
    <div class="center">
      <router-view />
    </div>
  </div>
</template>
<script setup name="layout"></script>
<style lang="scss" scoped>
#homePC {
  width: 100%;
  margin: auto;
  overflow: hidden;
  background-color: rgb(116, 182, 17);
}

.center {
  position: relative;
}
</style>
