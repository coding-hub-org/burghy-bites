import { DatabaseConfig } from './configurations/DatabaseConfig';
import { ConfigIOResult, ConfigurationUtilities, ConfigBase } from 'cardboard-config';
import { app } from './app';
import { Logger } from '@michaelgatesdev/common';

export class ConfigurationManager {

    public databaseConfig: DatabaseConfig | undefined = undefined;

    public async initialize(): Promise<void> {
        await this.createAndLoadConfigs();
    }

    private async createAndLoadConfigs(): Promise<void> {
        // Create database config
        try {
            const result: ConfigIOResult = await ConfigurationUtilities.createIfNotExistsAndLoad<DatabaseConfig>(
                DatabaseConfig,
                [
                    `${app.CONFIGURATIONS_DIR}/database-config.json`
                ]
            );
            if (result.wasCreated) {
                Logger.info("Created database config");
            }
            this.databaseConfig = result.loaded as DatabaseConfig;
            Logger.info("Loaded database config");
        } catch (error) {
            throw error;
        }
    }
}