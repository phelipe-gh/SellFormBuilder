<template lang='pug'>
div
  Main-header
  router-view
</template>
<script>
import MainHeader from '@/components/MainHeader'
import Listagem from '@/components/Listagem'

export default {

  components: {
    MainHeader,
    Listagem
  },
}
</script>
<style></style>