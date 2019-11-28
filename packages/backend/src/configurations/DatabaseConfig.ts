import { ConfigBase } from "cardboard-config";

export class DatabaseConfig extends ConfigBase {
    public databaseUsername = "";
    public databasePassword = "";
    public databaseURL = "";
    public useNewURLParser = true;
}