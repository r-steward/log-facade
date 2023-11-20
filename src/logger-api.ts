import { LoggerBindingManagerImpl } from './logger-binding-manager';

export type LoggerImplementation = (name: string) => Logger;

export interface Logger {
  trace(...messages: any[]): void;
  debug(...messages: any[]): void;
  info(...messages: any[]): void;
  warn(...messages: any[]): void;
  error(...messages: any[]): void;
  fatal(...messages: any[]): void;
  isTraceEnabled(): boolean;
  isDebugEnabled(): boolean;
  isInfoEnabled(): boolean;
  isWarnEnabled(): boolean;
  isErrorEnabled(): boolean;
  isFatalEnabled(): boolean;
}

export interface LoggerFactory {
  getLogger(name: string): Logger;
}

export interface LoggerBinding {
  loggerImplementation: LoggerImplementation;
  vendor: string;
}

/**
 * Bind the logging to a particular logging implementation
 */
export const LogBindingManager = new LoggerBindingManagerImpl();

/**
 * Gets the logger with a particular name
 */
export const LogFactory = LogBindingManager.LoggerFactory;
