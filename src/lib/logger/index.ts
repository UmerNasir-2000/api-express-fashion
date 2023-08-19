
import pino from 'pino';

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});

export default class Logger {

    static log(message: string) {
        logger.info(message);
    }

    static error(message: string) {
        logger.error(message);
    }

    static debug(message: string) {
        logger.debug(message);
    }

}
