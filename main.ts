scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    if (true) {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (true) {
        tiles.setCurrentTilemap(tilemap`level4`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        mySprite2 = sprites.create(img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `, SpriteKind.Player)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.gameOver(true)
    if (true) {
    	
    }
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.positionDirection(CollisionDirection.Left)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
scene.cameraFollowSprite(mySprite)
