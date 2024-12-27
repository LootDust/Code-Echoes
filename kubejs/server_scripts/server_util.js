/**
 * @description 同名木材转换
 * @param {string} mod1name 模组1
 * @param {string} mod2name 模组2
 * @param {string} woodname 木材名
 */
global.exchangeWoods = function(mod1name, mod2name, woodname) {
    var array = global.exchangeWoodsWithoutSaplings(mod1name, mod2name, woodname).concat([
        [mod1name + ":" + woodname + "_sapling",
        mod2name + ":" + woodname + "_sapling"],
        [mod2name + ":" + woodname + "_sapling",
        mod1name + ":" + woodname + "_sapling"]
    ]);
    return array;
}

/**
 * @description 同名木材转换，但是树苗除外
 * @param {string} mod1name 模组1
 * @param {string} mod2name 模组2
 * @param {string} woodname 木材名
 */
global.exchangeWoodsWithoutSaplings = function(mod1name, mod2name, woodname) {
    var array = [
        [mod1name + ":" + woodname + "_log",
        mod2name + ":" + woodname + "_log"],
        [mod2name + ":" + woodname + "_log",
        mod1name + ":" + woodname + "_log"],
        [mod1name + ":stripped_" + woodname + "_log",
        mod2name + ":stripped_" + woodname + "_log"],
        [mod2name + ":stripped_" + woodname + "_log",
        mod1name + ":stripped_" + woodname + "_log"],
        [mod1name + ":" + woodname + "_wood",
        mod2name + ":" + woodname + "_wood"],
        [mod2name + ":" + woodname + "_wood",
        mod1name + ":" + woodname + "_wood"],
        [mod1name + ":stripped_" + woodname + "_wood",
        mod2name + ":stripped_" + woodname + "_wood"],
        [mod2name + ":stripped_" + woodname + "_wood",
        mod1name + ":stripped_" + woodname + "_wood"],
        [mod1name + ":" + woodname + "_planks",
        mod2name + ":" + woodname + "_planks"],
        [mod2name + ":" + woodname + "_planks",
        mod1name + ":" + woodname + "_planks"]
    ];
    return array;
}