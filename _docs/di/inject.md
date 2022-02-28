---
title: Inject
description: Inject
---

# Inject

The `@Inject()` is a property and parameter decorator which will help with direct class property dependency injection and
constructor parameter dependency binding.

```typescript
@Injectable()
class Pizza {
  get(): string {
    return 'pizza';
  }
}

@Injectable()
class Sushi {
  get(): string {
    return 'sushi';
  }
}

@Injectable()
class Curry {
  get(): string {
    return 'curry';
  }
}

@Injectable()
class Katsu {
  get(): string {
    return 'katsu curry';
  }
}

@Injectable()
class Restaurant {
  @Inject('Pizza')
  pizza: Pizza;

  constructor(
    private sushi: Sushi,
    @Inject('Katsu') private curry: Curry,
  ) {}

  getPizza(): string {
    return this.pizza.get();
  }

  getSushi(): string {
    return this.sushi.get();
  }

  getCurry(): string {
    return this.curry.get();
  }
}

const DI = new Container({ providers: [Pizza, Sushi, Curry, Katsu, Restaurant] });

const restaurant = DI.get<Restaurant>('Restaurant');

console.log(restaurant.getPizza()); // prints "pizza".
console.log(restaurant.getSushi()); // prints "sushi".
console.log(restaurant.getCurry()); // prints "katsu curry" and not "curry".
```
