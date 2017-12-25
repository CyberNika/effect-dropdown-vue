<template>
  <div id="app">
    <header>
      <h1>
        effect-dropdown
        <iframe
          class="gh-star"
          scrolling="0"
          width="170px"
          height="20px"
          src="https://ghbtns.com/github-btn.html?user=XBT1&repo=effect-dropdown&type=star&count=true" frameborder="0" >
        </iframe>
      </h1>

      <p>
        <span class="description">Simple effects for Dropdown based on Vue.js</span>
      </p>
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
          randomAngle 效果，折叠时具有些许间隔，激活时选项之间间隔 5px，每个选项具有随机的角度旋转和偏移，以及不同的 animation-delay
        </p>

        <div class="dropdown-main">
          <effect-dropdown label="Label" active-color="#4d8c9d" effect="randomAngle">
            <effect-dropdown-item>Money</effect-dropdown-item>
            <effect-dropdown-item>Bear</effect-dropdown-item>
            <effect-dropdown-item>Money1</effect-dropdown-item>
            <effect-dropdown-item>Bear1</effect-dropdown-item>
          </effect-dropdown>
        </div>
      </div>

      <div class="dropdown-wrapper">
        <p class="dropdown-desc">
          camber 效果，折叠时具有些许间隔，激活时选项之间间隔 5px，依次排列组成圆弧状，并有不同的 animation-delay
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
    </main>
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

  main
    padding: 30px 0 60px

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
