import { Logger } from './logger-api';

export class LoggerProxy implements Logger {
  constructor(private _logger: Logger) { }

  public set logger(value: Logger) {
    this._logger = value;
  }
  trace(...messages: any[]): void {
    this._logger.trace(...messages);
  }
  debug(...messages: any[]): void {
    this._logger.debug(...messages);
  }
  info(...messages: any[]): void {
    this._logger.info(...messages);
  }
  warn(...messages: any[]): void {
    this._logger.warn(...messages);
  }
  error(...messages: any[]): void {
    this._logger.error(...messages);
  }
  fatal(...messages: any[]): void {
    this._logger.fatal(...messages);
  }
  isTraceEnabled(): boolean {
    return this._logger.isTraceEnabled();
  }
  isDebugEnabled(): boolean {
    return this._logger.isDebugEnabled();
  }
  isInfoEnabled(): boolean {
    return this._logger.isInfoEnabled();
  }
  isWarnEnabled(): boolean {
    return this._logger.isWarnEnabled();
  }
  isErrorEnabled(): boolean {
    return this._logger.isErrorEnabled();
  }
  isFatalEnabled(): boolean {
    return this._logger.isFatalEnabled();
  }
}
