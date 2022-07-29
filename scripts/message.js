const message = document.getElementById('message')
const dateMessage = new Date()
hourOfDay = dateMessage.getHours()
minutesOfDay = dateMessage.getMinutes()


if (hourOfDay >= 6 && hourOfDay < 12) {
    message.innerHTML = "Bom dia!"
} else if (hourOfDay >= 12 && hourOfDay < 18) {
    message.innerHTML = "Boa tarde!"
} else if (hourOfDay >= 18 && hourOfDay <= 23) {
    message.innerHTML = "Boa noite!"
} else {
    message.innerHTML = "Boa madrugada!"
}
message.style.animation = "animation: message 1s ease-in forwards"

