function updateTime() {
    const dateAndTime = new Date()

    document.getElementById("dateMonth").textContent = dateAndTime.getDate()
    document.getElementById("localTime").textContent = dateAndTime.getHours() + ":" + dateAndTime.getMinutes()
}

updateTime()