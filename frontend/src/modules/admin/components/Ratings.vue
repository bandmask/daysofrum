<template>
  <div class="edit-ratings">
    <div v-for="(rating, $index) in vm.ratings" :key="$index">
      <span>{{rating}}</span>
    </div>
    <AddRating />
  </div>
</template>

<script>
import AddRating from './AddRating'

export default {
  props: ['ratings'],
  components: { AddRating },
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
  padding: 20px;
}
</style>
