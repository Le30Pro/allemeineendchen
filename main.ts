input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 73), music.PlaybackMode.UntilDone)
    led.plot(4, 1)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Sad)
})
