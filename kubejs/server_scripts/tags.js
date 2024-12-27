ServerEvents.tags('item', event => {
    event.add("forge:armors/chestplates", "#protection_pixel:chest");

    // 热辐射防护材料
    event.add("homeostatic:radiation_protection", "protection_pixel:reinforcedfiber");
    event.add("homeostatic:radiation_protection", "irons_spellbooks:magic_cloth");
    // 隔热盔甲
    // 防水盔甲
    event.add("homeostatic:waterproof_armor", "protection_pixel:closed_helmet")
    // 热辐射防护盔甲
    event.add("homeostatic:radiation_protected_armor", "aether:phoenix_helmet");                        // 天境-凤凰套装
    event.add("homeostatic:radiation_protected_armor", "aether:phoenix_chestplate");
    event.add("homeostatic:radiation_protected_armor", "aether:phoenix_leggings");
    event.add("homeostatic:radiation_protected_armor", "aether:phoenix_boots");
    event.add("homeostatic:radiation_protected_armor", "minecraft:netherite_helmet");                   // 原版-下界合金套装
    event.add("homeostatic:radiation_protected_armor", "minecraft:netherite_chestplate");
    event.add("homeostatic:radiation_protected_armor", "minecraft:netherite_leggings");
    event.add("homeostatic:radiation_protected_armor", "minecraft:netherite_boots");
    event.add("homeostatic:radiation_protected_armor", "irons_spellbooks:netherite_mage_helmet");       // 铁魔法-下界合金战斗法师套装
    event.add("homeostatic:radiation_protected_armor", "irons_spellbooks:netherite_mage_chestplate");
    event.add("homeostatic:radiation_protected_armor", "irons_spellbooks:netherite_mage_leggings");
    event.add("homeostatic:radiation_protected_armor", "irons_spellbooks:netherite_mage_boots");
    event.add("homeostatic:radiation_protected_armor", "aether:obsidian_helmet");                       // 天境-黑曜石套装
    event.add("homeostatic:radiation_protected_armor", "aether:obsidian_chestplate");
    event.add("homeostatic:radiation_protected_armor", "aether:obsidian_leggings");
    event.add("homeostatic:radiation_protected_armor", "aether:obsidian_boots");
    event.add("homeostatic:radiation_protected_armor", "aether:obsidian_helmet");                       // 天境-黑曜石套装
    event.add("homeostatic:radiation_protected_armor", "aether:obsidian_chestplate");
    event.add("homeostatic:radiation_protected_armor", "aether:obsidian_leggings");
    event.add("homeostatic:radiation_protected_armor", "aether:obsidian_boots");
    event.add("homeostatic:radiation_protected_armor", "rainbowcompound:obsidianite_helmet");           // 彩虹化合物-黑曜石合金套装
    event.add("homeostatic:radiation_protected_armor", "rainbowcompound:obsidianite_chestplate");
    event.add("homeostatic:radiation_protected_armor", "rainbowcompound:obsidianite_leggings");
    event.add("homeostatic:radiation_protected_armor", "rainbowcompound:obsidianite_boots");
    event.add("homeostatic:radiation_protected_armor", "rainbowcompound:rainbow_helmet");               // 彩虹化合物-彩虹套装
    event.add("homeostatic:radiation_protected_armor", "rainbowcompound:rainbow_chestplate");
    event.add("homeostatic:radiation_protected_armor", "rainbowcompound:rainbow_leggings");
    event.add("homeostatic:radiation_protected_armor", "rainbowcompound:rainbow_boots");
    event.add("homeostatic:radiation_protected_armor", "eeeabsmobs:ghost_warrior_helmet");               // EEEEAB生物-幽冥武士套装
    event.add("homeostatic:radiation_protected_armor", "eeeabsmobs:ghost_warrior_chestplate");
    event.add("homeostatic:radiation_protected_armor", "eeeabsmobs:ghost_warrior_leggings");
    event.add("homeostatic:radiation_protected_armor", "eeeabsmobs:ghost_warrior_boots");

    event.add("minecraft:stone_tool_materials", "biomeswevegone:rocky_stone");

    event.remove("minecraft:logs", "culturaldelights:avocado_log");
    event.remove("minecraft:logs", "culturaldelights:avocado_wood");
    event.remove("minecraft:logs", "regions_unexplored:alpha_log");
    event.remove("minecraft:logs", "#biomesoplenty:fir_logs");
    event.remove("minecraft:logs", "#biomesoplenty:pine_logs");
    event.remove("minecraft:logs", "#biomesoplenty:maple_logs");
    event.remove("minecraft:logs", "#biomesoplenty:redwood_logs");
    event.remove("minecraft:logs", "#biomesoplenty:mahogany_logs");
    event.remove("minecraft:logs", "#biomesoplenty:jacaranda_logs");
    event.remove("minecraft:logs", "#biomesoplenty:palm_logs");
    event.remove("minecraft:logs", "#biomesoplenty:willow_logs");
    event.remove("minecraft:logs", "#biomeswevegone:aspen_logs");
    event.remove("minecraft:logs", "#biomeswevegone:baobab_logs");
    event.remove("minecraft:logs", "#biomeswevegone:cika_logs");
    event.remove("minecraft:logs", "#biomeswevegone:cypress_logs");
    event.remove("minecraft:logs", "#biomeswevegone:ebony_logs");
    event.remove("minecraft:logs", "#biomeswevegone:fir_logs");
    event.remove("minecraft:logs", "#biomeswevegone:florus_logs");
    event.remove("minecraft:logs", "#biomeswevegone:holly_logs");
    event.remove("minecraft:logs", "#biomeswevegone:jacaranda_logs");
    event.remove("minecraft:logs", "#biomeswevegone:mahogany_logs");
    event.remove("minecraft:logs", "#biomeswevegone:maple_logs");
    event.remove("minecraft:logs", "#biomeswevegone:palm_logs");
    event.remove("minecraft:logs", "#biomeswevegone:palo_verde_logs");
    event.remove("minecraft:logs", "#biomeswevegone:pine_logs");
    event.remove("minecraft:logs", "#biomeswevegone:redwood_logs");
    event.remove("minecraft:logs", "#biomeswevegone:sakura_logs");
    event.remove("minecraft:logs", "#biomeswevegone:white_mangrove_logs");
    event.remove("minecraft:logs", "#biomeswevegone:willow_logs");
    event.remove("minecraft:logs", "#biomeswevegone:zelkova_logs");

    event.add("minecraft:logs_that_burn", "#culturaldelights:avocado_logs");
    event.add("minecraft:logs_that_burn", "#biomesoplenty:fir_logs");
    event.add("minecraft:logs_that_burn", "#biomesoplenty:pine_logs");
    event.add("minecraft:logs_that_burn", "#biomesoplenty:maple_logs");
    event.add("minecraft:logs_that_burn", "#biomesoplenty:redwood_logs");
    event.add("minecraft:logs_that_burn", "#biomesoplenty:mahogany_logs");
    event.add("minecraft:logs_that_burn", "#biomesoplenty:jacaranda_logs");
    event.add("minecraft:logs_that_burn", "#biomesoplenty:palm_logs");
    event.add("minecraft:logs_that_burn", "#biomesoplenty:willow_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:aspen_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:baobab_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:cika_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:cypress_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:ebony_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:fir_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:florus_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:holly_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:jacaranda_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:mahogany_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:maple_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:palm_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:palo_verde_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:pine_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:redwood_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:sakura_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:white_mangrove_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:willow_logs");
    event.add("minecraft:logs_that_burn", "#biomeswevegone:zelkova_logs");

    event.add('forge:slimeballs', 'thermal:tar');
})