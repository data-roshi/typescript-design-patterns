export class Logger {
    private static instance: Logger;

    private constructor() {
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: String): void {
        const timestamp = new Date();
        console.log(`[${timestamp.toLocaleString()}] - ${message}`);
    }
}