---
title: Dependency injection
description: Dependency injection
---

# Dependency injection

It is one of the techniques of the inversion of control, and the purpose is to relieve a service from the responsibility
of having to know how to construct itself. Instead, the service shall delegate this responsibility to an external
service (injector) which will construct it with the necessary dependencies.

The [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection), hence, helps with implementing the 
[separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) design principle.

```mermaid
graph TB
  PR1(Provider):::clazz -- Register --> C(Container):::server
  PR2(Provider):::clazz -- Register --> C
  PR3(Provider):::clazz -- Register --> C
  subgraph Dependency Injection
    C -- Resolve --> J(Injector to resolve providers with its dependencies and inject):::server
  end
  J -- Inject --> PJ1(Provider instance):::service
  J -- Inject --> PJ2(Provider instance):::service
  J -- Inject --> PJ3(Provider instance):::service
  
  classDef clazz fill:MediumPurple
  classDef server fill:DarkSeaGreen
  classDef service fill:SandyBrown
```
