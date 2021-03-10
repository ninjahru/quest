namespace SpriteKind {
    export const portal = SpriteKind.create()
    export const cloud = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    quest1,
    [img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        a a a a a a a a a a a a a a a a 
        a 5 a a 5 a a a a a a a 5 a a 5 
        a a 5 a 5 a a a 5 a a a 5 a 5 5 
        . a 5 a 5 a a a 5 a a 5 5 a 5 . 
        . . . 5 5 a a 5 a a a a 5 5 5 . 
        . 5 5 . a a a 5 a a a a . 5 . . 
        5 5 . . 5 . . 5 . . 5 . . 5 5 . 
        5 . . . 5 . . 5 . . 5 . . . 5 . 
        5 . . . 5 . . 5 . . 5 . . . 5 5 
        `,img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        . a a a a a a a a a a a a a a . 
        . . . a a a a a a a a a a a . . 
        . . . . a a a a a a a a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
function IntroDialog () {
    pause(100)
    quest1.say("Wow", 5000)
    pause(1000)
    quest1.say("what a strange ...", 5000)
    pause(1000)
    quest1.say("Planet !", 5000)
    pause(2000)
    quest1.say("Oops Battery low !", 5000)
    pause(2000)
    quest1.say("I NEED JEWELS", 2000)
    pause(2000)
    quest1.say("Help me Find Them !", 2000)
}
function clouds () {
    cloud1 = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 1 1 1 . . . 
        . . . . . . . 1 1 1 1 1 1 1 . . 
        . . . . . . 1 1 1 1 1 1 1 1 . . 
        . . . . . . . 1 1 1 1 1 1 1 . . 
        . . . . . . . . . 1 1 1 1 1 . . 
        . . . . . . . . . . 1 1 1 1 . . 
        . . . . . . . . . . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . 1 1 1 . . . . . 1 1 1 . . . 
        . 1 1 1 1 1 . 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 . 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . 1 1 1 . . . . . 1 1 1 . . . 
        . 1 1 1 1 1 . . 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 . . 1 1 1 1 1 . . 
        . . 1 1 1 1 1 . . 1 1 1 1 . . . 
        . 1 1 1 1 1 1 . . 1 1 1 . . . . 
        . 1 1 1 1 1 1 . . . 1 1 . . . . 
        . 1 1 1 1 1 1 1 . . . . . . . . 
        . . . 1 1 1 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . . . . . . 
        . 1 1 1 1 1 1 . . . . . . . . . 
        . 1 1 1 1 1 1 . . . . . . . . . 
        . 1 1 1 1 1 1 1 . . . . . . . . 
        . . . 1 1 1 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
    projectile = sprites.createProjectileFromSide(cloud1[randint(0, cloud1.length - 1)], -10, 0)
    projectile.z = -10
    projectile.setFlag(SpriteFlag.Ghost, true)
    projectile.y = randint(0, scene.screenHeight()) * 1
}
let projectile: Sprite = null
let cloud1: Image[] = []
let quest1: Sprite = null
game.setDialogFrame(img`
    5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 
    `)
game.showLongText("Quest The Alien must Find 72 jewels to Build His Quantum Computer , Help Quest !!! The mission depends on YOU !", DialogLayout.Center)
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..................................................5555555555555.................................................................................................
    ................................................55555555555555555...............................................................................................
    ..............................................555555555555555555555.............................................................................................
    ............................................5555555555555555555555555...........................................................................................
    ...........................................555555555555555555555555555..........................................................................................
    ..........................................55555555555555555555555555555.........................................................................................
    .........................................5555555555555555555555555555555........................................................................................
    ........................................555555555555555555555555555555555.......................................................................................
    ........................................555555555555555555555555555555555.......................................................................................
    .......................................55555555555555555555555555555555555......................................................................................
    .......................................55555555555555555555555555555555555......................................................................................
    ......................................5555555555555555555555555555555555555.....................................................................................
    ......................................5555555555555555555555555555555555555.....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    .....................................555555555555555555555555555555555555555....................................................................................
    ......................................5555555555555555555555555555555555555.....................................................................................
    ......................................5555555555555555555555555555555555555.....................................................................................
    .......................................55555555555555555555555555555555555......................................................................................
    .......................................55555555555555555555555555555555555......................................................................................
    ........................................555555555555555555555555555555555.......................................................................................
    ........................................555555555555555555555555555555555.......................................................................................
    .........................................5555555555555555555555555555555........................................................................................
    ..........................................55555555555555555555555555555.........................................................................................
    ...........................................555555555555555555555555555..........................................................................................
    ............................................5555555555555555555555555...........................................................................................
    ..............................................555555555555555555555.............................................................................................
    ................................................55555555555555555...............................................................................................
    ..................................................5555555555555.................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
quest1 = sprites.create(assets.image`quest`, SpriteKind.Player)
quest1.setPosition(0, 0)
pause(1000)
quest1.setPosition(41, 35)
pause(1000)
quest1.setPosition(64, 77)
pause(1000)
quest1.setPosition(64, 77)
pause(100)
quest1.setPosition(70, 110)
quest1.startEffect(effects.fire)
music.playMelody("C G A F D A E C ", 82)
IntroDialog()
controller.moveSprite(quest1)
tiles.setTilemap(tilemap`level3`)
scene.cameraFollowSprite(quest1)
game.onUpdateInterval(500, function () {
    clouds()
})
