<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      {{ item.message }}
      <button
        type="button"
        class="close"
        @click="removeMessage(i)"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      messages: 'alertMessage/messages',
    }),
  },
  methods: {
    ...mapActions({
      removeMessage: 'alertMessage/removeMessage',
      updateMessage: 'alertMessage/updateMessage',
    }),
  },
  created() {
    // this.updateMessage({
    //   message: '是在哈佛2',
    //   status: 'danger',
    // });
    // this.$store.dispatch('alertMessage/updateMessage', {
    //   message: '是在哈哈哈佛',
    //   status: 'primary',
    // });
  },
};
</script>

<style scope lang="scss">
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 110000; // make z-index > navbar
}
</style>
