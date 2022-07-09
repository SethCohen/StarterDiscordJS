# DiscordJS-Starter
A template repository for quick discordjs bot setup.

## How To Setup:
1. Fork repo.
2. run `npm install`.
3. Create a [discord bot application](https://discord.com/developers/applications).
4. Put appropriate bot info in `config.json`.
5. Run `npm run deployCommands` to deploy slash commands.
6. If `pm2` is installed, run `npm run start-server`, else run `npm start`.

And youre done! Keep in mind if using global slash commands may take up to an hour to become available.

**If tracking changelogging:** 
- Follow [Conventional Commit Specifications](https://www.conventionalcommits.org/en/v1.0.0/) when committing. 
- Run `npm run release` to convert git commits into a readable changelog in CHANGELOG.md.