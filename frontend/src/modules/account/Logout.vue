<template>
  <div class="logout">
    <fieldset>
      <legend>daysofrum.ropr.se</legend>
      <div>
        <span>You are now signed out, redirecting to home..</span>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'

export default {
  created () {
    this.$store.dispatch(ACTIONS.ACCOUNT_LOGOUT)
  },
  watch: {
    signedIn (newVal) {
      console.log('watch')
      setTimeout(() => {
        this.$router.push({ path: '/' })
      }, 5000)
    }
  },
  computed: {
    signedIn () {
      return this.$store.state.account.user.signedIn
    }
  }
}
</script>

<style lang="less" scoped>
.logout {
  text-align: left;
  padding: 20px !important;
  width: 20%;
  margin: 0 auto;

  fieldset {
    margin: 50px 0;
  }
}
</style>
