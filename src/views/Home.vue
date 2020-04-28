<template>
  <div class="home">
    <!-- banner -->
    <div
      class="banner position-relative d-flex justify-content-center align-items-center"
      :style="{
        height: `${screenHeight - navbarHeight}px`,
      }"
    >
      <div
        class="h-100 w-100 position-absolute bg-cover"
        :style="{
          zIndex: -1,
          backgroundColor: 'red',
          filter: 'grayscale(20%) blur(10px)',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1449495169669-7b118f960251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)',
        }"
      ></div>
      <div class="text-gray text-center">
        <p class="h1">Get Your Mind, and Heart Back</p>
        <p>用心理學工具鍛鍊心智、修復心靈</p>
      </div>
      <div
        class="down-arrow position-absolute p-5"
        style="bottom: 10%; cursor: pointer;"
        @click="scrollDown"
      >
        <font-awesome-icon
          icon="angle-double-down"
          size="lg"
        ></font-awesome-icon>
      </div>
    </div>

    <div class="container">
      {{ screenHeight - navbarHeight }}
      <button class="btn btn-primary">按鈕</button>
      <div>我是首頁內容</div>
      <div>我是首頁內容</div>
      <div>我是首頁內容</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      navbarHeight: 0,
      screenHeight: 0,
    };
  },
  methods: {
    scrollDown() {
      window.scrollTo(0, window.innerHeight);
      console.log(window.innerHeight);
    },
    getNavbarAndScreenHeight() {
      this.navbarHeight = document.querySelector('.navbar').offsetHeight;
      this.screenHeight = window.innerHeight;
      console.log(this.navbarHeight, this.screenHeight);
    },
  },
  mounted() {
    this.getNavbarAndScreenHeight();
    window.addEventListener('resize', this.getNavbarAndScreenHeight);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getNavbarAndScreenHeight);
  },
};
</script>

<style lang="scss">
html, body {
  scroll-behavior: smooth;
}

.down-arrow {
  animation-name: arrow-moving;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
@keyframes arrow-moving {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
