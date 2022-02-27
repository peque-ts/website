---
title: Overview
description: Peque Framework built-in features overview
---

# Built-in features

The framework comes out with a list of built-in providers and aspects ready to implemented:

| Feature                 | Type      | Description                                                                                                                                          |
|-------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **HttpClient**          | Provider  | A full HTTP client based on the package Axios.                                                                                                       | 
| **HttpEventService**    | Provider  | Provides an subscription to the incoming request for async purposes such as logging or other tasks not related to a response. The service uses rxjs. |
| **MemoryStoreService**  | Provider  | Internal key-value memory storage at runtime with TTL.                                                                                               |
| **EventManagerService** | Provider  | It provides an internal event system, it is also where the framework events can be hooked.                                                           |
| **SchedulerService**    | Provider  | It provides an internal cron system.                                                                                                                 |
| **LoggerService**       | Provider  | It provides an internal pipeline for logging.                                                                                                        |
| **Cacheable**           | Decorator | A method decorator that leverages the custom `CacheService` to cache the result of the decorated method.                                             |
| **ConsumeEvent**        | Decorator | A method decorator that shall call the registered method at specified event time.                                                                    |
| **ProduceEvent**        | Decorator | A method decorator that shall produce the specified event with the decorated method result.                                                          |
| **Scheduler**           | Decorator | A method decorator that shall call the registered method at specified cron expression.                                                               |
| **GetWebSocketServer**  | Decorator | Injects the current created WebSocket server.                                                                                                        |
