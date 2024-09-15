import {Logger} from './logger';

export class Application {
    constructor(private logger: Logger) {
    }

    run(): void {
        this.logger.log("application is running");
        this.logger.log("application is shutting down");
    }
}