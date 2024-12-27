/*
const $AbstractFurnaceBlock = Java.loadClass('net.minecraft.world.level.block.AbstractFurnaceBlock');
const $CampfireBlock = Java.loadClass('net.minecraft.world.level.block.CampfireBlock');

CreateHeatJS.registerHeatEvent((event) => {
    event.registerHeatLevel('campfire', 1, 0xFF8C00) // 营火
        .registerHeatSource('minecraft:campfire', 'minecraft:campfire[lit=true]', (level,pos,blockStack) => {
            if (blockStack.hasProperty($CampfireBlock.LIT)) {
                return blockStack.getValue($CampfireBlock.LIT).booleanValue();
            }
            return false
        });

    event.registerHeatLevel('stove', 1, 0xFF8C08) // 炉灶
        .registerHeatSource('farmersdelight:stove');

    event.registerHeatLevel('blast', 1, 0xFF9D11) // 高炉
        .registerHeatSource('minecraft:blast_furnace', 'minecraft:blast_furnace[lit=true,facing=south]', (level, pos, blockStack) => {
            if (blockStack.hasProperty($AbstractFurnaceBlock.LIT)) {
                return blockStack.getValue($AbstractFurnaceBlock.LIT).booleanValue();
            }
            return false
        });

    event.registerHeatLevel('blaze', 1, 0xFF8C00) // 火
        .registerHeatSource('minecraft:fire');

    event.registerHeatLevel('soul_blaze', 0xFF8C00) // 灵魂火
        .registerHeatSource('minecraft:soul_fire');
})
*/