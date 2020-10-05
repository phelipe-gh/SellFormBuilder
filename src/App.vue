<template lang='pug'>
div
  div.msg
    flash-message(:position="'right top'")
  Main-header
  router-view
</template>
<script>
import MainHeader from '@/components/MainHeader'
import Listagem from '@/components/Listagem'

export default {

  components: {
    MainHeader
  },
}
</script>
<style></style>