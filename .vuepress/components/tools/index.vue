<template>
    <div class="itemRender">
      <img :src="cover"/>
      <a v-if="website.length > 0 " :href="website" target="_blank">
        <h3>{{name}} →</h3>
      </a>
      <h3 v-else>{{name}}</h3>
      <p>{{desc}}</p>
      <div class="links grid"
           :class="{
        'grid-column-1': links.length === 1,
        'grid-column-2': links.length === 2,
        'grid-column-3': links.length >= 3,
      }"
      >
        <template
            v-for="(link, index) in links"
        >
          <el-button
              :key="`key_${index}`"
              size="mini"
              :type="linkTypeMapButtonColor[link.type]"
              plain
              @click="onDownload(link)"
          >{{linkTypeMapName[link.type]}}</el-button>
        </template>
      </div>
    </div>


</template>

<script>

const m1Type = 'M1',
    macType = 'mac',
    windowType = 'windows',
    androidType = 'android',
    linuxType = 'linux',
    iosType = 'ios'
export default {
  name: 'tools',
  props: {
    item: {type: String},
    cover: {type: String},
    name: {type: String},
    desc: {type: String},
    links: {type: Array, default: []},
    website: {type: String, default: ''},
  },
  created() {
    this.linkTypeMapName[m1Type] = 'M1 下载'
    this.linkTypeMapName[windowType] = 'Windows 下载'
    this.linkTypeMapName[macType] = 'Mac 下载'
    this.linkTypeMapName[androidType] = 'Android 下载'
    this.linkTypeMapName[linuxType] = 'Linux 下载'
    this.linkTypeMapName[iosType] = 'Ios 下载'

    this.linkTypeMapButtonColor[m1Type] = 'primary'
    this.linkTypeMapButtonColor[iosType] = 'primary'
    this.linkTypeMapButtonColor[windowType] = 'success'
    this.linkTypeMapButtonColor[macType] = 'danger'
    this.linkTypeMapButtonColor[androidType] = 'danger'
    this.linkTypeMapButtonColor[linuxType] = 'success'
  },

  data() {
    return {
      linkTypeMapName: { },
      linkTypeMapButtonColor: {},
    }
  },
  methods: {
    onDownload(linkInfo) {
      const link = document.createElement("a");
      link.href = linkInfo.url
      link.target = '_blank'
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },

}
</script>

<style lang="stylus" scoped>
  .itemRender {
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
  .grid {
    display: grid;
    justify-items: center;
    grid-gap: .5rem;
  }
  .grid-column-1 {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-column-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-column-3 {
    grid-template-columns: repeat(3, 1fr);
  }
</style>