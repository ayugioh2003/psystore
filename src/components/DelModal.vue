<template>
  <!-- <DelModal
    itemType="商品"
    :tempItem="tempProduct"
    @del-item="delProduct"
  ></DelModal> -->
  <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span> 刪除 {{ itemType }} </span>
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
          是否刪除
          <strong class="text-danger">{{ tempItem.title }}</strong>
          {{ itemType }}
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-primary-light"
            data-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delItem">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tempItem: {
      type: Object,
      required: true,
    },
    itemType: {
      type: String,
      default: '商品',
    },
  },
  data() {
    return {};
  },
  methods: {
    delItem() {
      const vm = this;
      vm.$emit('del-item');
    },
  },
};
</script>
