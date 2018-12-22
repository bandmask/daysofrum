<template>
  <div class="administrate-years">
    <div v-for="yearModel in vm.years" :key="yearModel.year" class="year">
      <div>
        <label>
          <span>Year: </span>
          <span>{{yearModel.year}}</span>
        </label>
        <label>
          <span>Description: </span>
          <span>{{yearModel.description}}</span>
        </label>
        <label>
          <span># Ratings: </span>
          <span>{{vm.getRatings(yearModel).length}}</span>
        </label>
        <div class="buttons">
          <button @click="vm.toggleEditRatingsForYear(yearModel)" class="toggle">{{ vm.isEditingRatingsForYear(yearModel) ? 'Cancel' : 'Edit' }}</button>
          <button @click="vm.removeYear(yearModel)" class="delete">Delete</button>
        </div>
        <keep-alive>
          <Ratings v-show="isEditingRatingsForYear(yearModel)" :year="yearModel.year" :ratings="vm.getRatings(yearModel)" />
        </keep-alive>
      </div>
    </div>
    <AddYear />
  </div>
</template>

<script>
import Ratings from './Ratings'
import AddYear from './AddYear'

import { ACTIONS } from '@/store/actions'

export default {
  components: { Ratings, AddYear },
  data () {
    return {
      editRatingsForYears: []
    }
  },
  computed: {
    vm () {
      return this
    },
    years () {
      return this.$store.state.years
    },
    ratings () {
      return this.$store.state.ratings
    }
  },
  methods: {
    getRatings (yearModel) {
      return this.ratings.filter(rating => rating.year === yearModel.year)
    },
    toggleEditRatingsForYear (yearModel) {
      if (this.isEditingRatingsForYear(yearModel)) {
        this.editRatingsForYears.splice(this.editRatingsForYears.indexOf(yearModel.year), 1)
      } else {
        this.editRatingsForYears.push(yearModel.year)
      }
    },
    isEditingRatingsForYear (yearModel) {
      return !!this.editRatingsForYears.find(year => year === yearModel.year)
    },
    removeYear (year) {
      if (confirm(`Sure you want to delete year ${year.year}?`)) {
        this.$store.dispatch(ACTIONS.ADMINISTRATE_REMOVE_YEAR, year.year)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.administrate-years {
  .year {
    margin: 10px;

    label {
      display: block;
    }

    .buttons {
      button {
        padding: 2px 5px;
        border-radius: 3px;
        background-color: transparent;
        border: 1px solid;
        cursor: pointer;
        margin: 10px;
        outline: none;

        &.toggle {
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

        &.delete {
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
}
</style>
