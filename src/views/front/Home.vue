<template>
  <div class="home">
    <!-- banner -->
    <div
      class="home-banner position-relative d-flex justify-content-center align-items-center"
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
      <div class="content text-primary text-center">
        <p class="h1">Get Your Mind, and Heart Back</p>
        <p class="h4">用心理學鍛鍊心智、修復心靈</p>
      </div>
      <div
        class="down-arrow position-absolute text-primary p-5"
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
              src="@/assets/image/hand.jpg"
              style="
              width: 100%;
              height: 300px;
              object-position: 30% 50%;
              object-fit: cover;
              "
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
            <router-link
              to="/product/-M6_as3MyB-8b4lUf8Ys"
              class="btn btn-info btn-lg"
              >成為時間管理大師，獲得更多休息時間</router-link
            >
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
            <router-link
              to="/product/-M6ZTSZapd_HjKzpHJBd"
              class="btn btn-info btn-lg"
              >讓自己更了解自己，為自己負責與做出行動</router-link
            >
          </div>
          <div class="col-md-5 image order-1 order-md-2">
            <img
              class="img-fluid"
              src="@/assets/image/mind.jpg"
              style="
              width: 100%;
              height: 300px;
              object-fit: cover;
              object-position: center 20%;
              "
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
              style="
              width: 100%;
              height: 300px;
              object-fit: cover;
              "
              src="@/assets/image/eye.jpg"
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
            <router-link to="/products" class="btn btn-info btn-lg"
              >查看更多心理學，為自己來場心智健身之旅</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- CTA -->
    <h2 class="text-center mb-5">熱門商品</h2>
    <div class="container mb-3" v-if="filterProducts[0]">
      <div class="row">
        <div
          class="col-md-4 mb-4"
          v-for="(item, index) in filterProducts"
          :key="item.id"
        >
          <div class="card h-100">
            <div style="width: 100%; height: 350px;">
              <img
                :src="item.imageUrl || 'https://dummyimage.com/600x300/AAE.jpg'"
                class="w-100 h-100"
                style="object-fit: cover; object-position: center;"
                :alt="item.content"
              />
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-item-start">
                <h5 class="card-title">{{ item.title }}</h5>
                <div>
                  <span class="badge badge-pill badge-info">
                    {{ item.category }}
                  </span>
                </div>
              </div>
              <p class="card-text text-secondary">
                {{ item.description }}
              </p>
              <div class="d-flex justify-content-between">
                <p class="card-text text-decoration-line-through">
                  <del>原價 {{ item.origin_price }}</del>
                </p>
                <p class="card-text h5 text-right text-success">
                  限時特價 {{ item.price }} 元
                </p>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <button
                class="btn btn-outline-secondary"
                @click="openProductDetail(item)"
              >
                查看更多
              </button>
              <button
                class="btn btn-outline-danger"
                @click="addtoCart({ product_id: item.id, qty: 1 })"
                @click.prevent="status.which_cartbtn_adding = index"
              >
                <font-awesome-icon
                  icon="spinner"
                  spin
                  v-if="
                    status.is_cartbtn_adding &&
                      status.which_cartbtn_adding == index
                  "
                />
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';

export default {
  metaInfo: {
    title: '首頁 | PsyStore',
  },
  data() {
    return {
      navbarHeight: 0,
      screenHeight: 0,
      filterKeywords: ['覺察', '記憶', '時間'],
      status: {
        is_cartbtn_adding: false,
        which_cartbtn_adding: 0,
      },
    };
  },
  computed: {
    ...mapGetters('product', ['products']),
    filterProducts() {
      const vm = this;
      const filterArr = vm.filterKeywords.map(function filter(keyword) {
        return vm.products.filter(function include(product) {
          return product.title.includes(keyword);
        })[0];
      });

      return filterArr;
    },
  },
  methods: {
    ...mapActions('product', ['getProductsAll']),
    scrollDown() {
      window.scrollTo(0, window.innerHeight);
    },
    getNavbarAndScreenHeight() {
      const vm = this;
      vm.navbarHeight = document.querySelector('.navbar').offsetHeight;
      vm.screenHeight = window.innerHeight;
    },
    ...mapActions('product', ['getProducts', 'getProductsAll']),
    addtoCart(item) {
      const vm = this;
      vm.status.is_cartbtn_adding = true;

      vm.$store.dispatch('cart/addtoCart', item).then((res) => {
        vm.status.is_cartbtn_adding = false;
        vm.$store.dispatch('alertMessage/updateMessage', {
          message: `${res.data.message}`,
          status: res.data.success ? 'success' : 'warning',
        });
      });
    },
    openProductDetail(item) {
      const vm = this;
      vm.$router.push({
        name: 'productDetail',
        params: { id: item.id },
      });
    },
  },
  mounted() {
    const vm = this;
    vm.getNavbarAndScreenHeight();
    window.addEventListener('resize', vm.getNavbarAndScreenHeight);
    vm.getProductsAll();
  },
  beforeDestroy() {
    const vm = this;
    window.removeEventListener('resize', vm.getNavbarAndScreenHeight);
  },
};
</script>

<style lang="scss" scoped>
.home-banner {
  .content {
    padding: 1rem;
    background-color: rgba($color: #ffffff, $alpha: 0.5);
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
