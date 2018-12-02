<template>
  <div>
    <input type="file" @change="vm.handleFile" />
    <button :disabled="!vm.hasFile" @click="vm.upload()">Upload</button>
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'
export default {
  props: ['year', 'rating'],
  data () {
    return {
      hasFile: false,
      file: Object
    }
  },
  computed: {
    vm () {
      return this
    }
  },
  methods: {
    handleFile (event) {
      this.file = event.target.files[0]
      this.hasFile = !!this.file
    },
    upload () {
      this.$store.dispatch(ACTIONS.UPLOAD_FILE, { year: this.year, day: this.rating.day, file: this.file })
    }
  }
}
</script>

<style>
</style>
