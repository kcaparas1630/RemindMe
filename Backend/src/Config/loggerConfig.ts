import { createLogger, format, transports } from "winston";
import path from 'path';
const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}, (${timestamp})`;
  })
);

// Create a Winston logger
const logger = createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    //eslint-disable-next-line no-undef
    new transports.File({ filename: path.join(process.cwd(), 'app.log') }),
  ],
});

export default logger;
