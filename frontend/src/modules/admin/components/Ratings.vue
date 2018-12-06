<template>
  <div class="edit-ratings">
    <div v-for="(rating, $index) in vm.ratings" :key="$index">
      <span>{{rating}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ratings'],
  computed: {
    vm () {
      return this
    }
  }
}
</script>

<style lang="less" scoped>
.edit-ratings {
  width: 100%;
  border: 1px solid lightgray;
}
</style>
