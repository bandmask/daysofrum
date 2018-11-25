<template>
  <component :is="vm.getContainer()" />
</template>

<script>
import { ACTIONS } from '@/store/actions'
import Landscape from './components/Landscape'
import Portrait from './components/Portrait'

export default {
  components: { Landscape, Portrait },
  created () {
    this.$store.dispatch(ACTIONS.GET_YEARS)
  },
  computed: {
    vm () {
      return this
    },
    orientation () {
      return this.$store.state.orientation
    }
  },
  methods: {
    getContainer () {
      switch (this.orientation) {
        case 'portrait':
        case 'desktop':
          return Portrait
        case 'landscape':
          return Landscape
      }
    }
  }
}
</script>

<style>
</style>
