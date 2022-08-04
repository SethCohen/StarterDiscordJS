# DiscordJS-Starter
A template repository for quick discordjs bot setup.

## Features:
- [Docker](https://www.docker.com/products/docker-desktop/) for easy deployment and automatic restarting.
- [Release Please](https://github.com/googleapis/release-please) for automatic changelogging.
- Basic event/command setup.

## How To Setup:
1. Click `Use this template` and create your own repo. 
2. Create a [discord bot application](https://discord.com/developers/applications).
3. Put appropriate bot info in `config.json`.
4. Run `npm run deployCommands` to deploy slash commands.
5. To run the bot, you can either run `npm start` to start the bot, or create a **Docker** container:
   1. Install Docker
   2. From the source code folder, open a terminal and enter this commandline command: `docker build -t discord-bot .`
   3. Run the built Docker image by running `docker run -d --restart on-failure:3 discord-bot`

And youre done! This bot uses guild slash commands instead of global slash commands. Go to `deployCommands.js` to change between slash command types. 
Keep in mind if using global slash commands it may take up to an hour to become available whilst guild commands are immediate though.


**If tracking changelogging:** 
- Follow [Conventional Commit Specifications](https://www.conventionalcommits.org/en/v1.0.0/) when committing.