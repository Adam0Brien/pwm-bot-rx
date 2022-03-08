radio.onReceivedValueDeprecated(function (name, value) {
    led.toggle(2, 4)
    basic.pause(100)
    led.toggle(2, 4)
    basic.pause(100)
    if (name == "left") {
        led.toggle(0, 0)
        led.toggle(0, 0)
        if (value > 20 || value < -20) {
            DFRobotMaqueenPlus.servoRun(Servos.S1, value)
            led.plot(0, 0)
            led.unplot(4, 0)
        }
    }
    if (name == "right") {
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
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 125)
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 125)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    # . . . .
    `)
DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
servos.P0.setAngle(90)
servos.P1.setAngle(90)
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
})
control.inBackground(function () {
	
})
