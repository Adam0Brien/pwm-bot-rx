radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        serial.writeLine("Connected")
    } else {
        servos.P1.stop()
    }
})
radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "left") {
        led.toggle(0, 0)
        led.toggle(0, 0)
        if (value > 20 || value < -20) {
            servos.P1.setAngle(value)
            led.plot(0, 0)
            led.unplot(4, 0)
        } else {
            servos.P1.stop()
        }
    } else if (name == "rightf") {
        led.toggle(1, 0)
        if (value < 20) {
            servos.P0.stop()
        } else {
            servos.P0.setAngle(value)
            led.plot(4, 0)
            led.unplot(0, 0)
        }
    } else if (name == "rightr") {
        servos.P0.setAngle(0 - value)
        led.plot(4, 0)
        led.unplot(0, 0)
    } else if (name == "move") {
    	
    } else {
    	
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
radio.setGroup(2)
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
