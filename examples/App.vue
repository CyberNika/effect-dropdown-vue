<template>
  <div id="app">
    <header>
      <img data-v-ed16f314="" src="https://vuejs.org/images/logo.png" alt="Vue.js" class="vue-logo">

      <h1>EffectDropdown</h1>

      <p class="description">Simple effects for Dropdown based on Vue.js.</p>

      <a target="__blank" href="https://github.com/XBT1/effect-dropdown" class="github-link">
        <img src="https://img.shields.io/github/stars/XBT1/effect-dropdown.svg?style=for-the-badage&amp;label=Stars" alt="GitHub Stars">
      </a>
    </header>

    <main>
      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          默认效果，折叠时具有些许间隔，激活时选项之间间隔 5px
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Label">
            <effect-dropdown-item>Money</effect-dropdown-item>
            <effect-dropdown-item>Bear</effect-dropdown-item>
            <effect-dropdown-item>Money1</effect-dropdown-item>
            <effect-dropdown-item>Bear1</effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>

      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          random 效果，折叠时具有些许间隔，激活时选项之间间隔 5px，每个选项具有随机的角度旋转和偏移，以及不同的 animation-delay
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Label" active-color="#4d8c9d" effect="random">
            <effect-dropdown-item>Money</effect-dropdown-item>
            <effect-dropdown-item>Bear</effect-dropdown-item>
            <effect-dropdown-item>Money1</effect-dropdown-item>
            <effect-dropdown-item>Bear1</effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>

      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          camber 效果，折叠时具有些许间隔，激活时选项之间间隔 5px，依次排列组成圆弧状，并有不同的 animation-delay。
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Label" active-color="#97d1bc" effect="camber">
            <effect-dropdown-item>Money</effect-dropdown-item>
            <effect-dropdown-item>Bear</effect-dropdown-item>
            <effect-dropdown-item>Money1</effect-dropdown-item>
            <effect-dropdown-item>Bear1</effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>


      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          raiseLabel 效果，折叠时具有些许间隔，激活时选项之间没有间隔，依次排列。label 被点击时会有收缩的 3D 效果。
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Label" active-color="#f8b161" raise-label>
            <effect-dropdown-item>Money</effect-dropdown-item>
            <effect-dropdown-item>Bear</effect-dropdown-item>
            <effect-dropdown-item>Money1</effect-dropdown-item>
            <effect-dropdown-item>Bear1</effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>

      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          stagger 效果。默认不折叠，激活时从两侧滑入，且选项之间间隔 5px。
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Label" active-color="#c29ad2" effect="stagger">
            <effect-dropdown-item>Money</effect-dropdown-item>
            <effect-dropdown-item>Bear</effect-dropdown-item>
            <effect-dropdown-item>Money1</effect-dropdown-item>
            <effect-dropdown-item>Bear1</effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>

      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          fence 效果。默认不折叠，激活时依次从两侧滑入，且选项之间间隔 5px，具有不同的 animation-delay。
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Label" active-color="#e66b20" effect="fence">
            <effect-dropdown-item>Money</effect-dropdown-item>
            <effect-dropdown-item>Bear</effect-dropdown-item>
            <effect-dropdown-item>Money1</effect-dropdown-item>
            <effect-dropdown-item>Bear1</effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>
    </main>

    <footer>
      <p>
        Inspired by
        <a target="__blank" href="https://tympanus.net/Development/SimpleDropDownEffects" class="reference-link">SimpleDropDownEffects</a>
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
    max-width: 1000px
    margin: 0 auto

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

    .dropdown-desc
      padding-top: 5px
      margin: 0
      width: 50%
      color: #aaa
      font-size: 18px
      line-height: 1.2
      font-weight: 300
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8)

  footer
    padding: 10px 0
    text-align: center
    color: #c3c8cd

    a
      color: #c3c8cd
</style>

<style lang="stylus">
  html
    height: 100%

  body
    height: 100%
    color: #333
    font-size: 16px
    line-height: 1.5
    background: url("https://tympanus.net/Development/SimpleDropDownEffects/images/grid_DominikKiss_SubtlePatterns.jpg")
</style>
