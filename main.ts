input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
})
joystick.setJoystick(
AnalogPin.P0,
AnalogPin.P1,
DigitalPin.P2
)
radio.setGroup(7)
basic.forever(function () {
    radio.sendNumber(pins.map(
    joystick.getJoystickValue(joystick.valueType.X),
    0,
    1023,
    0,
    4
    ))
    radio.sendNumber(pins.map(
    joystick.getJoystickValue(joystick.valueType.Y),
    0,
    1023,
    0,
    4
    ))
})
