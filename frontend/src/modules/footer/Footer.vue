<template>
  <div class="footer" :class="vm.orientation">
    <span>&copy; {{`${this.$appName} ${vm.year}`}}</span>
  </div>
</template>

<script>
export default {
  data: _ => ({
    year: new Date().getFullYear()
  }),
  computed: {
    vm () {
      return this
    },
    orientation () {
      return this.$store.state.orientation
    }
  }
}
</script>

<style scoped lang="less">
.footer {
  position: fixed;
  display: block;
  padding: 10px 0px;
  width: 50%;
  text-align: center;
  margin: 0px auto;
  bottom: 10px;
  font-size: 14px;

  &.desktop {
    width: 15%;
    right: 20px;
    margin: 0;
  }
}
</style>
