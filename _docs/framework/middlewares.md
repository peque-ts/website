---
title: Middlewares
description: Building middlewares in Peque Framework
order: 7
---

# Middlewares

Middlewares are providers classes decorated with the `@Middleware()` decorator.
The class, though, must implement the `MiddlewareHandler` interface.

```typescript
@Middleware()
export class TestMiddleware implements MiddlewareHandler {
  handler(req: Request, res: Response, next: NextFunction): void {
    // Logic.
    next();
  }
}
```

```mermaid
graph LR
  C1(Controller /page):::controller --> MW1(Controller Middleware)
  MW1 --> MW2(Route Middleware)
  MW1 --> MW3(Route Middleware)
  MW1 --> MW4(Route Middleware)
  MW2 --> RT1(Route Handler):::controller
  MW3 --> RT2(Route Handler):::controller
  MW4 --> RT3(Route Handler):::controller
  
  classDef controller fill:DodgerBlue
```

The middlewares can be placed both at **Controller** and **Route** time by using the `@UseMiddleware()` decorator.

```typescript
@UseMiddleware(TestMiddleware)
@Controller('/test')
class TestMiddlewareController {
  
  @UseMiddleware(TestMiddleware)
  @Get('/test-method')
  testMethod() {
    // Logic.
  }
}
```
