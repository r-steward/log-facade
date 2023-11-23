import { Logger } from './logger-api';

export class LoggerProxy implements Logger {
  constructor(private _logger: Logger) {}

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
    this._logger.info(...messages);
  }
  error(...messages: any[]): void {
    this._logger.info(...messages);
  }
  fatal(...messages: any[]): void {
    this._logger.info(...messages);
  }
  isTraceEnabled(): boolean {
    return this._logger.isTraceEnabled();
  }
  isDebugEnabled(): boolean {
    return this._logger.isTraceEnabled();
  }
  isInfoEnabled(): boolean {
    return this._logger.isTraceEnabled();
  }
  isWarnEnabled(): boolean {
    return this._logger.isTraceEnabled();
  }
  isErrorEnabled(): boolean {
    return this._logger.isTraceEnabled();
  }
  isFatalEnabled(): boolean {
    return this._logger.isTraceEnabled();
  }
}
