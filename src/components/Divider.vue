<template lang='pug'>
  el-row
    .label-divider {{label}}
      span(slot='label')
    .divider
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false
    },
    tooltip: {
      type: String,
      default: null
    }
  }
}
</script>
<style lang='scss' scoped>

.label-divider {
  font-size: 24px;
  font-weight: bold;
  color: #1159b8;
}

.divider {
  border: 1px solid rgb(145, 145, 145);
}
</style>
