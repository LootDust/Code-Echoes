ServerEvents.recipes(event => {
    // 软质矿石磨粉
    event.recipes.create.milling(['thermal:apatite_dust', Item.of('thermal:apatite_dust').withChance(0.25)], 'thermal:apatite');
    event.recipes.create.milling(['thermal:cinnabar_dust', Item.of('thermal:cinnabar_dust').withChance(0.25)], 'thermal:cinnabar');
    event.recipes.create.milling(['thermal:niter_dust', Item.of('thermal:niter_dust').withChance(0.25)], 'thermal:niter');
    event.recipes.create.milling(['thermal:sulfur_dust', Item.of('thermal:sulfur_dust').withChance(0.25)], 'thermal:sulfur');

    // 肥料制作
    event.recipes.create.milling('4x thermal:compost', 'farmersdelight:organic_compost');
    event.recipes.create.milling('4x thermal:compost', 'nethersdelight:soul_compost');

})