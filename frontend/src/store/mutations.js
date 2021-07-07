export const PUSH_NOTIFICATION = (state, notification) => state.notifications.unshift({
    ...notification,
    id: Math.floor(Math.random() * 1000000).toString(36) + Date.now().toString(36)
})

export const SHIFT_NOTIFICATION = (state, id) => state.notifications = state.notifications.filter(notification => notification.id !== id)