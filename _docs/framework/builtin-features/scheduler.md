---
title: Scheduler
description: Scheduling actions in Peque Framework
---

# Scheduler

It is based on the package [`node-cron`](https://www.npmjs.com/package/node-cron), and it allows the execution of methods at a specified time.
The schedule is provided by this decorator:

- `@Scheduler(name: string, cron: string)`

```typescript
@Injectable()
export class InternalService {
  constructor() { }

  @Scheduler('doSomething', '*/5 * * * * *')
  doSomething() {
    console.log('Scheduled method');
  }
}
```

The tasks can also be managed via the `ScheduleService` itself.

```typescript
@Injectable()
export class InternalService {
  constructor(private readonly schedulerService: SchedulerService) { }

  @Scheduler('doSomething', '*/5 * * * * *')
  doSomething() {
    console.log('Scheduled method');
  }
  
  stopDoSomething() {
    this.schedulerService.getScheduler('doSomething').stop();
  }
}
```
