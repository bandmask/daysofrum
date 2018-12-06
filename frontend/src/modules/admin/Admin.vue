<template>
  <div class="admin">
    <h1>Administrate</h1>
    <Years />
  </div>
</template>

<script>
import Years from './components/Years'

import { ACTIONS } from '@/store/actions'

export default {
  components: { Years },
  created () {
    if (!this.years.length) {
      this.$store.dispatch(ACTIONS.GET_YEARS)
    }
  },
  watch: {
    years (newVal, oldVal) {
      console.log('watch years', newVal, oldVal)
      this.years.forEach(year => {
        if (!this.ratings.find(rating => rating.year === year.year)) {
          this.$store.dispatch(ACTIONS.GET_RATINGS, year.year)
        }
      })
    }
  },
  computed: {
    years () {
      return this.$store.state.years
    },
    ratings () {
      return this.$store.state.ratings
    }
  }
}
</script>

<style lang="less" scoped>
.admin {
  text-align: left;
  padding: 20px !important;
  width: 20%;
  margin: 0 auto;
}
</style>
