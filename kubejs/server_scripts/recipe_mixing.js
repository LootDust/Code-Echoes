ServerEvents.recipes(event => { // 机械动力-混合搅拌
    // 火药
    event.recipes.create.mixing("4x minecraft:gunpowder", ["irons_spellbooks:arcane_essence", "3x minecraft:gunpowder"]);
    event.remove({ output: '#prma:small_ammunition_gunpowders' });
    event.remove({ output: '#prma:medium_ammunition_gunpowders' });
    event.remove({ output: '#prma:long_ammunition_gunpowders' });

    // 流体合成
    event.recipes.create.mixing(Fluid.of('the_bumblezone:sugar_water_still', 1000), [Fluid.water(1000), 'minecraft:sugar']);

    // 石油化工
    event.recipes.create.mixing([Fluid.of('thermal:light_oil', 200), Fluid.of('thermal:heavy_oil', 400), 'thermal:bitumen', Item.of('thermal:bitumen').withChance(0.2)],
        [Fluid.of('thermal:crude_oil', 800), Fluid.water(200)]).heated();

    // 资源富集
    event.recipes.create.mixing(['thermal:rich_slag', Item.of('thermal:rich_slag').withChance(0.4)], ['4x thermal:slag', Fluid.of('the_bumblezone:sugar_water_still', 100)]).heated();

    // 肥料制作
    event.recipes.create.mixing('thermal:phytogro', ['thermal:compost', 'thermal:rich_slag']);
})