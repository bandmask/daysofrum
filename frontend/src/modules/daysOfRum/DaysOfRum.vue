<template>
  <component :is="vm.getContainer()" :model="vm.model" />
</template>

<script>
import { build } from './modelBuilder'
import Landscape from './components/Landscape'
import Portrait from './components/Portrait'

export default {
  components: { Landscape, Portrait },
  data () {
    return {
      model: {}
    }
  },
  created () {
    this.model = build()
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
