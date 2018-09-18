<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view class="component-content" />
    <Footer />
    <pre class="debugger">
  debugger
  Device: {{this.orientation}}
    </pre>
  </div>
</template>

<script>
import { breakpoints } from '@/media'
import Footer from '@/modules/footer/Footer'

export default {
  components: { Footer },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleResize)
    })
  },
  created () {
    this.handleResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    orientation: {
      get () {
        return this.$store.state.orientation
      },
      set (val) {
        this.$store.commit('orientation', val)
      }
    }
  },
  methods: {
    handleResize () {
      Object.keys(breakpoints).forEach(key => {
        if (window.matchMedia(breakpoints[key]).matches) {
          this.orientation = key
        }
      })
    }
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    height: 100%;
    margin: 0px auto;

    #nav {
      padding: 10px;
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }

    .component-content {
      height: 100%;
    }

    h1,
    h2,
    h3 {
      display: inline-block;
      margin: 10px 0px;
    }

    h3 {
      font-style: italic;
      margin-bottom: 0px;
    }

    p {
      margin: 5px 0px;
    }

    .debugger {
      position: absolute;
      top: 0;
      right: 0;
      width: 25%;
      height: 240px;
      margin: 0px;
      padding: 0px;
      background-color: rgba(0, 0, 0, 0.3);
      color: green;
    }
  }
}
</style>
