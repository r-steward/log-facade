import { Logger } from './logger-api';

export class LoggerProxy implements Logger {
  constructor(private _loggerImpl: Logger) {}

  public set loggerImpl(value: Logger) {
    this._loggerImpl = value;
  }
  trace(...messages: any[]): void {
    this._loggerImpl.trace(...messages);
  }
  debug(...messages: any[]): void {
    this._loggerImpl.debug(...messages);
  }
  info(...messages: any[]): void {
    this._loggerImpl.info(...messages);
  }
  warn(...messages: any[]): void {
    this._loggerImpl.info(...messages);
  }
  error(...messages: any[]): void {
    this._loggerImpl.info(...messages);
  }
  fatal(...messages: any[]): void {
    this._loggerImpl.info(...messages);
  }
  isTraceEnabled(): boolean {
    return this._loggerImpl.isTraceEnabled();
  }
  isDebugEnabled(): boolean {
    return this._loggerImpl.isTraceEnabled();
  }
  isInfoEnabled(): boolean {
    return this._loggerImpl.isTraceEnabled();
  }
  isWarnEnabled(): boolean {
    return this._loggerImpl.isTraceEnabled();
  }
  isErrorEnabled(): boolean {
    return this._loggerImpl.isTraceEnabled();
  }
  isFatalEnabled(): boolean {
    return this._loggerImpl.isTraceEnabled();
  }
}
