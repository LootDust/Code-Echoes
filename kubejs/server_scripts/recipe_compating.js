ServerEvents.recipes(event => { // 机械动力-压块塑形/自动打包
    // 奥术源质打包
    event.recipes.create.compacting("arcaneessenceblock:arcane_essence_block", "9x irons_spellbooks:arcane_essence");

    // 石油化工
    event.recipes.create.compacting([Fluid.of('thermal:crude_oil', 500), 'minecraft:sand'], 'thermal:oil_sand');
    event.recipes.create.compacting([Fluid.of('thermal:crude_oil', 500), 'minecraft:red_sand'], 'thermal:oil_red_sand');
    event.recipes.create.compacting('thermal:tar', Fluid.of('thermal:heavy_oil', 90));
})