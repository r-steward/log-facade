import { Logger, LoggerImplementation } from './logger-api';

export const ConsoleImplementation: LoggerImplementation = name => new ConsoleLogger(name);

/* tslint:disable:no-empty */
export class ConsoleLogger implements Logger {
  private name: string;
  constructor(name: string) {
    this.name = `(${name})`;
  }

  trace(...messages: any[]) {
    console.log(this.name, '[TRACE]', ...messages);
  }
  debug(...messages: any[]) {
    console.log(this.name, '[DEBUG]', ...messages);
  }
  info(...messages: any[]) {
    console.log(this.name, '[INFO]', ...messages);
  }
  warn(...messages: any[]) {
    console.log(this.name, '[WARN]', ...messages);
  }
  error(...messages: any[]) {
    console.log(this.name, '[ERROR]', ...messages);
  }
  fatal(...messages: any[]) {
    console.log(this.name, '[FATAL]', ...messages);
  }

  isTraceEnabled() {
    return true;
  }
  isDebugEnabled() {
    return true;
  }
  isInfoEnabled() {
    return true;
  }
  isWarnEnabled() {
    return true;
  }
  isErrorEnabled() {
    return true;
  }
  isFatalEnabled() {
    return true;
  }
}
