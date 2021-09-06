<template>
    <div class="itemRender">
      <img :src="formatCover(cover)"/>
      <a :href="rep" target="_blank">
        <h3>{{formatName(name)}} →</h3>
      </a>
      <p>{{desc}}</p>
      <div class="links grid tagsRender"
           :class="{
              'grid-column-1': tags.length === 1 ,
              'grid-column-2': tags.length === 2 ,
              'grid-column-3': tags.length === 3 ,
              'grid-column-4': tags.length === 4 ,
              'grid-column-5': tags.length >= 5 ,
            }"
      >
        <el-tag
            size="mini"
            v-for="(item, index) in tags"
            :key="`key_${index}`"
            :type="tagTypes[index % tagTypes.length].type"
            effect="dark">
          {{ item }}
        </el-tag>
      </div>
      <div class="links grid grid-column-3">
        <img :src="starsUrl" />
        <img :src="forkUrl" />
        <img :src="followUrl" />
      </div>
    </div>


</template>

<script>

export default {
  props: {
    cover: {type: String, default: ''},
    rep: {type: String},
    name: {type: String, default: ''},
    desc: {type: String},
    tags: {type: Array, default: () => []}
  },
  computed: {
    starsUrl() {
      const username = this.getUsername()
      const repName = this.getRepName()

      return `https://img.shields.io/github/stars/${username}/${repName}?style=for-the-badge`
    },
    forkUrl() {
      const username = this.getUsername()
      const repName = this.getRepName()

      return `https://img.shields.io/github/forks/${username}/${repName}?style=for-the-badge`
    },
    followUrl() {
      const username = this.getUsername()

      return `https://img.shields.io/github/followers/${username}?style=for-the-badge`
    }
  },

  data() {
    return {
      tagTypes: [
        { type: ''},
        { type: 'success'},
        { type: 'info'},
        { type: 'danger'},
        { type: 'warning'}
      ],
    }
  },
  methods: {
    formatCover(cover) {
      if (cover.length === 0 ) {
        const username = this.getUsername()

        return  `https://github.com/${username}.png?size=80`
      }

      return cover
    },
    getUsername() {
      const [_, username ] = this.rep.match(/github\.com\/([^\/]+)/)

      return username
    },
    getRepName() {
      const [, , rep] = this.rep.match(/github\.com\/([^\/]+)\/([\w|-|_]+)/)
      return rep

    },
    formatName(initName) {
      if (initName.length === 0 ) {
        const username = this.getUsername()
        const rep = this.getRepName()

        return `${username}/${rep}`
      }

      return initName
    }
  },

}
</script>

<style lang="stylus" scoped>
@import "common.styl"
  .itemRender {
    >img {
      border-radius: 7%;
    }
    > p {
      margin: 0;
    }
    border-radius: 4px;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    padding: 1rem;
    display: grid;
    justify-items: center;
    > a {
      color: inherit;
    }
    > img {
      $imgWidth = 4rem ;
      width: $imgWidth;
      height: $imgWidth;
    }
  }

.dark{
  .itemRender {
    box-shadow: 0px 1px 2px #0a53efc2, 0px 2px 4px #473f4f14;
    &:hover {
      box-shadow: #0a53eff7 0px 2px 4px, #473f4f29 0px 4px 8px;
      a > h3 {
        color: $accentColor;
        text-decoration: underline;
      }
    }
  }
}
.light {
  .itemRender {
    box-shadow: 0px 1px 2px #2e293314, 0px 2px 4px #473f4f14;
    &:hover {
      box-shadow: #2e293314 0px 2px 4px, #473f4f29 0px 4px 8px;
      a > h3 {
        color: $accentColor;
        text-decoration: underline;
      }
    }
  }
}
@media screen and (max-width:720px) {
  .el-button+.el-button {
    margin-left: 0px !important;
  }
}
  .tagsRender {
    margin-bottom: .3rem;
  }
</style>