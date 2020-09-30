<template lang="pug">
  el-button.btn(
    :type="type",
    :disabled="disabled",
    :class="type",
    @click="goTo",
    :size="size"
  )
    span.center
      b.marginTextBottom
        | {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
    icon: String,
    link: String,
    disabled: Boolean,
    method: String,
  },

  methods: {
    goTo() {
      if (this.link) {
        if (this.scope) {
          this.$router.push({
            name: this.link,
            params: {
              scope: this.scope,
            },
          });
        } else {
          this.$router.push({ name: this.link });
        }
      } else
      if (this.method) {
        this.$emit(this.method);
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .component {
    .text-btn {
      padding: 0;
    }

    .center {
      display: flex;
      vertical-align: center;
    }

    .text {
      color: #606266;
      padding: 0;
    }
  }

  .marginTextBottom {
    margin-left: 5px;
  }
</style>
