import MeeS from "./structures/Client";
const client: MeeS = new MeeS(['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MEMBERS'], true);
export default client;