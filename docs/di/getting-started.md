---
title: Getting Started
description: Getting started
order: 1
---

# Peque DI

It is a lightweight Inversion of Control and Dependency Injection library for TypeScript applications, suitable for both
frontend and backend applications.

## Example

```typescript
import { Container, Injectable } from '@pequehq/di';

@Injectable()
class Foo {
  getPizza() {
    return 'pizza';
  }
}

@Injectable()
class Dog {
  getHotDog() {
    return 'hotdog';
  }
}

@Injectable()
class Bar {
  @Inject(Dog.name)
  private dog: Dog;
  
  constructor(private foo: Foo) {}
  
  testFoo() {
    console.log(this.foo.getPizza());
  }
  
  testDog() {
    console.log(this.dog.getHotDog());
  }
}

const DI = new Container();

DI.set(Foo, 'Foo');
DI.set(Foo, 'Dog');
DI.set(Bar, 'Bar');

DI.get<Bar>('Bar').testFoo(); // prints "pizza".
DI.get<Bar>('Bar').testDog(); // prints "hotdog".
```
