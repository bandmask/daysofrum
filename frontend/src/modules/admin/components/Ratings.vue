<template>
  <div class="edit-ratings">
    <div v-for="(rating, $index) in vm.ratings" :key="$index" class="rating">
      <div>
        <label>
          <span>Day: </span>
          <span>{{rating.day}}</span>
        </label>
        <label>
          <span>Name: </span>
          <span>{{rating.name}}</span>
        </label>
        <label>
          <span>Rating: </span>
          <span>{{rating.rating}}</span>
        </label>
        <label>
          <span>Note: </span>
          <span>{{rating.note}}</span>
        </label>
        <label v-if="rating.image" class="image">
          <span>Image:</span>
          <img :src="vm.getImage(rating.image)"
               :alt="rating.name" />
        </label>
        <div class="buttons">
          <button @click="vm.removeRating(rating)" class="delete">Delete</button>
        </div>
      </div>
    </div>
    <AddRating :year="vm.year" />
  </div>
</template>

<script>
import AddRating from './AddRating'

import { ACTIONS } from '@/store/actions'

export default {
  props: ['year', 'ratings'],
  components: { AddRating },
  computed: {
    vm () {
      return this
    }
  },
  methods: {
    getImage (image) {
      return `data:image/jpeg;base64, ${image}`
    },
    removeRating (rating) {
      if (confirm(`Sure you want to delete rating ${rating.name}?`)) {
        this.$store.dispatch(ACTIONS.ADMINISTRATE_REMOVE_RATING, { year: rating.year, day: rating.day })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.edit-ratings {
  width: 100%;
  border: 1px solid lightgray;
  padding: 20px;

  .rating {
    margin: 10px;

    label {
      display: block;

      &.image {
        display: inline-flex;

        img {
          margin: 0 0 20px 20px;
        }
      }
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
