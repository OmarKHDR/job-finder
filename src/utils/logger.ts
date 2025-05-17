import winston from 'winston';

const logger = winston.createLogger({
  level: 'debug', // logs 'info', 'warn', 'error' but NOT 'debug'
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' }),
  ],
});


export default logger;