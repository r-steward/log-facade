import { LoggerFactory, Logger, LoggerImplementation, LoggerBinding } from './logger-api';
import { LoggerProxy } from './logger-proxy';

export class LogFactoryImpl implements LoggerFactory {
  private _binding: LoggerBinding | null = null;
  private _loggerProxies: Map<string, LoggerProxy> | null = null;

  constructor(private _defaultLogger: Logger) { }

  public bindLogger(binding: LoggerBinding) {
    if (this._binding == null) {
      this._binding = binding;
      if (this._loggerProxies != null) {
        this._loggerProxies.forEach((v, k) => (v.logger = binding.loggerImplementation(k)));
      }
    } else {
      // tslint:disable-next-line:no-console
      console.warn(`Attempt to bind new logging implementation ignored as ${this._binding.vendor} already bound`);
    }
  }

  public getLogger(name: string): Logger {
    if (this._binding == null) {
      if (this._loggerProxies == null) {
        this._loggerProxies = new Map();
      }
      const logger = new LoggerProxy(this._defaultLogger);
      this._loggerProxies.set(name, logger);
      return logger;
    }
    return this._binding.loggerImplementation(name);
  }
}
