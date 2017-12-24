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
      <effect-dropdown label="Label">
        <effect-dropdown-item>Money</effect-dropdown-item>
        <effect-dropdown-item>Bear</effect-dropdown-item>
        <effect-dropdown-item>Money1</effect-dropdown-item>
        <effect-dropdown-item>Bear1</effect-dropdown-item>
      </effect-dropdown>
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
  #app
    max-width: 1000px
    margin: 0 auto
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
