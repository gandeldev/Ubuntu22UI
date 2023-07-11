class MenuBar {

    constructor() {
        this.favoriteAppsSection = document.querySelector('.favorite-apps-section')
        this.components = ""
    }

    createAppButton(appName) {
        return "<button class='app-" + appName + "-button app-button'>" +
            "<img src='/assets/icons/" + appName + ".png' alt='" + appName.toUpperCase() + " ICON' draggable='false'>" +
            "</button>"
    }

    createApps(appName) {
        this.components += this.createAppButton(appName)
    }

    addApp() {
        this.favoriteAppsSection.innerHTML = this.components
    }
}