<template>
  <div class="container" :class="vm.orientation">
    <div class="header" ref="header" :style="{ backgroundImage: `url(${vm.bannerImageSrc}` }">
      <h1>24 Days Of Rum</h1>
    </div>
    <div class="content">
      <div v-for="collection in model"
           :key="collection.year"
           v-if="collection.isActive"
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
    bannerImageSrc: portraitBanner
  }),
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
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
    }
  },
  methods: {
    handleScroll (event) {
      let scroll = window.scrollY
      this.$refs.header.style.transform = `translateY(calc(${scroll}px))`
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
      position: absolute;
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
      background-color: red;
      z-index: 1;
    }
    .content {
      position: absolute;
      width: 60%;
      margin: 0px auto;
      top: 50%;
      padding: 0px 10px;
      background-color: yellow;
      z-index: 10;
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
          padding: 10px;
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
        background-color: blue;
        &.main-divider {
          height: 4px;
        }
        &.collection-divider {
          height: 2px;
        }
      }
    }
  }
  &.portrait {
  }
}
</style>
