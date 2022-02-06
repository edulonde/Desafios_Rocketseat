var launchDay = new Date('February 23, 2022 10:00:00').getTime()

var x = setInterval(function () {
    var now = new Date().getTime()
    var distance = launchDay - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (100 * 60)) / 1000)


    document.getElementById("campo_dias").textContent = days
    document.getElementById("relogio_horas").textContent = hours
    document.getElementById("relogio_minutos").textContent = minutes
    document.getElementById("relogio_segundos").textContent = seconds
    // console.log(days, " ",hours, " ", minutes, " ", seconds, " ")

    if (distance < 0) {
        clearInterval(x)
        document.getElementsByClassName("launch").innerHTML = "LANÇANDO !!!"
    }
}, 1000)

