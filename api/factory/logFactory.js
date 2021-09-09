const winston = require('winston');
const logger = winston.createLogger({
    format:winston.format.json(),
    transports:[
        new winston.transports.File({filename:'userAPI.log'})
    ]
});
const _logFactory = {};

_logFactory.generateInfoLog = (content) => {
    logger.log(
        {
            level: 'info',
            message: content.message,
            api: content.api,
            function: content.functionName,
            date: Date.now(),
            uuid: content.uuid
        }
    );
}

_logFactory.generateErrorLog = (content) => {
    logger.log(
        {
            level: 'error',
            message: content.message,
            api: content.api,
            function: content.functionName,
            date: Date.now(),
            uuid: content.uuid
        }
    )
}

module.exports = _logFactory;