<template>
  <form class="login bg-primary">
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
            type="text"
            class="form-control"
            id="email"
            placeholder="請輸入電子信箱"
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
          required
        />
      </div>
      <!-- remember -->
      <div class="remember custom-control custom-checkbox my-3">
        <input
          type="checkbox"
          class="custom-control-input bg-warning"
          name="remember"
          id="remember"
        />
        <label class="custom-control-label text-white" for="remember">記住我</label>
      </div>
    </div>
    <button class="btn btn-lg btn-warning w-100 text-primary">登入帳號</button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.login {
  width: 400px;
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
