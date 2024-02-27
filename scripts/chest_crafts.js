// 
// Add recipes for Sophisticated Storage chests from Woodworks
//

var chests = [
    'woodworks:oak_chest',
    'woodworks:spruce_chest',
    'woodworks:birch_chest',
    'woodworks:jungle_chest',
    'woodworks:acacia_chest',
    'woodworks:dark_oak_chest',
    'woodworks:mangrove_chest',
    'woodworks:crimson_chest',
    'woodworks:warped_chest',]

ServerEvents.recipes(event => {
    chests.forEach((chest) => {
        event.shapeless(Item.of(
            'sophisticatedstorage:chest',
            { woodType: chest.replace('woodworks:', '').replace('_chest', '') }
        ),
            [chest, 'minecraft:redstone_torch']
        )
    })
})