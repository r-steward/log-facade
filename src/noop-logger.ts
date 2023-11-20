import { Logger } from './logger-api';

/* tslint:disable:no-empty */
export class NoopLogger implements Logger {
  trace(...messages: any[]) {}
  debug(...messages: any[]) {}
  info(...messages: any[]) {}
  warn(...messages: any[]) {}
  error(...messages: any[]) {}
  fatal(...messages: any[]) {}
  isTraceEnabled() {
    return false;
  }
  isDebugEnabled() {
    return false;
  }
  isInfoEnabled() {
    return false;
  }
  isWarnEnabled() {
    return false;
  }
  isErrorEnabled() {
    return false;
  }
  isFatalEnabled() {
    return false;
  }
}
