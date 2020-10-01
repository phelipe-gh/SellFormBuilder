<template lang='pug'>
div
  Main-header
  flash-message.index(:position="'right top'")
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