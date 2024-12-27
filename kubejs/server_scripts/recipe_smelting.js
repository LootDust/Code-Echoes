ServerEvents.recipes(event => {
    // 腐肉烧皮革
    event.smelting("minecraft:leather", "minecraft:rotten_flesh")

    // 泥炭土烧炭
    event.smelting("2x minecraft:charcoal", "biomeswevegone:peat")
})