function analizaContenedor () {
    if (botellas > 2 && botellas <= 4) {
        basic.pause(500)
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.clearScreen()
        }
        basic.clearScreen()
    } else if (botellas == 5) {
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.clearScreen()
        }
        basic.showString("Full." + "Cont." + "Pres." + "Rst")
        basic.pause(500)
        music.playMelody("C C - C C - C C ", 120)
        while (true) {
            basic.showString("Full." + "Cont." + "Pres." + "Rst")
            botellas = 0
        }
    }
}
input.onButtonPressed(Button.A, function () {
    registraBotellas()
    analizaContenedor()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B:" + botellas)
})
function registraBotellas () {
    if (input.lightLevel() > 100) {
        botellas += 1
        basic.showString("B:" + botellas)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    } else {
        botellas += 0
        basic.showString("B:" + botellas)
        basic.clearScreen()
    }
}
let botellas = 0
botellas = 0
basic.forever(function () {
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.clearScreen()
})
