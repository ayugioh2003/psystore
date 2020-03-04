<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/login">Login</router-link> |
      <router-link to="/admin/products">BackProducts</router-link>
    </div>
    <div>---</div>
    <router-view />
    <div>---</div>
    <div>footer</div>
  </div>
</template>
