<template>
  <div class="footer">
    <span>&copy; {{`${this.$appName} ${new Date().getFullYear()}`}}</span>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.footer {
  position: absolute;
  display: block;
  padding: 10px 0px;
  width: 50%;
  text-align: center;
  margin: 0px auto;
  bottom: 10px;
  left: 0;
  right: 0;
  font-size: 14px;
}
</style>
