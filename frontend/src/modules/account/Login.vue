<template>
  <div class="login">
    <fieldset>
      <legend>daysofrum.ropr.se</legend>
      <div v-if="!vm.loginResult.hasResult" class="login-form">
        <h1>login</h1>
        <label for="email">
          <span>email:</span>
          <input id="email" v-model="vm.loginModel.email" type="text">
        </label>
        <label for="password">
          <span>password:</span>
          <input id="password" v-model="vm.loginModel.password" type="password">
        </label>
        <div class="buttons">
          <button @click="vm.send()" :disabled="vm.loginModel.isLoggingIn" class="send">send</button>
          <button @click="vm.cancel()" class="cancel">cancel</button>
        </div>
      </div>
      <div v-else>
        <h1>Login result</h1>
        <div>{{vm.getResultString()}}</div>
        <button v-if="!vm.loginResult.result" @click="vm.retryLogin()">Retry</button>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'

export default {
  created () {
    this.$store.dispatch(ACTIONS.GET_AUTH_SETTINGS)
  },
  watch: {
    loginResult (newVal, oldVal) {
      this.loginModel.isLoggingIn = false
      if (newVal.result) {
        setTimeout(() => {
          this.$router.push({ path: '/' })
        }, 5000)
      }
    }
  },
  computed: {
    vm () {
      return this
    },
    loginModel () {
      return this.$store.state.account.user
    },
    loginResult () {
      return this.$store.state.account.user.result
    }
  },
  methods: {
    send () {
      this.loginModel.isLoggingIn = true
      this.$store.dispatch(ACTIONS.ACCOUNT_LOGIN, Object.assign({}, this.loginModel))
    },
    cancel () {
      this.$store.dispatch(ACTIONS.ACCOUNT_LOGIN_RESET)
    },
    getResultString () {
      return this.loginResult.hasResult && this.loginResult.result
        ? 'Login successful, redirecting to home...'
        : 'Login failed, watch logs for more info'
    },
    retryLogin () {
      this.loginResult.hasResult = false
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  text-align: left;
  padding: 20px !important;
  width: 20%;
  margin: 0 auto;

  fieldset {
    margin: 50px 0;
  }

  .login-form {
    width: 100%;
    padding: 0 0 20px 0;

    label {
      display: block;
      width: 80%;
      margin: 0 auto 10px auto;

      span {
        display: block;
        margin-bottom: 3px;
      }

      input {
        display: block;
        width: 100%;
      }
    }
    .buttons {
      display: flex;
      width: 50%;
      margin: 20px auto 0 auto;
      justify-content: space-between;

      button {
        padding: 5px 10px;
        border-radius: 3px;
        background-color: transparent;
        border: 1px solid;
        cursor: pointer;

        &.send {
          color: #0099cc;
          border-color: #0099cc;

          &:hover {
            color: white;
            background-color: #0099cc;
          }

          &:disabled {
            pointer-events: none;
            background-color: lightgray;
          }
        }

        &.cancel {
          color: red;
          border-color: red;

          &:hover {
            color: white;
            background-color: red;
          }
        }
      }
    }
  }

  h1 {
    display: block !important;
    text-align: left !important;
  }
}
</style>
