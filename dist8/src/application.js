"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const sequence_1 = require("./sequence");
/* tslint:disable:no-unused-variable */
// Binding and Booter imports are required to infer types for BootMixin!
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
/* tslint:enable:no-unused-variable */
class RTRNApiApplication extends boot_1.BootMixin(repository_1.RepositoryMixin(rest_1.RestApplication)) {
    constructor(options) {
        super({
            rest: {
                port: process.env.PORT || 3000
            }
        });
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        // Use below for an in-memory database
        var dataSourceConfig = new repository_1.juggler.DataSource({
            name: "db",
            connector: "loopback-connector-mysql",
            //   name: "db",
            //  connector: 'loopback-connector-mysql',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        });
        this.dataSource(dataSourceConfig);
    }
    async start() {
        await super.start();
        const server = await this.getServer(rest_1.RestServer);
        const port = await server.get(rest_1.RestBindings.PORT);
        console.log(`Server is running at http://127.0.0.1:${port}`);
        console.log(`Try http://127.0.0.1:${port}/ping`);
    }
}
exports.RTRNApiApplication = RTRNApiApplication;
//# sourceMappingURL=application.js.map