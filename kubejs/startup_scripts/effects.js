StartupEvents.registry('mob_effect', event => {
    event.create('invulnerable')
        .color(0xecbb11)
        .beneficial()
        .effectTick((entity, lvl) => {
            if (entity.isPlayer()) {
                let duration = entity.getEffect("kubejs:invulnerable").getDuration();
                if (duration > 1 || duration == -1) {
                    entity.setInvulnerable(true);
                } else {
                    entity.setInvulnerable(false);
                }
            }
        });
})
