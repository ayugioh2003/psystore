<template>
  <div class="container-fluid">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <!-- <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">心惦店</a> -->
      <router-link to="/" class="navbar-brand col-sm-3 col-md-2 mr-0"
        >心惦店</router-link
      >
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    signout() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/logout`;

      vm.$http
        .post(api)
        .then((data) => data.data.success)
        .then((success) => {
          if (success) {
            vm.$store.dispatch('alertMessage/updateMessage', {
              message: '登出成功',
              status: 'success',
            });
            vm.$router.push('/');
          } else {
            vm.$store.dispatch('alertMessage/updateMessage', {
              message: '登入失敗',
              status: 'danger',
            });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
</style>
