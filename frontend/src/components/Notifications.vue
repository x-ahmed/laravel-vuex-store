<template>
  <div class="notification-list">
    <notification/>
    <notification/>
    <notification/>
    <notification/>
  </div>
</template>

<script>
import Notification from "./Notification";
export default {
  name: "Notifications",
  components: {Notification}
}
</script>

<style scoped>
  .notification-list {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    width: 320px;
  }
</style>