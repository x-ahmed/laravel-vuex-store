<template>
  <div
      class="alert alert-dismissible fade show"
      :class="`alert-${notification.type}`"
      role="alert"
  >
    <strong>{{ notificationIntro }}</strong> {{ notification.message }}
    <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click.stop="removeNotification"
    ></button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Notification",
  props: {
    notification: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      timeout: null,
    }
  },
  computed: {
    notificationIntro() {
      return this.notification.type === 'success'? 'Congrats': 'Oops'
    }
  },
  methods: {
    ...mapActions(['shiftNotification']),
    removeNotification() {
      this.shiftNotification(this.notification.id)
      clearTimeout(this.timeout)
    },
  },
  created() {
    this.timeout = setTimeout(() => {
      this.shiftNotification(this.notification.id)
    }, 3000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
}
</script>

<style scoped>

</style>