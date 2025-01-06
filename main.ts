enum SpriteKindLegacy {
    Player,
    Projectile,
    Enemy,
    Food,
    Object
}
namespace SpriteKind {
    export const ACE = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStart == true) {
        greenLaser = sprites.createProjectileFromSprite(assets.image`GreenLaser`, tie, 0, -140)
        greenLaser.startEffect(effects.coolRadial, 100)
        music.playTone(932, music.beat(BeatFraction.Sixteenth))
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        music.playTone(784, music.beat(BeatFraction.Sixteenth))
    }
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.destroy(effects.disintegrate)
    otherSprite.startEffect(effects.fire, 200)
    sprite.startEffect(effects.fire, 200)
    pause(500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKindLegacy.Projectile, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(1)
})
let textBaron: TextSprite = null
let textDoubleAce: TextSprite = null
let textAce: TextSprite = null
let projectile: Sprite = null
let EnemyFire: Sprite = null
let greenLaser: Sprite = null
let tie: Sprite = null
let gameStart = false
gameStart = false
effects.blizzard.startScreenEffect()
music.beamUp.play()
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbdddd11111111111ddddbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbdd11111111dddddd111111111ddbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbd1111dddbbcccccfffcccccbbdd11111dbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbd111ddbbcffffffffffffffffffffccbdd1111dbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbd111dbcffffffffffffffffffffffffffffcbbd1111bcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffcbd11dbcffffffffffffffcccccccccfffffffffffcbd1111bcffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffcbd11dbcffffffffcccc1ffb111c1111cffffccffffffffcb1111bcffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffcd11dbcfffffffcb111bc1bcd11cccc1bcccccc1cfffffffffcb111dbfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffcb11dbcfffffffcb1bcc1ccb1b1b1ccc1bcccccccb1fc1ccffffffcd111dcfffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffcd11bcffffffc1ccb1cfc1cccb1bc1cc1bcccccc1cc1c1bb111fffffcbd11dcffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffbd1dbffffffcb1111b1cc1bccccbcccccccccccccb1bb1bb1bcb1bfffffcd111bfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcb11dcfffffffb1cfc1dd111ccccffffccccfffcccccc1c1d1bcccc1bffffffb111dcfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffcd11bfffffc1bcb1ccc1dbccfffffffffccccffffffffffccbd1ccc1bb1cfffffcd11dcffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffcd11bffffc111bcb1b11bcfffffffffffcccccccfffffffffffcb1bccc1bcccffffcd11dcfffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffcd1dcfffff1bb1ccb11bcfffffffccccccccc1c11ccccccfffffffcccc1dcc11bcfffcb11dcffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffcd1dcfffffcccc1cccccfffffffffccc11111111111111ccfffffffffccb1ccc1bbfffffb11dcfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffcd1dcfffffccccb1cccfffffffffff111111111111111111cfffffffffffcb1b1cbb1fffffb11dcffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffd1dcffffccccccbbcffffffffffff11111111111111111111cffffffffffffc1bbbb1cfffffb11dcfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffb1dcfffff1bccccccffffffffffff1d11111111111111111111cffffffffffffcbd1bb1cfffffb11dcffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffb11cfffffc1bccccfffffffffffff111111111111111111111111fffffffffffffc1b1bb11cfffcd11bffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffcd1bffff11cb1cccfffffffffffffc111111111111111111111111cffffffffffffffcc1bcbbcfffcd11cfffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffcd1bffffb1bcc1ccfffffffffffffc11111111111111111111111111ccffffffffffffcccdccccffffc11dcffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffb1dcfffcc1111dcffffffffffffcc1111111111111111111111111111cccfffffffffffcc1bccc1cfffb11dffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffc11cffff1bcccbcfffffffffffcccc1111111111111111111111111111cccccfffffffffffcbcccb1cfffd11bfffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffcd1bfffffc1bccfffffffffffcccccc1111111111111111111111111111ccccccfffffffffffccc1bb1fffcd1dcffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffb1dcffffccc11cfffccfffffccccccc1111111111111111111111111111cccccccffffffccfffc111111fffb11bffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcd1cffffccb11bfffccccfffcccccccc1111111111111111111111111111cccccccccfffcccfffcccbbbbfffcd11cfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffb1dffffb1bbccfffccccccfccccccccc1111111111111111111111111111ccccccccccfcccccfffccfccccfffc11dfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffcd1cffffcb1bccfffccccccccccccccc11111111111111111111111111111cccccccccccccccccfffccccc1cfffd11cffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffb1bfffffccb1bfffcccccccccccccccc11c11111ccfc111111ccccc111111ccccccccccccccccccffcccccb1cffc11dffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcd1cffffccb1bccfccccccccccccccccc11c111ccfffff11111fffffc11111cccccccccccccccccccfccbbbb1bfffd11cfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffb1dfffffcbbcccccccccccccccccccccc11c111fffffffc111cffffffc1c11ccccccccccccccccccccccc1111dcffc11bfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffd1cfffcbbbccccccccccccccccccfccccc1c11cfffffff1111cffffffc1c11ccccccfcccccccccccccccccccccffffd1dcffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffc1dfffcbd11dccccccccccccccccfffcccc1c11cffffffc1111cffffffc1c11cccccfffccccccccccccccccccccffffb11bffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffb1bfffbb1f1dcffccccccccccccfffffccccc11cffffffc11111cfffff11cccccccfffffccccccccccccffcc111cfffcd1dffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffd1cfffb1cc1bffccccccccccccfffffffcccc111fffffc1111111cfffc11ccccccffffffccccccccccccfffb1bb1bfffd1dcfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffc1dffffb1cb1cffcccccccccccfffffffffcc11111cccc111ccc111cfc1111ccccffffffffccccccccccccffc1cfc1cffb11bfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffb1bffffcb11bffccccccccccccffffffffffc111111111111fffc1111111111cfffffffffffcccccccccccffc1bcc1cffcd1bfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffd1cfffcccbbcffcccccccccccffffffffffc111111111111cfffc1111111111cfffffffffffccccccccccccffb1c1bcfffd1dcffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffcddcfff11cccfffcccccccccccfffffffffff111111111111cffff111111111cfffffffffffffcccccccccccffc11bcffffb11cffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffc1dffffb11ccffcccccccccccffffffffffffc11111111111cccff1111111ccffffffffffffffcccccccccccffcbbbbcfffc11bffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffb1bffffb1b1cffcccccccccccfffffffffffffccccfc11111c11cc1111cfffffffffffffffffffccccccccccfffc1111cffc11bffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffb1cffffb1b1cffffcccccccccffffffffffffffffcffc111111111111cffffffffffffffffffffcc1111ccfffffb1bccffffd1dffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffd1cffffb1bbcffffffccccccccffffffffffffffc1fff111111111111fffffffffffffffffffffc11111cffffffc1111cfffb1dcfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffcddcfffcbbbbfffffffcccc11111ffffffffffffc11cffc1111111111cff11fffffffffffffffffc111111ffffffcccc1bfffb1dcfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffcddffffcccbbfffffffccc111111cffffffffffff11cfffcc11c1c1c1ff111cffffffffffffffcc111111cfffffffcc1dcfffc11cfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffc1dffffcccccfffffffccc1111111cccfffffffffc11fff1f11c1c1c1ff111fffffffffffcccccc111111ffffffffc1bcffffc11cfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffc1bffffcccccfffffffccc1111111ccccccffffffc11cffccbbcccccbffc1cfffffffccccccccc111111cffffffff1bcccfffc11bfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffc1bffffcccccfffffffcc11111111cccccccccfffc11cffffcccfffffffc1cffffccccccccccc11111111ccffffffcccccfffc11bfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffb1bffffcccccfffffffc1111111111cccccccccffc11cffffffffffffffc1cffffcccccccccc11111111111cfffffcccccfffc11bfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffb1bffffcccccfffffffc11c11111111cccccccfffc111f11f1f11f11ffc11cffffcccccccc111111cc11111cfffffcccccfffc11bfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffb1bffffcccccfffffffc11cccc111111ccccccfffc111cc1c1c11c11cf111cffffccccccc11111ccff11111ffffffcccccfffc11bfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffb1bffffcccccffffffccc111c11c111111ccccffffc111111111111111111fffffcccccc11111fc1111c1cfffffffcccccfffc11bfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffb1bffffcccccffffffccccc111cc1111111cccffffffc111111111111111cfffffcccc1111111c11ccccccfffffffcccccfffc11bfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffb1bffffcccccfffffffccccccccc111111111ccfffffff111111111111cfffffffc11111111111ccccccccfffffffcccccfffc11bfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffc1bffffcccccfffffffccccccccccc111111111cffffffc1111111111cffffffc111111111ccccccccccccfffffffcccccfffc11bfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffc1bffffcccccfffffffccccccccccccc111111111cfffffcc1111111cfffffc1111111111cccccccccccccfffffffcccccfffc11bfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffcddffffcccccfffffffcccccccccccfffc111111111cffffffcccccfffffc111111111ccffccccccccccccfffffffcccccfffc11cfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffcddffffcccccfffffffcccccccccfffffffc111111111cffffffffffffc111111111cffffffffcccccccccfffffffccccffffb11cfffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffd1cfffcccccfffffffccccccffffffffffffc111111111ccfffffffc111111111cffffffffffffccccccfffffffcccccffffb1dcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffb1cfffcccccfffffffccccccffffffffffffffc11111111111cfcc111111111ccfffffffffffffccccccfffffffcccccffffd1dffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffb1cffffcccccffffcccccccccfffffffffffffffcc1111111111111111111cffffffffffffffffccccccccfffffcccccfffcd1bffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffc1bffffcccccffcccccccccccffffffffffffffffccc111111111111111cccffffffffffffffffccccccccccfffcccccfffc11bffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffcddffffcccccffcccccccccccfffffffffffffffcccff1111111111111cccccffffffffffffffcccccccccccffcccccffffb11cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffd1cfffcccccfffcccccccccccfffffffffffffcccccc1111111111111ccccccfffffffffffffcccccccccccffcccccffffb1dcffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffb1bffffcccccffcccccccccccffffffffffffcccc1111111111111111111cccffffffffffffccccccccccccffcccccffffd1dfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffc1dffffcccccffccccccccccccffffffffffcc1111111111ccccc111111111ccfffffffffffcccccccccccffccccccfffc11bfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffcddcfffccccccffcccccccccccfffffffffc1111111111ccfffffcc1111111111cffffffffccccccccccccffcccccffffb1dcfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffb1cffffcccccffccccccccccccfffffcc1111111111ccfffffffffc11111111111ccffffccccccccccccfffcccccffffd1dffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffc1dffffcccccfffc11cccccccccffc11111111111cccffffffffffccc11111111111ccccccccccccccccffcccccffffc11bffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffddcffffcccccccc11111ccccccc11111111111cccccffffffffffcccccc111111111111111cccc111cccccccccffffb1dcffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffb1bffffcccccccc1111111cc11111111111ccccccccfffffffffffcccccccc11111111111111111111ccccccccfffcd1bfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffc1dcfffcccccccc111111111111111111ccccccccccfffffffffffccccccccccc11111111111111111cccccccffffb11cfffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffb1bffffcccccccc111111111111111cccccccccccffffffffffffccccccccccccc1111111111111cccccccccfffcd1dffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffc1dcfffcccccccc1ccc11111111ccccccccccccccffffffffffffcccccccccccccccc11cccc11ccffccccccffffb11cffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffb1bffffccccccc1cc11111111cccccccccccccccfffffffffffffcccccccccccccccc11cff11cfffcccccffffcd1dfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffc1dcffffcccccc1111cc11ccccccccccccccccccfffffffffffffccccccccccccccccc111c11cffccccccffffb11cfffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffb1bffffcccccc1111cc1cffcccccccccccccccffffffffffffffccccccccccccccccff1111cffccccccffffc11bffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffcd1cffffccccccc1111cffffcccccc1111111111ff1111111111ccc111111cccccfffffc1cffcccccccffffd11cffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffc1dcffffcccccccccfffffffccccc1111111111ff1111111111ccc1111111cccffffffffffcccccccffffb11bfffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffb1bffffcccccccfffffffffffccc1111111111cc1111111111ccc1111111ccffffffffffcccccccffffcd1dcfffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffcd1cffffcccccccffffffffffffccccccccccccc11cccccc11ccccccc111fffffffffffcccccccffffcd11cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffc1dcffffcccccccfffffffffffffccccccccccc11cccccc11ccccccc111ffffffffffcccccccfffffb11bfffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffb1dcffffcccccccfffffffffff1111111111cc11cc11cc11ccccccf111fffffffffcccccccfffffb11bffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffd1bfffffccccccccfffffffffd111111111cc11cc11cc11cccffff111ffffffffcccccccfffffc11dcffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffcd1bfffffccccccccffffffff1111111111cc11cc11cc11ccfffff111fffffffcccccccfffffcd1dcfffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffcd1bfffffccccccccffffffffffffff111cc11cccccc11ccfffff111fffffccccccccfffffcd11cffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffcd1bfffffcccccccccffffffffffff111cc11cccccc11cccffff111fffcccccccccfffffcd11cfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffcd1bffffffcccccccccffffffffff111cc1111111111ccc1111111111ccccccccfffffcd11bffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffcd1bcfffffccccccccccc1111111111cc1111111111ccc1111111111ccccccffffffcd11cfffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffcd1dcffffffccccccccc1111111111ff1111111111cff1111111111cccccffffffb11dcffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcd1dcffffffccccccccccccccfffffffccccffffffffcccccccccccccffffffcb11dcfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffb11bcffffffccccccccccccccccfffccccffffccccccccccccccccffffffcd11bcffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffbd1dcfffffffcccccccccccccccccccccccccccccccccccccccffffffcb111bffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffcd11bcfffffffccccccccccccccccccccccccccccccccccffffffffcd11dcfffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffbd1dbcffffffffccccccccccccccccccccccccccccfffffffffcb111bcffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffcb11dbcffffffffffcccccccccccccccccccccffffffffffcbd11dcffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffcd11dbcffffffffffffffccccccccfffffffffffffffcb111dcffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcd11dbcffffffffffffffffffffffffffffffffcbd111dbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcb111dbccfffffffffffffffffffffffffcbdd111dcffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbd111ddbcccfffffffffffffffccbbd1111dbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbdd1111dddbbbccccbbbbdd11111ddbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbddd111111111111111dddbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
pause(5000)
gameStart = true
game.splash("JRS: THE GAME", "ALL GUTS, NO SHIELDS")
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
effects.blizzard.endScreenEffect()
let xwing = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 1 8 8 1 1 . . . . . 
    . 1 2 1 1 1 1 8 8 1 1 1 1 2 1 . 
    . 1 2 1 1 1 1 1 1 1 1 1 1 2 1 . 
    . 1 2 1 1 1 1 f f 1 1 1 1 2 1 . 
    . 1 2 1 1 1 1 f f 1 1 1 1 2 1 . 
    . 1 . . . 1 1 f f 1 1 . . . 1 . 
    . 1 . . . . 1 f f 1 . . . . 1 . 
    . 1 . . . . 1 1 1 1 . . . . 1 . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    `
let projectile2 = assets.image`RedLaser`
tie = sprites.create(assets.image`Tie Fighter`, SpriteKindLegacy.Player)
tie.setFlag(SpriteFlag.StayInScreen, true)
tie.bottom = 120
controller.moveSprite(tie, 100, 100)
info.setLife(1)
effects.starField.startScreenEffect()
game.onUpdateInterval(2000, function () {
    EnemyFire = sprites.createProjectileFromSprite(projectile2, projectile, 0, 100)
    EnemyFire.setKind(SpriteKindLegacy.Enemy)
})
forever(function () {
    for (let index = 0; index < 2; index++) {
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Double))
        music.playTone(587, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 2; index++) {
            music.playTone(523, music.beat(BeatFraction.Eighth))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(494, music.beat(BeatFraction.Eighth))
            music.playTone(494, music.beat(BeatFraction.Quarter))
            music.playTone(440, music.beat(BeatFraction.Eighth))
            music.playTone(440, music.beat(BeatFraction.Quarter))
            music.playTone(784, music.beat(BeatFraction.Double))
            music.playTone(587, music.beat(BeatFraction.Whole))
        }
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Eighth))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Double))
    }
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Double))
})
forever(function () {
    if (info.score() == 25) {
        textAce = textsprite.create("You're an ACE!")
        textAce.x = 80
        textAce.y = 20
        pause(2000)
        textAce.destroy(effects.ashes, 100)
    }
    if (info.score() == 50) {
        textDoubleAce = textsprite.create("You're a DOUBLE ACE!")
        textDoubleAce.x = 80
        textDoubleAce.y = 20
        pause(2000)
        textDoubleAce.destroy(effects.ashes, 100)
    }
    if (info.score() == 100) {
        textBaron = textsprite.create("You're a BARON!")
        textBaron.x = 80
        textBaron.y = 20
        pause(2000)
        textBaron.destroy(effects.ashes, 100)
    }
})
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(xwing, randint(-20, 20), 75)
    projectile.setKind(SpriteKindLegacy.Enemy)
    projectile.x = randint(10, 150)
})
