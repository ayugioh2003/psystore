<template>
  <!-- <Pagination
    :pagination="pagination"
    @change-page="getProductsA"
  ></Pagination> -->
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: pagination.current_page == 1 }"
        @click.prevent="changePage(pagination.current_page - 1)"
      >
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: pagination.current_page == page }"
        v-for="page in pagination.total_pages"
        :key="page"
        @click.prevent="changePage(page)"
      >
        <a class="page-link " href="#">{{ page }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: pagination.current_page == pagination.total_pages }"
        @click.prevent="changePage(pagination.current_page + 1)"
      >
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    changePage(page) {
      // console.log(page);
      const vm = this;
      vm.$emit('change-page', page);
    },
  },
};
</script>

<style lang="scss">
.disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
