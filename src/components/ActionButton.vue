<template lang="pug">
  el-tooltip.item(
    v-if="text",
    effect="light",
    :content="text",
    placement="bottom"
  )
    el-button.btn(
      :icon="icon",
      :type="type"
      :color="color"
      @click="goTo",
      :disabled="disabled",
    )
</template>

<script>
export default {

  props: {
    icon: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'info',
    },
    color: {
      type: String,
    },
    disabled: Boolean,
    method: String,
  },

  methods: {
    goTo() {
      if (this.method) {
        this.$emit(this.method);
      }
    },
  },
};

</script>

<style scoped lang="scss">
  .btn {
    padding: 5px;
  }
</style>