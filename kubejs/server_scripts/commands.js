PlayerEvents.chat(event => {
    // Check if message equals creeper, ignoring case
    if (event.message.trim().toLowerCase() == 'creeper') {
      // Schedule task in 1 tick, because if you reply immediately, it will print before player's message
      event.server.scheduleInTicks(1, event.server, ctx => {
        // Tell everyone "Aw man", colored green. Callback data is the server
        ctx.data.tell(Text.green('Aw man'))
      })
    }
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(Commands.literal('hunger')
      .requires(s => s.hasPermission(2))
      .executes(c => c.source.player.displayClientMessage(Component.literal("Test"), true))
    )
})

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event
  
  event.register(Commands.literal('suggest') // The name of the command
    .requires(s => s.hasPermission(1)) // Check if the player has operator privileges
    .then(Commands.argument('type', Arguments.STRING.create(event))
      .executes(c => suggest(c.source.player)) // Toggle flight for the player included in the `target` argument
    )
  )
  
  // Helper function
  let suggest = (player) => {
    console.log(player)
    if (player instanceof Internal.ServerPlayer) {
      player.sendChatMessage("Sug get.", true)
    }
    return 1
  }
})