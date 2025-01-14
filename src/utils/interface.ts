import { PermissionString } from 'discord.js';

/**
 * Config interface for client.
 */
export interface IConfig {
    /** Token of the client */
    token: string;

    /** Prefix of the client */
    prefix: string;

    /** Developer ids of the client */
    developers: string[];

    /**
     * Status of sending error message when user try to run unknown command.
     */
    unknownErrorMessage: boolean;
}

/**
 * Config cache for Music
 */

export interface ICache {
    /** MessageEmbed channel id */
    channelId?: string;

    /** MessageEmbed Id */
    musicMessageId?: string;
}

/**
 * Config interface for Erela.Js events
 */
export interface IManagerEvents {
    /** Events name of Erela.Js */
    name: "nodeConnect" | "nodeCreate" | "nodeDestroy" | "nodeReconnect" | "nodeDisconnect" | "nodeError" | "nodeRaw" | "playerCreate" | "playerDestroy" | "queueEnd" | "playerMove" | "trackStart" | "trackEnd" | "trackStuck" | "trackError" | "socketClosed";
}


/**
 * Information interface for commands.
 */
export interface ICommandInfo {
    /** Name of the command */
    name: string;

    /** Group name of the command */
    group: string;

    /** Aliases of the command */
    aliases?: string[];

    /** Example usages */
    examples?: string[];

    /** Args of the command */
    args?: boolean;

    /** Usage of the command */
    usage?: string;

    /** Description of the command */
    description?: string;

    /**
     * Time to wait for each use (seconds)
     *
     * Developers are not affected
     */
    cooldown?: number;

    /** Status of the command */
    enabled?: boolean;

    /**
     * If enabled, command only runs in nsfw channels
     *
     * Developers are not affected
     */
    onlyNsfw?: boolean;

    /** Requirements of the command */
    require?: ICommandRequire;
}

/**
 * Requirement interface for commands.
 */
export interface ICommandRequire {
    /** If enabled, command requires developer permission to run */
    developer?: boolean;

    /**
     * Command requires permission flags to run
     *
     * Developers are not affected
     */
    permissions?: PermissionString[];
}