---
title: Injectable
description: Injectable
---

# Injectable

It is important for constructor dependency calculation that the provider which is going to be registered is decorated
with the `@Injectable()` decorator because it will allow the metadata `design:paramtypes` to be fille at runtime.

This specific metadata key contains the constructor information.

```typescript
import { Container, Injectable } from '@pequehq/di';

@Injectable()
class Foo {
  getPizza() {
    return 'pizza';
  }
}

@Injectable()
class Bar {
  constructor(private foo: Foo) {}

  test() {
    console.log(this.foo.getPizza())
  }
}

const DI = new Container({ providers: [Foo, Bar] });
```
