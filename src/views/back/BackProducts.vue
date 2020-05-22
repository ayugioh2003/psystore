<template>
  <div>
    <div class="my-3 d-flex">
      <button class="btn btn-primary ml-auto" @click="openModal(true)">
        新增商品
      </button>
    </div>
    <!-- 表格 -->
    <table class="table">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="160">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <th>{{ item.category }}</th>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price | currency }}</td>
          <td class="text-right">{{ item.price | currency }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">已啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-primary" @click="openModal(false, item)">
              編輯
            </button>
            <button class="btn btn-danger" @click="openDelModal(item)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁列 -->
    <Pagination
      :pagination="pagination"
      @change-page="getProductsA"
    ></Pagination>
    <!-- Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span> 新增產品 </span>
            </h5>
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image"> 輸入圖片網址 </label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder=" 請輸入圖片連結 "
                  />
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <font-awesome-icon
                      icon="spinner"
                      spin
                      v-if="status.fileUploading"
                    />
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title"> 標題 </label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="tempProduct.title"
                    placeholder=" 請輸入標題 "
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category"> 分類 </label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      v-model="tempProduct.category"
                      placeholder=" 請輸入分類 "
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price"> 單位 </label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      v-model="tempProduct.unit"
                      placeholder=" 請輸入單位 "
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price"> 原價 </label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder=" 請輸入原價 "
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price"> 售價 </label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model="tempProduct.price"
                      placeholder=" 請輸入售價 "
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description"> 產品描述 </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempProduct.description"
                    placeholder=" 請輸入產品描述 "
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content"> 說明內容 </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="tempProduct.content"
                    placeholder=" 請輸入產品說明內容 "
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
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
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Del Modal -->
    <DelModal
      itemType="商品"
      :tempItem="tempProduct"
      @del-item="delProduct"
    ></DelModal>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  metaInfo() {
    return {
      title: '後台產品管理 | PsyStore',
    };
  },

  components: {
    Pagination,
    DelModal,
  },
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      isNew: false,
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    getProductsA(page = 1) {
      const vm = this;
      const API = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products/?page=${page}`;
      vm.$store.commit('SET_ISLOADING', true);

      vm.$http.get(API).then((response) => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        vm.$store.commit('SET_ISLOADING', false);
      });
    },
    updateProduct() {
      const vm = this;
      const getAPI = (isNew) => {
        if (isNew) {
          return `${process.env.VUE_APP_API}/admin/product`;
        }
        return `${process.env.VUE_APP_API}/admin/product/${vm.tempProduct.id}`;
      };
      const getMethod = (isNew) => (isNew ? 'post' : 'put');

      const API = getAPI(vm.isNew);
      const method = getMethod(vm.isNew);
      vm.$store.commit('SET_ISLOADING', true);

      vm.$http[method](API, { data: vm.tempProduct }).then(() => {
        $('#productModal').modal('hide');
        vm.getProductsA();
        vm.$store.commit('SET_ISLOADING', false);
      });
    },
    uploadFile() {
      const vm = this;
      const uploadedFile = vm.$refs.files.files[0];
      const API = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      vm.status.fileUploading = true;

      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);

      vm.$http
        .post(API, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((data) => {
          vm.$set(vm.tempProduct, 'imageUrl', data.data.imageUrl);
          vm.status.fileUploading = false;
        });
    },
    openModal(isNew, product) {
      const vm = this;

      if (isNew) {
        vm.tempProduct = {};
        vm.isNew = true;
      } else {
        vm.tempProduct = { ...product };
        vm.isNew = false;
      }

      $('#productModal').modal('show');
    },
    openDelModal(item) {
      const vm = this;
      vm.tempProduct = { ...item };
      $('#delModal').modal('show');
    },
    delProduct() {
      const vm = this;
      const API = `${process.env.VUE_APP_API}/admin/product/${vm.tempProduct.id}`;
      vm.$store.commit('SET_ISLOADING', true);

      vm.$http.delete(API).then(() => {
        $('#delModal').modal('hide');
        vm.$store.commit('SET_ISLOADING', false);
        vm.getProductsA();
      });
    },
  },
  created() {
    const vm = this;
    vm.getProductsA();
  },
};
</script>
