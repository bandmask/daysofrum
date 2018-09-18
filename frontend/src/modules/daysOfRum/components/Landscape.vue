<template>
  <div>
    <p>message from landscape</p>
    <pre>{{vm.model}}</pre>
  </div>
</template>

<script>
export default {
  props: ['model'],
  computed: {
    vm () {
      return this
    }
  }
}
</script>

<style land="less" scoped>
div {
  background-color: yellow;
}
</style>
