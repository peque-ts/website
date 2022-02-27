---
title: Event Management
description: Handling Events in Peque Framework
---

# Event Management

It is based on Node.js `EventEmitter`, and it provides a ready to use out-of-the-box implementation.
The framework is also leveraging this service internally to dispatch native events that can also be hooked by developers for design purposes.

| Native event                      | Description              |
|-----------------------------------|--------------------------|
| `http.in`                         | Incoming HTTP request    |
| `http.out`                        | Response towards client  |
| `logger`                          | Logging events           |
| `scheduler`                       | Logging events           |
| `lifecycle.bootstrap`             | Server bootstrap         |
| `lifecycle.init.provider`         | Injectable init          |
| `lifecycle.init.module`           | Module init              |
| `lifecycle.init.controller`       | Controllers init         |
| `lifecycle.init.websocket`        | WebSocket server init    |
| `lifecycle.server.listening`      | Server listening         |
| `lifecycle.server.started`        | Server started           |
| `lifecycle.destroy.controller`    | Controller destroyed     |
| `lifecycle.destroy.module`        | Module destroyed         |
| `lifecycle.destroy.provider`      | Injectable destroyed     |
| `lifecycle.destroy.websocket`     | WebSocket server destroy |
| `lifecycle.server.listening.stop` | Server listener closed   |
| `lifecycle.server.shutdown`       | Server shutdown          |

The Event Management System, besides the injectable `EventManagementService`, is also providing a set of decorators:

- `@OnEvent(event: string | NativeEventType)`

```typescript
@Injectable()
export class InternalService {
  constructor(private readonly eventManager: EventManagerService) { }

  @OnEvent(event)
  consumeEvent(data: EventData) {
    console.log(data);
  }
}
```
