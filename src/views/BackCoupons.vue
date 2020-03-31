<template>
  <div>
    <div class="d-flex mt-3">
      <button class="btn btn-primary ml-auto" @click="openModal(true)">
        新增酷朋
      </button>
    </div>
    <!-- Table -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">酷朋名稱</th>
          <th scope="col">code</th>
          <th scope="col">酷朋折扣</th>
          <th scope="col">到期日期</th>
          <th scope="col">是否啟用</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in coupons" :key="coupon.id">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.code }}</td>
          <td>{{ coupon.percent }}</td>
          <th>{{ coupon.due_date | date }}</th>
          <td :class="{ 'text-light': !coupon.is_enabled }">
            {{ coupon.is_enabled ? '已啟用' : '未啟用' }}
          </td>
          <td>
            <button class="btn btn-primary" @click="openModal(false, coupon)">
              編輯
            </button>
            <button class="btn btn-danger" @click="openDelModal(coupon)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
    <Pagination :pagination="pagination" @change-page="getCoupons"></Pagination>
    <!-- couponModal -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">新增/修改酷朋</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">酷朋名稱</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="輸入酷朋名稱"
                v-model="tempCoupon.title"
              />
            </div>
            <div class="form-group">
              <label for="title">酷朋code</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="輸入酷朋code"
                v-model="tempCoupon.code"
              />
            </div>

            <div class="form-group">
              <label for="percent">酷朋折扣</label>
              <input
                type="number"
                class="form-control"
                id="percent"
                placeholder="輸入酷朋折扣"
                v-model="tempCoupon.percent"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日期</label>
              <input
                type="date"
                class="form-control"
                id="due_date"
                placeholder="輸入到期日期"
                v-model="due_date"
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="tempCoupon.is_enabled"
                id="is_enabled"
                :true-value="1"
                :false-value="0"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- delModal -->
    <DelModal
      itemType="酷朋"
      :tempItem="tempCoupon"
      @del-item="delCoupon"
    ></DelModal>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';
import getDate from '@/filters/date';

export default {
  components: {
    Pagination,
    DelModal,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {},
      pagination: {},
      due_date: '',
      isNew: false,
    };
  },
  watch: {
    due_date() {
      const vm = this;
      const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
    },
  },
  methods: {
    getCoupons(page = 1) {
      const vm = this;
      const API = `${process.env.VUE_APP_API}/admin/coupons?page=${page}`;
      vm.$store.commit('SET_ISLOADING', true);

      vm.$http.get(API).then((res) => {
        console.log('取得優惠券', res);

        vm.coupons = res.data.coupons;
        vm.pagination = res.data.pagination;
        vm.$store.commit('SET_ISLOADING', false);
      });
    },
    openModal(isNew, coupon) {
      const vm = this;
      $('#couponModal').modal('show');
      vm.isNew = isNew;

      if (vm.isNew) {
        vm.tempCoupon = {};

        const timestamp = Math.floor(new Date().valueOf() / 1000);
        vm.due_date = getDate(timestamp);
      } else {
        vm.tempCoupon = { ...coupon };
        vm.due_date = getDate(vm.tempCoupon.due_date);
      }
    },
    updateCoupon() {
      const vm = this;
      let api = `${process.env.VUE_APP_API}/admin/coupon/${vm.tempCoupon.id}`;
      let method = 'put';

      if (vm.isNew) {
        api = `${process.env.VUE_APP_API}/admin/coupon`;
        method = 'post';
      }

      vm.$store.commit('SET_ISLOADING', true);
      vm.$http[method](api, { data: vm.tempCoupon }).then((res) => {
        console.log('更新優惠券結果', res);

        vm.$store.commit('SET_ISLOADING', false);
        vm.getCoupons();
        $('#couponModal').modal('hide');
      });
    },
    openDelModal(coupon) {
      const vm = this;
      vm.tempCoupon = { ...coupon };
      $('#delModal').modal('show');
    },
    delCoupon() {
      const vm = this;
      const API = `${process.env.VUE_APP_API}/admin/coupon/${vm.tempCoupon.id}`;
      vm.$store.commit('SET_ISLOADING', true);

      vm.$http.delete(API).then((res) => {
        console.log('刪除優惠券結果', res);
        $('#delModal').modal('hide');
        vm.getCoupons();
        vm.$store.commit('SET_ISLOADING', false);
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
