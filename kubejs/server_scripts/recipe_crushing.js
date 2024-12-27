ServerEvents.recipes(event => {
    event.recipes.create.crushing(Item.of('thermal:sulfur').withChance(0.65), 'biomesoplenty:brimstone');
})