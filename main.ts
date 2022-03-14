radio.onReceivedValueDeprecated(function (name, value) {
    timerCounter = 0
    led.toggle(2, 4)
    basic.pause(100)
    led.toggle(2, 4)
    basic.pause(100)
    if (name == "right") {
        led.toggle(0, 0)
        led.toggle(0, 0)
        if (value > 20 || value < -20) {
            DFRobotMaqueenPlus.servoRun(Servos.S2, value)
            led.plot(0, 0)
            led.unplot(4, 0)
        }
    }
    if (name == "left") {
        led.toggle(0, 0)
        led.toggle(0, 0)
        if (value > 20 || value < -20) {
            DFRobotMaqueenPlus.servoRun(Servos.S1, value)
            led.plot(0, 0)
            led.unplot(4, 0)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.servoRun(Servos.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.servoRun(Servos.S1, 89)
})
let timerCounter = 0
timerCounter = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    # . . . .
    `)
radio.setGroup(1)
basic.showString("1 j ")
/**
 * heartbeat
 */
basic.forever(function () {
    led.plot(2, 2)
    basic.pause(100)
    led.unplot(2, 2)
    basic.pause(100)
    timerCounter += 1
    if (timerCounter > 5) {
        DFRobotMaqueenPlus.servoRun(Servos.S1, 89)
        DFRobotMaqueenPlus.servoRun(Servos.S2, 89)
    }
})
