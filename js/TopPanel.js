const notificationsButton = document.querySelector('.notifications-panel-button')
const notificationsContainer = document.querySelector('.notifications-container')

const currentAppButton = document.querySelector('.current-app-button')

const settingsButton = document.querySelector('.setting-button')

const disabledScreen = document.querySelector('.disabled-screen')

let notificationsArray = []

notificationsButton.addEventListener('click', () => {
    showPanel()
})

disabledScreen.addEventListener('click', () => {
    showPanel()
})

function showPanel() {
    notificationsContainer.classList.toggle('show-notifications')
    notificationsButton.classList.toggle('active')
    disabledScreen.classList.toggle('active')
    addHoverAction()
}

function addHoverAction() {
    currentAppButton.classList.toggle('hover-action-button')
    notificationsButton.classList.toggle('hover-action-button')
    settingsButton.classList.toggle('hover-action-button')
}

const noNotifications = "<div class='no-notifications-panel'><img src='/assets/icons/Notification-panel/no-notifications-icon.png' draggable='false' width='80px' height='80px'/><p class='subtitle-no-notifications'>No Notifications</p></div>"

const scrollPanelNotifications = document.querySelector('.scroll-section-panel')

function addNotifications() {
    if (notificationsArray.length == 0) {
        scrollPanelNotifications.innerHTML = noNotifications
    }
}

addNotifications()