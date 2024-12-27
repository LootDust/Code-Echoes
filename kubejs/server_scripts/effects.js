ItemEvents.foodEaten("rainbowcompound:rainbow_apple", event => {
    let player = event.getEntity();
    if (player.isPlayer()) {
        player.potionEffects.add("minecraft:night_vision", 2400, 0);
        player.potionEffects.add("kubejs:invulnerable", 120, 0);
    }
    return;
})
