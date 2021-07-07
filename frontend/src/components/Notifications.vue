<template>
  <div class="notification-list" v-show="notificationsLength">
    <notification
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
    />
  </div>
</template>

<script>
import Notification from "./Notification";
import {mapGetters} from "vuex";
export default {
  name: "Notifications",
  components: {Notification},
  computed: mapGetters(['notifications', 'notificationsLength']),
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