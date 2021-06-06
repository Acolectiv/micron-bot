module.exports = { // All of these properties should be added in every command
    command: "hi", // The command itself
    name: "hi", // The name of the command. It can be whatever
    usage: "hi [command]", // The usage without the prefix
    description: "Shows a list with all available commands", // The description of the commands
    category: "utility", // The category of the command (same name of the folder where it is)
    accessible: "Members", // Who can use the command?
    run: async (client, message, args) => {
        console.log(message)
        message.channel.send('hi')
    }
}