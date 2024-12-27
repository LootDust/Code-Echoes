const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $IKeyConflictContext = Java.loadClass("net.minecraftforge.client.settings.IKeyConflictContext");
const $KeConflictContext = Java.loadClass("net.minecraftforge.client.settings.KeyConflictContext");
const $KeyModifier = Java.loadClass("net.minecraftforge.client.settings.KeyModifier");
const $InputConstantsType = Java.loadClass("com.mojang.blaze3d.platform.InputConstants$Type")
const $KeyMappingRegistry = Java.loadClass(
  "dev.architectury.registry.client.keymappings.KeyMappingRegistry"
);

global.meleeSpecKey = new $KeyMapping(
    "key.tacz.melee_spec.desc",
    $KeConflictContext.IN_GAME,
    $KeyModifier.NONE,
    $InputConstantsType.MOUSE,
    0,
    "key.category.tacz",
);
global.reloadSpecKey = new $KeyMapping(
    "key.tacz.reload_spec.desc",
    $KeConflictContext.IN_GAME,
    $KeyModifier.NONE,
    $InputConstantsType.MOUSE,
    0,
    "key.category.tacz",
);

ClientEvents.init(() => {
    $KeyMappingRegistry.register(global.meleeSpecKey);
    $KeyMappingRegistry.register(global.reloadSpecKey);
});