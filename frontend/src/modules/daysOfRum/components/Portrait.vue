<template>
  <div class="container" :class="vm.orientation">
    <div class="header" :style="{ backgroundImage: `url(${vm.bannerImageSrc}`}">
      <h1>24 Days Of Rum</h1>
      <div class="year-filter">
        <div v-for="year in years"
             :key="year"
             @click="vm.activeYear = year"
             :class="{'active': vm.activeYear === year}"
             class="filter">
          {{year}}
        </div>
      </div>
    </div>
    <div class="content">
      <div v-for="collection in model"
           :key="collection.year"
           v-if="vm.activeYear === collection.year"
           class="collection">
        <h1>{{collection.year}}</h1>
        <hr class="main-divider" />
        <div v-for="rum in collection.rums"
             :key="rum.day"
             class="rum">
          <div v-if="rum.imageSrc"
               class="image">
            <img :src="rum.imageSrc"
                 :alt="rum.name" />
          </div>
          <div class="details">
            <label>
              Day:
              <span>{{rum.day}}</span>
            </label>
            <label>
              Name:
              <span>{{rum.name}}</span>
            </label>
            <label>
              Rating:
              <span>{{rum.rating}}</span>
            </label>
          </div>
          <div class="note">
            <label>
              Note:
              <span>{{rum.note}}</span>
            </label>
            <hr class="collection-divider" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import portraitBanner from '@/assets/portrait_banner.jpg'

export default {
  props: ['model'],
  data: _ => ({
    bannerImageSrc: portraitBanner,
    years: [],
    activeYear: 0
  }),
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.years = this.model
      .map(collection => collection.year)
      .sort((x, y) => {
        return x < y
      })
    this.activeYear = this.years[0]
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
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
    }
  },
  methods: {
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

      .collection {
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
              width: 210px;
              height: 200px;
              margin-bottom: 20px;
            }
          }

          .details {
            display: inline-flex;
            flex-direction: column;
          }

          .note {
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
