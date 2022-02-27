---
title: Logger
description: Handling logging in Peque Framework
---

# Logger

It is a simple service where to route all the logs. This service is also used internally by the framework so that the developers
can make use of the internal logs as well.

It provides four level of logs, and the log level can be defined in the `Server` config.
The logs will be evaluated based on the expression `config.level >= log.level`.

| Level   | Order  |
|---------|--------|
| `debug` | 1      |
| `error` | 2      |
| `warn`  | 3      |
| `info`  | 4      |


```typescript
@Injectable()
export class InternalService {
  constructor(private readonly loggerService: LoggerService) { }
  
  doSomething() {
    this.loggerService().log({ level: 'info', data: { test: 'test message' } });
  }
}
```
