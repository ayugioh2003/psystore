<template>
  <div>
    <!-- product -->
    <div class="container my-5">
      <!-- Product detail -->
      <div class="row">
        <!-- Product picture -->
        <div class="col-md-6 position-relative">
          <div class="position-absolute" style="right: 16px">
            <!-- 移出最愛 -->
            <button
              class="btn text-danger"
              @click="removeFavoritesItem(product)"
              v-if="favorites.map((item) => item.id).includes(product.id)"
            >
              <font-awesome-icon :icon="['fas', 'heart']" size="lg" />
            </button>
            <!-- 加到最愛 -->
            <button
              class="btn text-danger"
              @click="addToFavorites(product)"
              v-if="!favorites.map((item) => item.id).includes(product.id)"
            >
              <font-awesome-icon :icon="['far', 'heart']" size="lg" />
            </button>
          </div>
          <div style="height: 450px">
            <img
              :src="
                product.imageUrl || 'https://dummyimage.com/600x300/AAE.jpg'
              "
              class="card-img-top h-100"
              style="object-fit: cover; object-position: center"
              alt="..."
            />
          </div>
        </div>
        <!-- Product data -->
        <div class="col-md-6">
          <!-- title -->
          <div
            class="d-flex product-head bg-secondary-light p-3 mb-3 mt-3 mt-md-0"
          >
            <div class="mr-3">
              <span class="badge badge-pill badge-primary-light">
                {{ product.category }}
              </span>
            </div>
            <h5 class="card-title m-0">{{ product.title }}</h5>
          </div>
          <!-- data -->
          <div class="p-3">
            <div class="d-flex">
              <div class="text-decoration-line-through mr-3">
                <del>原價 {{ product.origin_price }}</del>
              </div>
              <div class="h5 text-danger">特價 {{ product.price }} 元</div>
            </div>
            <div class="text-right mb-5">
              小計 {{ product.price * productQty }} 元
            </div>
            <div class="form-group">
              <select class="form-control" v-model="productQty">
                <option value="0" disabled selected>請選擇數量</option>
                <option :value="num" v-for="num in 10" :key="num">
                  選購 {{ num }} {{ product.unit }}
                </option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-primary w-100"
              :class="{
                'not-allowed': status.is_cartbtn_adding || productQty === 0,
              }"
              :disabled="status.is_cartbtn_adding || productQty === 0"
              @click="addtoCart({ product_id: product.id, qty: productQty })"
            >
              <font-awesome-icon
                icon="spinner"
                spin
                v-if="status.is_cartbtn_adding"
              />
              加到購物車
            </button>
          </div>
        </div>
      </div>
      <!-- Product content -->
      <div class="row" v-if="product.description && product.content">
        <div class="col-12"><hr /></div>
        <div class="col-md-8 mx-auto my-5">
          <div v-if="product.description" class="mb-4">
            <h5>產品描述</h5>
            <p class="card-text ">
              {{ product.description }}
            </p>
          </div>
          <div v-if="product.content">
            <h5>說明內容</h5>
            <p class="card-text ">
              {{ product.content }}
            </p>
          </div>
        </div>
        <div class="col-12"><hr /></div>
      </div>
    </div>
    <!-- evuations, problems -->
    <div class="container problems mb-5">
      <h2 class="text-center mb-5">常見問與答</h2>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="mb-3" v-for="(item, index) in problems" :key="item.q">
            <div class="question h3">Q{{ index + 1 }}：{{ item.q }}</div>
            <div class="answer">{{ item.a }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container evaluations mb-5">
      <h2 class="text-center mb-5">口碑推薦</h2>
      <div class="row">
        <div class="col-md-4 mb-3" v-for="item in evaluations" :key="item.name">
          <div class="evalu-head d-flex pb-2">
            <div class="evalu-img" style="width:75px; height:75px;">
              <img
                class="w-100 h-100"
                :src="item.img"
                :style="{
                  'object-fit': 'cover',
                  'object-position': 'center',
                  'border-radius': '50%',
                }"
                alt=""
              />
            </div>
            <div
              class="evalu-title d-flex flex-column justify-content-center pl-4"
            >
              <div>{{ item.name }}</div>
              <div>{{ item.identity }}</div>
            </div>
          </div>
          <div class="evalu-content">
            {{ item.message }}
          </div>
        </div>
      </div>
    </div>
    <!-- another product -->
    <div class="container">
      <div class="h2 text-center mb-5">類似商品</div>
      <div
        class="row"
        :class="{
          'justify-content-center': filterProductsByCategory.length < 3,
        }"
      >
        <!-- product cards -->
        <div
          class="col-md-6 col-lg-4 mb-3 mb-md-5 "
          v-for="(item, index) in filterProductsByCategory"
          :key="item.id"
        >
          <ProductCard
            :item="item"
            :index="index"
            :imageHeight="350"
          ></ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  metaInfo() {
    return {
      title: `${this.product.title} | PsyStore`,
    };
  },
  data() {
    return {
      productQty: 0,
      status: {
        is_cartbtn_adding: false,
        which_cartbtn_adding: 0,
      },
      evaluations: [
        {
          name: '輝夜姬',
          identity: '學生會副會長',
          img: 'https://i.imgur.com/VL6WCrN.png',
          message: `我…朋友很在意一個男生。本來對他沒什麼感覺，但後來開始在意他的一舉一動，
          希望他跟自己多說話，有時候會望著他的身影發呆。謝謝這網站中的感情相關課程讓我…朋友能夠釐清自己的思緒。`,
        },
        {
          name: '炭治郎',
          identity: '職業軍人',
          img: 'https://i.imgur.com/XDTwIrh.png',
          message: `因為工作性質的關係，我生活作息不太正常，工作的壓力也很大，跟同儕有時會有衝突。
          在午夜夢迴時常常在想自己為什麼要過這樣的生活。
          看了與工作主題相關的課程後，我在工作與生活的平衡有好一點了。謝謝 PsyStore。`,
        },
        {
          name: '今日子',
          identity: '失憶症患者',
          img: 'https://i.imgur.com/56wkvc7.png',
          message: `我是一個失憶症患者，只記得今天發生的事情，昨天之前發生在我身上的事情幾乎都忘了。
          還好我還記得大部分的一般性常識，能夠接案維生。
          看了 PsyStore 的記憶相關課程，我對自身的狀況有更了解了一些。`,
        },
      ],
      problems: [
        {
          q: '課程能持續觀看嗎？',
          a: '可以的，沒有時效性喔。可以透過桌機、筆電、手機來觀看課程。',
        },
        {
          q: '在課程中遇到問題的話，可以如何尋求協助呢？',
          a: '可以透過課程中的留言區，或是來信詢問喔！',
        },
        {
          q: '之後課程還會有哪些呢？',
          a:
            '未來會試圖將常見心理學領域當納入課程，例如發展心理學、工商心理學。敬請期待！',
        },
        {
          q: '這網站是真的嗎？',
          a:
            '您可以說它處在量子疊加態中，在有跟沒有之間，但我們希望未來能真正運作起來喔！',
        },
      ],
    };
  },
  computed: {
    ...mapGetters('product', ['product', 'products', 'favorites']),
    routeId() {
      const vm = this;
      return vm.$route.params.id;
    },
    filterProductsByCategory() {
      const vm = this;
      const { category } = vm.product;
      return vm.products.filter(
        (item) => item.category === category && item.id !== vm.product.id,
      );
    },
  },
  watch: {
    routeId() {
      const vm = this;
      vm.getProduct(vm.routeId);
    },
  },
  methods: {
    ...mapActions('product', [
      'getProduct',
      'getProductsAll',
      'getFavorites',
      'addToFavorites',
      'removeFavoritesItem',
    ]),
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
  },
  mounted() {
    const vm = this;
    vm.getProduct(vm.routeId);
    vm.getProductsAll();
    vm.getFavorites();
  },
};
</script>
