<template>
  <div>
    <h1>24 Days Of Rum</h1>
    <pre>{{this.model}}</pre>
  </div>
</template>

<script>
import { build } from './modelBuilder'
export default {
  data () {
    return {
      model: {}
    }
  },
  created () {
    this.model = build()
  }
}
</script>

<style>
</style>
