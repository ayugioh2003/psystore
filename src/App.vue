<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/login">Login</router-link> |
      <router-link to="/admin/products">BackProducts</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/all';
</style>
