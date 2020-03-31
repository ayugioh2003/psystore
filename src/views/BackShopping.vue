<template>
  <div>
    <h1 class="mt-3 mb-4">測試產品頁面</h1>
    <!-- 後台測試產品頁面 -->
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-4 mb-3"
          v-for="(item, index) in products"
          :key="item.key"
        >
          <div class="card h-100">
            <img
              class="card-img-top"
              :src="
                item.imageUrl
                  ? item.imageUrl
                  : 'http://fakeimg.pl/500x300/#393?font=lobster'
              "
              alt="Card image cap"
            />
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
                <p class="card-text h5 text-right">
                  限時特價 {{ item.price }} 元
                </p>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <button
                class="btn btn-outline-secondary"
                @click="openProductModal(item)"
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
    <!-- 後台測試產品分頁列 -->
    <Pagination
      :pagination="pagination"
      @change-page="getProducts"
    ></Pagination>
    <!-- 後台測試產品 modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div>
              <img
                :src="
                  product.imageUrl
                    ? product.imageUrl
                    : 'https://dummyimage.com/500x300.jpg'
                "
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="mt-3 mb-4">
              <h5>{{ product.title }}</h5>
              <div class="text-secondary">{{ product.description }}</div>
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <del>原價 {{ product.origin_price }}</del>
              </div>
              <div class="h5">現在只要 {{ product.price }} 元</div>
            </div>
            <div class="form-group">
              <select class="form-control" v-model="product.qty">
                <option value="0" disabled selected>請選擇數量</option>
                <option :value="num" v-for="num in 10" :key="num">
                  選購 {{ num }} {{ product.unit }}
                </option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <span>小計 {{ product.price * product.qty }} 元</span>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart({ product_id: product.id, qty: product.qty })"
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
    </div>

    <!-- 後台測試購物車 -->
    <hr />
    <h2 class="mb-3">測試購物車清單</h2>
    <div class="row mb-3">
      <div class="col-8 mx-auto">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" width="100"></th>
              <th scope="col">品名</th>
              <th scope="col">數量</th>
              <th scope="col">單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <th>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                >
                  <font-awesome-icon :icon="['far', 'trash-alt']" />
                </button>
              </th>
              <td>
                <div>{{ item.product.title }}</div>
                <div class="text-success" v-if="cart.total > cart.final_total">
                  已套用優惠券
                </div>
              </td>
              <td>{{ item.qty }} 個</td>
              <td class="text-right">{{ item.total }}</td>
            </tr>
            <tr :class="{ 'text-secondary': cart.total > cart.final_total }">
              <td colspan="3" class="text-right ">總計</td>
              <td colspan="1" class="text-right">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.total > cart.final_total">
              <td colspan="3" class="text-right">折扣價</td>
              <td colspan="1" class="text-right">{{ cart.final_total }}</td>
            </tr>
          </tbody>
        </table>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Insert coupon"
            v-model="couponCode"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-primary"
              type="button"
              @click="addCouponCode(couponCode)"
            >
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 後台測試結帳表單 -->
    <hr />
    <h2 class="mb-3">測試結帳表單</h2>
    <div class="row mb-3">
      <div class="col-8 mx-auto">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <validation-provider rules="required" v-slot="{ errors }">
                <label for="email">Email</label>
                <input
                  name="Email"
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="form.user.email"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider rules="required" v-slot="{ errors }">
                <label for="name">收件人姓名</label>
                <input
                  name="收件人姓名"
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="form.user.name"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider rules="required" v-slot="{ errors }">
                <label for="tel">收件人電話</label>
                <input
                  name="收件人電話"
                  type="tel"
                  class="form-control"
                  id="tel"
                  v-model="form.user.tel"
                />

                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider rules="required" v-slot="{ errors }">
                <label for="address">收件人地址</label>
                <input
                  name="收件人地址"
                  type="text"
                  class="form-control"
                  id="address"
                  v-model="form.user.address"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="message">留言</label>
              <textarea
                class="form-control"
                id="message"
                rows="3"
                v-model="form.message"
              ></textarea>
            </div>

            <div class="text-right">
              <button type="submit" class="btn btn-primary" :disabled="invalid">
                送出訂單
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      product: {},
      couponCode: '',
      status: {
        which_cartbtn_adding: NaN,
        is_cartbtn_adding: false,
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  computed: {
    ...mapGetters('product', ['products', 'pagination']),
    ...mapGetters('cart', ['cart']),
    // ...mapGetters({
    //   cart: 'cart/cart',
    // }),
  },
  methods: {
    ...mapActions(['addCouponCode']),
    ...mapActions('product', ['getProducts']),
    ...mapActions('cart', ['getCart', 'addtoCart', 'removeCartItem']),
    addtoCart(item) {
      const vm = this;
      vm.status.is_cartbtn_adding = true;

      this.$store.dispatch('cart/addtoCart', item).then((res) => {
        vm.status.is_cartbtn_adding = false;
        $('#productModal').modal('hide');

        console.log(res.data.message);
        this.$store.dispatch('alertMessage/updateMessage', {
          message: `${res.data.message}`,
          status: res.data.success ? 'success' : 'warning',
        });
      });
    },
    openProductModal(item) {
      const vm = this;
      vm.product = { ...item };
      vm.$set(vm.product, 'qty', 0);
      $('#productModal').modal('show');
    },
    onSubmit() {
      console.log('送出表單');
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style lang="scss"></style>
