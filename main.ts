input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("B")
    basic.showArrow(ArrowNames.South)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("G")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("H")
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("0")
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("D")
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("C")
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("E")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("F")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("A")
    basic.showArrow(ArrowNames.North)
})
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
radio.sendNumber(7)
