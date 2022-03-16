radio.onReceivedValueDeprecated(function (name, value) {
    led.toggle(2, 4)
    led.toggle(2, 4)
    if (name == "right") {
        timerCounter = 0
        led.toggle(0, 0)
        led.toggle(0, 0)
        if (value > 20 || value < -20) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, value)
            led.plot(0, 0)
            led.unplot(4, 0)
        }
    } else if (name == "left") {
        timerCounter = 0
        led.toggle(0, 0)
        led.toggle(0, 0)
        if (value > 20 || value < -20) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, value)
            led.plot(0, 0)
            led.unplot(4, 0)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
    DFRobotMaqueenPlus.servoRun(Servos.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
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
    led.unplot(2, 2)
    timerCounter += 1
    if (timerCounter > 5) {
        DFRobotMaqueenPlus.servoRun(Servos.S1, 89)
        DFRobotMaqueenPlus.servoRun(Servos.S2, 89)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 90)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 90)
    }
})
