<template>
  <form class="login bg-primary my-0 my-md-5" @submit.prevent="signin">
    <div class="login__head py-3">管理員登入</div>
    <div class="container login__body">
      <!-- email -->
      <div class="form-group">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <label class="input-group-text" for="email">
              <font-awesome-icon icon="user" />
            </label>
          </div>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="請輸入電子信箱"
            v-model="user.username"
            required
          />
        </div>
      </div>
      <!-- password -->
      <div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <label class="input-group-text" for="password">
            <font-awesome-icon icon="key" />
          </label>
        </div>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="請輸入密碼"
          v-model="user.password"
          required
        />
      </div>
      <!-- remember -->
      <div class="remember custom-control custom-checkbox my-3">
        <input
          type="checkbox"
          class="custom-control-input bg-secondary"
          name="remember"
          id="remember"
        />
        <label class="custom-control-label text-white" for="remember"
          >記住我</label
        >
      </div>
    </div>
    <button class="btn btn-lg btn-secondary w-100 text-primary">
      登入帳號
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  metaInfo: {
    title: '登入 | PsyStore',
  },
  methods: {
    signin() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;

      vm.$http
        .post(api, vm.user)
        .then((response) => {
          const { token } = response.data;
          const { expired } = response.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          // console.log(token, expired);

          return response.data.success;
        })
        .then((success) => {
          if (success) {
            const reg = /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/;
            const token = document.cookie.replace(reg, '$1');
            this.$http.defaults.headers.common.Authorization = `${token}`;

            vm.$router.push('/admin/products');
            vm.$store.dispatch('alertMessage/updateMessage', {
              message: '登入成功',
              status: 'success',
            });
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

<style scoped lang="scss">
.login {
  width: 600px;
  margin: 0 auto;

  @include media-breakpoint-down(sm) {
    width: 100%;
  }

  &__head {
    font-size: 36px;
    color: #ffffff;
    text-align: center;
  }

  &__body {
    padding: 0 30px;
  }

  .input-group-text {
    background-color: rgb(232, 240, 254);
  }
  input {
    border-color: rgb(232, 240, 254);
  }
}
</style>
