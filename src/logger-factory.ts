import { LoggerFactory, Logger, LoggerImplementation } from './logger-api';
import { LoggerProxy } from './logger-proxy';

export class LogFactoryImpl implements LoggerFactory {
  private _implementation: LoggerImplementation | null = null;
  private _loggerProxies: Map<string, LoggerProxy> | null = null;

  constructor(private _defaultLogger: Logger) {}

  public bindLogger(implementation: LoggerImplementation) {
    if (this._implementation != null) {
      this._implementation = implementation;
      if (this._loggerProxies != null) {
        this._loggerProxies.forEach((v, k) => (v.loggerImpl = implementation(k)));
      }
    } else {
      // tslint:disable-next-line:no-console
      console.warn('Attempt to bind new logging implementation ignored');
    }
  }

  public getLogger(name: string): Logger {
    if (this._implementation == null) {
      if (this._loggerProxies == null) {
        this._loggerProxies = new Map();
      }
      const logger = new LoggerProxy(this._defaultLogger);
      this._loggerProxies.set(name, logger);
      return logger;
    }
    return this._implementation(name);
  }
}
