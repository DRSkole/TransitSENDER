let lysstyrke = 0
basic.showString("SENDER LYS")
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    lysstyrke = input.lightLevel()
    radio.sendNumber(lysstyrke)
    basic.pause(1000)
})
