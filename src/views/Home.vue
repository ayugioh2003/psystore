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
          filter: 'grayscale(10%)',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1449495169669-7b118f960251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)',
        }"
      ></div>
      <div class="content text-info text-center">
        <p class="h1">Get Your Mind, and Heart Back</p>
        <p class="h4">用心理學鍛鍊心智、修復心靈</p>
      </div>
      <div
        class="down-arrow position-absolute text-info p-5"
        style="bottom: 10%; cursor: pointer;"
        @click="scrollDown"
      >
        <font-awesome-icon
          icon="angle-double-down"
          size="lg"
        ></font-awesome-icon>
      </div>
    </div>

    <!-- why3 -->
    <div class="why why1">
      <div class="container">
        <div class="row">
          <div class="col-md-5 image">
            <img
              class="img-fluid"
              src="https://dummyimage.com/600x300/603.jpg"
              alt=""
            />
          </div>
          <div class="col-md-7 content">
            <h3>為什麼現代人精神疲憊成為常態</h3>
            <p>
              過去的社會，因為資訊傳遞慢與生產技術還不發達，
              人們工作時數短、生活步調慢。如今資訊科技發達，人類透過機械與電腦提昇生產能力，
              間接導致需求變大，工作時數提昇，並從日常生活壓榨出時間，許多人的生活步調也漸趨緊張。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="why why2 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-7 content order-2 order-md-1">
            <h3>如何調劑自己的心理狀態</h3>
            <p>
              首先，覺察自己在各個情境下的情緒、想法，釐清自己的心理狀態。
              接著，覺察自己做出了什麼行為、產生了什麼信念，這些對生活帶來正面還是負面的影響。
              最後，與自己定下契約，逐步修改負面的行為或信念，藉此改善心理狀態、調整生活平衡。
            </p>
          </div>
          <div class="col-md-5 image order-1 order-md-2">
            <img
              class="img-fluid"
              src="https://dummyimage.com/600x300/603.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="why why3">
      <div class="container">
        <div class="row">
          <div class="col-md-5 image">
            <img
              class="img-fluid"
              src="https://dummyimage.com/600x300/603.jpg"
              alt=""
            />
          </div>
          <div class="col-md-7 content">
            <h3>讓心惦店PsyStore來幫助你</h3>
            <p>
              本網站PsyStore將提供心理學相關工具與知識，希望促進現代人的心理健康。
              心理學科普部份，將以認知心理學與諮商心理學為主軸，介紹心理機制與心理學應用。
              心理學工具部份，將提供心理學測驗與相關技巧。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
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

<style lang="scss" scoped>


// Banner
.banner {
  .content {
    padding: 1rem;
    background-color: rgba($color: #000000, $alpha: 0.6);
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
}

// why3
.why {
  padding: 7rem;
  @include media-breakpoint-down(sm) {
    padding: 3rem;
  }

  h3 {
    padding-bottom: 1rem;
    @include media-breakpoint-down(sm) {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
  .content {
    line-height: 2;
  }
}
</style>
