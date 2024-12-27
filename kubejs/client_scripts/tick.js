ClientEvents.tick(event => {
    const meleeKey = global.meleeSpecKey;
    const reloadKey = global.reloadSpecKey;
    const { player } = event;
    if (meleeKey.consumeClick()) {
        let gunId = player.getMainHandItem().nbt.getString("GunId");
        switch (gunId) {
            case "create_armorer:special_melee_wrench":
            case "create_armorer:special_melee_atomic":
                player.melee();
                break;
            default:
                break;
        }
    }
    if (reloadKey.consumeClick()) {
        let gunId = player.getMainHandItem().nbt.getString("GunId");
        let ammo = player.getMainHandItem().nbt.getInt("GunCurrentAmmoCount");
        switch (gunId) {
            case "create_armorer:special_melee_wrench":
            case "create_armorer:special_melee_atomic":
                break;
            default:
                if (ammo == 0) {
                    player.reload();
                }
                break;
        }
    }
})