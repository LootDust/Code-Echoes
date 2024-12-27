BlockEvents.modification(event => {
    event.modify("#forge:ores", block => {
        block.properties.lightLevel(0.5)
    })
})