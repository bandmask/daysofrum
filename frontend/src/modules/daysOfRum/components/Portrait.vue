<template>
  <div class="container" :class="vm.orientation">
    <div class="header" :style="{ backgroundImage: `url(${vm.bannerImageSrc}`}">
      <h1>24 Days Of Rum</h1>
      <div class="year-filter">
        <div v-for="(year, $index) in vm.years"
             :key="$index"
              @click="vm.setActiveYear(year)"
             :class="{'active': vm.activeYear.year === year.year}"
             class="filter">
          {{year.year}}
        </div>
      </div>
    </div>
    <div class="content">
      <div v-if="vm.activeYear" class="year-header">
        <h1>{{vm.activeYear.year}}</h1>
        <div v-if="vm.activeYear.description" class="year-description">"{{vm.activeYear.description}}"</div>
        <hr class="main-divider" />
      </div>
      <div v-if="vm.ratings.length > 0"
           class="rums">
        <div v-for="(rating, $index) in vm.filteredRatings"
            :key="$index"
            class="rum">
          <div v-if="rating.image"
                class="image">
            <img :src="vm.getImage(rating.image)"
                  :alt="rating.name" />
          </div>
          <div class="details">
            <label>
              Day:
              <span>{{rating.day}}</span>
            </label>
            <label>
              Name:
              <span>{{rating.name}}</span>
            </label>
            <label>
              Rating:
              <span>{{rating.rating}}</span>
            </label>
            <label>
              Note:
              <span>{{rating.note}}</span>
            </label>
          </div>
          <div class="divider">
            <hr class="collection-divider" />
          </div>
        </div>
      </div>
      <div v-else
           class="no-rums-message">
        <div>It seems that there are no tasting sessions for {{vm.activeYear.year}}.</div>
        <div>Check in again later, something might come up soon.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'

import portraitBanner from '@/assets/portrait_banner_2.jpg'

export default {
  data () {
    return {
      bannerImageSrc: portraitBanner
    }
  },
  computed: {
    vm () {
      return this
    },
    orientation () {
      return this.$store.state.orientation
    },
    scroll () {
      return this.$store.state.scroll
    },
    ratings () {
      return this.$store.state.ratings
    },
    years () {
      return this.$store.state.years
    },
    activeYear: {
      get () {
        return this.$store.state.activeYear
      },
      set (value) {
        this.$store.dispatch(ACTIONS.SET_ACTIVE_YEAR, value)
      }
    },
    filteredRatings () {
      return this.ratings.filter(rating => rating.year === this.activeYear.year)
    }
  },
  methods: {
    setActiveYear (year) {
      this.activeYear = year
    },
    getImage (image) {
      return `data:image/jpeg;base64, ${image}`
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  &.desktop {
    width: 60%;
    margin: 0px auto;

    .header {
      position: fixed;
      width: 100%;
      height: 500px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: white;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      z-index: 1;
      text-align: left;
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.6);

      h1 {
        position: absolute;
        bottom: 0;
        left: 2em;
      }
    }

    .content {
      position: absolute;
      width: 60%;
      margin: 0px auto;
      top: 50%;
      padding: 0px 10px;
      background-color: #fff;
      z-index: 10;
      border-radius: 1.5px;

      .year-header {
        .year-description {
          font-style: italic;
          color: gray;
          margin-bottom: 3px;
        }
      }

      .rums {
        .rum {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex: 2;
          flex-flow: row wrap;
          padding: 10px;

          .image {
            display: inline-flex;

            img {
              margin-bottom: 20px;
            }
          }

          .details {
            display: inline-flex;
            flex-direction: column;
          }

          .divider {
            display: flex;
            flex-flow: column wrap;
            flex: 2 0 100%;
          }

          label {
            display: block;
            font-style: italic;
            margin: 2px 0px 8px 10px;

            span {
              font-weight: 600;
              font-style: normal;
            }
          }
        }
      }

      .no-rums-message {
        padding: 10px;
        font-style: italic;
        color: gray;
      }

      hr {
        margin: 0px;
        border: none;
        background-color: rgba(0, 0, 0, 0.3);

        &.main-divider {
          height: 4px;
        }

        &.collection-divider {
          height: 2px;
        }
      }

      &:after,
      &:before {
        display: block;
        content: "";
        position: absolute;
        top: 2px;
        bottom: 0;
        width: 5px;
      }

      &:after {
        right: 0;
        box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.3);
      }

      &:before {
        left: 0;
        box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.3);
      }
    }

    .year-filter {
      position: absolute;
      bottom: 20px;
      right: 50px;
      width: 10%;
      text-align: center;

      .filter {
        width: 100%;
        margin: 5px 0px;
        padding: 10px 0px;
        cursor: pointer;
        border-radius: 2px;

        &:hover,
        &.active {
          background-color: #fff;
          color: black;
        }
      }
    }
  }
  &.portrait {
  }
}
</style>
