<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <span>/</span>
      <span v-if="vm.user.signedIn">
        <router-link to="/admin">Admin</router-link>
        <span>/</span>
        <router-link to="/logout">Signout</router-link>
      </span>
      <span v-else>
        <router-link v-if="vm.user" to="/login">Signin</router-link>
        <span>/</span>
        <router-link v-if="vm.user" to="/register">Register</router-link>
      </span>
    </div>
    <router-view class="component-content" />
    <Footer />
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'
import { MUTATIONS } from '@/store/mutations'
import { breakpoints } from '@/media'
import Footer from '@/modules/footer/Footer'

export default {
  components: { Footer },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleResize)
      window.addEventListener('scroll', this.handleScroll)
    })
    this.$store.dispatch(ACTIONS.ACCOUNT_INIT)
  },
  created () {
    this.handleResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    vm () {
      return this
    },
    orientation: {
      get () {
        return this.$store.state.orientation
      },
      set (val) {
        this.$store.commit(MUTATIONS.ORIENTATION, val)
      }
    },
    scroll: {
      get () {
        return this.$store.state.scroll
      },
      set (val) {
        this.$store.commit(MUTATIONS.SCROLL, val)
      }
    },
    user () {
      return this.$store.state.account.user
    }
  },
  methods: {
    handleResize () {
      Object.keys(breakpoints).forEach(key => {
        if (window.matchMedia(breakpoints[key]).matches) {
          this.orientation = key
        }
      })
    },
    handleScroll (event) {
      this.scroll = window.scrollY
    }
  }
}
</script>

<style lang="less">
body {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  overflow: hidden scroll;

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0px auto;

    .nav {
      position: fixed;
      padding: 10px;
      z-index: 10;

      a {
        color: #42b983;
        &.router-link-exact-active {
          font-weight: bold;
          color: #42b983;
        }
      }
      span {
        color: #fff;
        margin: 0 2px;
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
      bottom: 0;
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
