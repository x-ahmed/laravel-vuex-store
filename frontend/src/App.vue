<template>
  <div id="app">
    <Header/>
    <div class="container-sm">
      <router-view></router-view>
    </div>
    <Notifications />
  </div>
</template>

<script>
import Header from "./components/Header";
import Notifications from "./components/Notifications";
export default {
  name: 'App',
  components: {
    Notifications,
    Header
  }
}
</script>
