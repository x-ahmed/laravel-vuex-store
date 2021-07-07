export const pushNotification = ({commit}, notification) => {
    commit('PUSH_NOTIFICATION', notification)
}

export const shiftNotification = ({commit}, notificationId) => {
    commit('SHIFT_NOTIFICATION', notificationId)
}