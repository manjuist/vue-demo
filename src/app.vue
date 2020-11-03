<template>
  <div id="app" class="red">{{message}}</div>
</template>

<script>
import routes from './routes'
export default {
  data(){
    return {
      message:'666',
      currentRoute: window.location.pathname,
    }
  },
  computed:{
    ViewComponent(){
      return routes[this.currentRoute]
    }
  },
  render(h){return h(this.ViewComponent)}
}
</script>

<style>
  .red {color: red}
</style>
