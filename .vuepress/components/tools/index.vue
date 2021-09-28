<template>
    <div class="itemRender">
      <img :src="cover"/>
      <a v-if="website.length > 0 " :href="website" target="_blank">
        <h3>{{name}} →</h3>
      </a>
      <h3 v-else>{{name}}</h3>
      <p>{{desc}}</p>
      <div class="links grid tagsRender"
           v-if="tags.length > 0"
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
          <a :href="link.url">
            <el-button
                    :key="`key_${index}`"
                    size="mini"
                    :type="linkTypeMapButtonColor[link.type]"
                    plain
            >{{linkTypeMapName[link.type]}}</el-button>
          </a>
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
    links: { type: Array, default: () => [] },
    website: {type: String, default: ''},
    tags: {type: Array, default: () => []}
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
      tagTypes: [
        { type: ''},
        { type: 'success'},
        { type: 'info'},
        { type: 'danger'},
        { type: 'warning'}
      ],
      linkTypeMapName: { },
      linkTypeMapButtonColor: {},
    }
  },
  methods: {
    onDownload(linkInfo) {

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
  @import "common.styl"
  .itemRender {
    border-radius: 4px;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    padding: 1rem;
    display: grid;
    justify-items: center;
    > a {
      color: inherit;
    }
    > p {
      margin: 0;
    }
    > img {
      border-radius: 7%;
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