interface BiDiEvent<TParams> {
  method: string;
  params: TParams;
};

interface LogEntrySource {
  realm: string;
}

export type BiDiLogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntryAddedEventParams {
  type: string;
  level: BiDiLogLevel;
  source: LogEntrySource;
  text: string;
  timestamp: number;
}

// https://w3c.github.io/webdriver-bidi/#event-log-entryAdded
export interface LogEntryAddedEvent extends BiDiEvent<LogEntryAddedEventParams> {
  context: string;
}

interface ContentUpdatedParams {
  name: string;
  type: 'NATIVE' | 'WEB';
}

// https://github.com/appium/appium/issues/20741
export interface ContextUpdatedEvent extends BiDiEvent<ContentUpdatedParams> {}
