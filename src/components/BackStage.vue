<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/login">Login</router-link> |
      <router-link to="/admin/products">BackProducts</router-link>|<button @click="signout">
        signout
      </button>
    </div>
    <div>---</div>
    <router-view></router-view>
    <div>---</div>
    <div>footer</div>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/logout`;

      this.$http
        .post(api)
        .then((data) => data.data.success)
        .then((success) => {
          if (success) {
            console.log('signout success');
            vm.$router.push('/');
          } else {
            console.log('signout fail');
          }
        });
    },
  },
};
</script>
