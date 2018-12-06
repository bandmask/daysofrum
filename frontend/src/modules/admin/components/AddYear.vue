<template>
  <div>
    <h1>Add year</h1>
    <div class="add-year">
      <label>
        <span>Year:</span>
        <input type="number" v-model="vm.year" />
      </label>
      <label>
        <span>Description:</span>
        <textarea type="number" v-model="vm.description" />
      </label>
    </div>
    <div class="buttons">
      <button @click="vm.addYear()" class="save">Save</button>
      <button @click="vm.cancel()" class="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'
export default {
  data () {
    return {
      year: null,
      description: null
    }
  },
  computed: {
    vm () {
      return this
    }
  },
  methods: {
    addYear () {
      this.$store.dispatch(ACTIONS.ADMINISTRATE_ADD_YEAR, { year: this.year, description: this.description })
    },
    cancel () {
      this.year = null
      this.description = null
    }
  }
}
</script>

<style lang="less" scoped>
.add-year {
  width: 350px;
  label {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 10px 0;

    input,
    textarea {
      width: 200px;
      vertical-align: middle;
      padding: 2px;
      margin: 0px;
      border-width: 2px;
      border-style: inset;
      border-color: rgb(238, 238, 238);
    }

    textarea {
      height: 80px;
      resize: none;
    }

    span {
      align-self: center;
      height: 20px;
      line-height: 20px;
    }
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

    &.save {
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
</style>
