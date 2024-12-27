ServerEvents.recipes(event => {
    event.remove({ output: 'prma:decomponentalizer' });

    // TaCZ
    event.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun', '{AttachmentSTOCK:{Count:1b,id:"tacz:attachment",tag:{AttachmentId:"tacz:oem_stock_tactical"}},GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:ak47",HasBulletInBarrel:1b}'), [
        ' A   ',
        'ABCDB',
        '  AE '
    ], {
        A: 'createdeco:industrial_iron_sheet',
        B: '#minecraft:logs',
        C: 'prma:straight_large_coil',
        D: 'prma:locking_return_coil',
        E: '#minecraft:planks'
    })
})