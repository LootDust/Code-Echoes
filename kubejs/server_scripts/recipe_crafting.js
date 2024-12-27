ServerEvents.recipes(event => { // 工作台
    // TaCZ & 电池护盾
    // 删除枪械制作台与蓝图解析台配方
    event.remove({ output: "tacz:gun_smith_table" })
    // 简易弹药制作
    event.shapeless(Item.of('tacz:ammo', 8, '{AmmoId:"lradd:arrow"}'), ["minecraft:iron_ingot", "8x minecraft:arrow"])
    event.shaped(Item.of('tacz:ammo', 15, '{AmmoId:"lradd:nail"}'), [
        "AAA",
        "AAA",
        "BBB"
    ], {
        A: "minecraft:iron_nugget",
        B: "minecraft:iron_ingot"
    })
    event.shaped(Item.of('tacz:ammo', 30, '{AmmoId:"tacz:9mm"}'), [
        " A ",
        " B ",
        " C "
    ], {
        A: "minecraft:copper_ingot",
        B: "minecraft:copper_block",
        C: "minecraft:gunpowder"
    })
    // 简易枪械制作
    // 扳手
    event.shapeless(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"create_armorer:special_melee_wrench",HasBulletInBarrel:1b}'), 'create:wrench');
    // Nitro 505 十字弩
    event.shaped(Item.of('tacz:modern_kinetic_gun', '{AttachmentSCOPE:{Count:1b,id:"tacz:attachment",tag:{AttachmentId:"tacz:sight_coyote"}},GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"lradd:nitro_505",HasBulletInBarrel:1b}'),[
        "ABB",
        "BCD",
        "BDE"
    ], {
        A: "minecraft:tripwire_hook",
        B: "minecraft:iron_block",
        C: "minecraft:crossbow",
        D: "minecraft:string",
        E: "minecraft:lapis_block"
    })
    // 射钉枪
    event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"lradd:nailgun",HasBulletInBarrel:1b}'), [
        "ABC",
        " BB",
        " A "
    ], {
        A: "minecraft:iron_ingot",
        B: "minecraft:iron_block",
        C: "minecraft:gold_ingot"
    })
    // Glock 17
    event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:17,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:1b}'),[
        "AAB",
        " AA"
    ], {
        A: "minecraft:iron_ingot",
        B: "minecraft:iron_block"
    })
    // 
    event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:17,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:1b}'),[
        "AAB",
        " CA"
    ], {
        A: "minecraft:iron_ingot",
        B: "minecraft:iron_block",
        C: "#minecraft:logs"
    })
    // UZI
    event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:uzi",HasBulletInBarrel:1b}'), [
        "ABB",
        "CBB",
        " B "
    ], {
        A: "minecraft:iron_ingot",
        B: "minecraft:iron_block",
        C: "minecraft:lapis_block"
    })
    // MP5A1
    event.shaped(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:mp5",HasBulletInBarrel:1b}'), [
        "ABB",
        "CBB",
        " B "
    ], {
        A: "minecraft:iron_ingot",
        B: "minecraft:iron_block",
        C: "minecraft:lapis_block"
    })
    // 制造金属
    event.remove({ output: "battery_shield:steel" })
    event.shapeless("6x battery_shield:steel", ["3x thermal:apatite", "thermal:cinnabar", "2x thermal:tin_ingot", "thermal:lead_ingot", "thermal:silver_ingot", "thermal:nickel_ingot"])
    
    // 同名木材转换
    // 乌木
    global.exchangeWoods("bloomingnature", "biomeswevegone", "ebony").forEach(element => {event.shapeless(element[0], element[1])});
    // 冷杉木
    global.exchangeWoods("bloomingnature", "biomeswevegone", "fir").forEach(element => {event.shapeless(element[0], element[1])});
    global.exchangeWoods("natures_spirit", "biomeswevegone", "fir").forEach(element => {event.shapeless(element[0], element[1])});
    global.exchangeWoods("biomesoplenty", "biomeswevegone", "fir").forEach(element => {event.shapeless(element[0], element[1])});
    global.exchangeWoods("bloomingnature", "natures_spirit", "fir").forEach(element => {event.shapeless(element[0], element[1])});
    global.exchangeWoods("bloomingnature", "biomesoplenty", "fir").forEach(element => {event.shapeless(element[0], element[1])});
    global.exchangeWoods("natures_spirit", "biomesoplenty", "fir").forEach(element => {event.shapeless(element[0], element[1])});
    // 松木
    global.exchangeWoods("regions_unexplored", "biomeswevegone", "pine").forEach(element => {event.shapeless(element[0], element[1])});
    // 枫木
    global.exchangeWoods("regions_unexplored", "biomeswevegone", "maple").forEach(element => {event.shapeless(element[0], element[1])});
    global.exchangeWoodsWithoutSaplings("natures_spirit", "biomeswevegone", "maple").forEach(element => {event.shapeless(element[0], element[1])});
    global.exchangeWoodsWithoutSaplings("natures_spirit", "regions_unexplored", "maple").forEach(element => {event.shapeless(element[0], element[1])});
    // 柏木
    global.exchangeWoods("")
    // 柳木
    // 桃花心木
    // 棕榈木
    // 樱花木
    // 猴面包木
    // 白杨木
    // 红衫木
    // 蓝花楹木

    // 肥料制作
    event.shaped('thermal:phyto_tnt', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'thermal:phytogro',
        B: 'minecraft:tnt'
    })
})
