let index = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 9; index++) {
        index = 1
        basic.showNumber(index)
        for (let index2 = 0; index2 < 4; index2++) {
            index += 2
            basic.showNumber(index)
        }
        if (index == 9) {
            basic.showNumber(index)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    index = 2
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(index * 2)
    }
})
basic.forever(function () {
	
})
