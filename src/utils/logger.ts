import winston from 'winston';

const timezoned = () => {
    return new Date().toLocaleString('en-US', {
        timeZone: process.env.TZ
    });
}

const logger = winston.createLogger({
  level: 'debug', // logs everything
  format: winston.format.combine(
    winston.format.timestamp({ format: timezoned }),
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