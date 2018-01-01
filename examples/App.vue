<template>
  <div id="app">
    <header>
      <img data-v-ed16f314="" src="https://vuejs.org/images/logo.png" alt="Vue.js" class="vue-logo">

      <h1>EffectDropdown</h1>

      <p class="description">Simple effects for Dropdown based on Vue.js.</p>

      <a target="__blank" href="https://github.com/XBT1/effect-dropdown-vue">
        <img src="https://img.shields.io/github/stars/XBT1/effect-dropdown-vue.svg?style=for-the-badage&amp;label=Stars" alt="GitHub Stars">
      </a>

      <a class="github-link" href="https://github.com/XBT1/effect-dropdown-vue">
        <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>
    </header>

    <main>
      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          默认效果，折叠时具有些许间隔，激活时选项之间间隔 5px。

          <a class="source-link" target="_blank" href="https://github.com/XBT1/effect-dropdown-vue/blob/master/examples/App.vue#L28">源码</a>
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Pick your direction" style="z-index: 4000;">
            <effect-dropdown-item>
              <i class="ion-arrow-up-c"></i>
              <span>Up</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-arrow-right-c"></i>
              <span>Right</span>
            </effect-dropdown-item>
            <effect-dropdown-item disabled>
              <i class="ion-arrow-down-c"></i>
              <span>Down</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-arrow-left-c"></i>
              <span>Left</span>
            </effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>

      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          random 效果，折叠时具有些许间隔，激活时选项之间间隔 5px，每个选项具有随机的角度旋转和偏移，以及不同的 animation-delay。

          <a class="source-link" target="_blank" href="https://github.com/XBT1/effect-dropdown-vue/blob/master/examples/App.vue#L57">源码</a>
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Choose your pet" active-color="#4d8c9d" effect="random" style="z-index: 3500;">
            <effect-dropdown-item>Husky</effect-dropdown-item>
            <effect-dropdown-item>Shorthair</effect-dropdown-item>
            <effect-dropdown-item>Monkey</effect-dropdown-item>
            <effect-dropdown-item>Canary</effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>

      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          camber 效果，折叠时具有些许间隔，激活时选项之间间隔 5px，依次排列组成圆弧状，并有不同的 animation-delay。

          <a class="source-link" target="_blank" href="https://github.com/XBT1/effect-dropdown-vue/blob/master/examples/App.vue#L74">源码</a>
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Set the currency" active-color="#97d1bc" effect="camber" style="z-index: 3400;">
            <effect-dropdown-item disabled>
              <i class="ion-social-usd"></i>
              <span>USD</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-bitcoin"></i>
              <span>Bitcoin</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-yen"></i>
              <span>Yen</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-euro"></i>
              <span>Euro</span>
            </effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>


      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          raiseLabel 效果，折叠时具有些许间隔，激活时选项之间没有间隔，依次排列。label 被点击时会有收缩的 3D 效果。

          <a class="source-link" target="_blank" href="https://github.com/XBT1/effect-dropdown-vue/blob/master/examples/App.vue#L104">源码</a>
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Select your platform" active-color="#f8b161" raise-label :gutter="0" style="z-index: 3300;">
            <effect-dropdown-item>
              <i class="ion-social-apple"></i>
              <span>iOS</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-android"></i>
              <span>Android</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-windows"></i>
              <span>Windows</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-tux"></i>
              <span>Linux</span>
            </effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>

      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          stagger 效果。默认不折叠，激活时从两侧滑入，且选项之间间隔 5px。

          <a class="source-link" target="_blank" href="https://github.com/XBT1/effect-dropdown-vue/blob/master/examples/App.vue#L133">源码</a>
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Select your technology" active-color="#c29ad2" effect="stagger" style="z-index: 3200;">
            <effect-dropdown-item>
              <i class="ion-social-html5"></i>
              <span>HTML5</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-angular"></i>
              <span>Angular</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-javascript"></i>
              <span>JavaScript</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-python"></i>
              <span>Python</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-markdown"></i>
              <span>Markdown</span>
            </effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>

      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          fence 效果。默认不折叠，激活时依次从两侧滑入，且选项之间间隔 5px，具有不同的 animation-delay。

          <a class="source-link" target="_blank" href="https://github.com/XBT1/effect-dropdown-vue/blob/master/examples/App.vue#L166">源码</a>
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Share to..." active-color="#e66b20" effect="fence" style="z-index: 3000;">
            <effect-dropdown-item>
              <i class="ion-social-twitter"></i>
              <span>Twitter</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-facebook"></i>
              <span>Facebook</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-googleplus"></i>
              <span>Google+</span>
            </effect-dropdown-item>
            <effect-dropdown-item>
              <i class="ion-social-instagram"></i>
              <span>Instagram</span>
            </effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>
    </main>

    <footer>
      <p>
        Inspired by
        <a target="__blank" href="https://tympanus.net/Development/SimpleDropDownEffects" class="reference-link">SimpleDropDownEffects</a>
        <span> ❤︎ Created by</span>
        <a target="__blank" href="https://github.com/XBT1/" class="reference-link">XBT1</a>
      </p>
      <p>
        <span>For React version to see </span>
        <a
          target="__blank"
          href="https://github.com/XBT1/effect-dropdown-react"
          className="reference-link"
        >
          effect-dropdown-react
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data () {
      return {}
    },
  }
</script>

<style lang="stylus" scoped>
  dropdown-wrapper-height = 150px

  #app
    position: relative
    max-width: 1000px
    margin: 0 auto
    overflow: hidden

  header
    margin-top: 50px
    text-align: center

    .vue-logo
      width: 90px

    h1
      margin: 0
      font-size: 48px

    .description
      margin: 5px 0 12px
      color: #555

    .github-link
      position: absolute
      top: 25px
      right: 40px

  main
    padding: 40px 0 60px

  .dropdown-wrapper
    padding: 10px
    margin: 20px
    height: dropdown-wrapper-height

    &:nth-child(odd)
      .dropdown-desc
        float: left
        padding-right: 25px

    &:nth-child(even)
      .dropdown-desc
        float: right
        padding-left: 25px

    .dropdown-main
      text-align: center

      [class^=ion]
        display: inline-block
        width: 20px
        margin-right: 5px
        text-align: center
        font-size: 160%

    .dropdown-desc
      padding-top: 5px
      margin: 0
      width: 50%
      color: #aaa
      font-size: 18px
      line-height: 1.2
      font-weight: 300
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8)

      .source-link
        color: rgba(#999, 0.6)
        font-size: 14px

  footer
    padding: 10px 0 20px
    text-align: center
    color: #c3c8cd

    a
      color: #c3c8cd

    p
      margin: 0

  @media (max-width: 640px)
    header
      margin-top: 35px

      .vue-logo
        width: 70px

      h1
        font-size: 30px

    main
      padding-top: 10px

      .dropdown-wrapper
        margin: 20px 10px 60px
        height: auto

        .dropdown-desc
          float: none !important
          width: 100%
          padding: 0 !important

        .dropdown-main
          margin-top: 20px

</style>

<style lang="stylus">
  html
    height: 100%

  body
    margin: 0
    height: 100%
    color: #333
    font-size: 16px
    line-height: 1.5
    background: url("https://tympanus.net/Development/SimpleDropDownEffects/images/grid_DominikKiss_SubtlePatterns.jpg")
</style>
