input.onButtonPressed(Button.A, function () {
    if (Control) {
        Control = false
        basic.showString("OFF")
        basic.clearScreen()
    } else {
        basic.showString("ON")
        Control = true
        basic.clearScreen()
    }
})
let Control = false
Control = false
basic.showString("Micro:bit")
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    if (Control) {
        if (input.lightLevel() >= 128) {
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
