---
title: Getting Started
description: Getting started with Peque GraphQL
order: 1
---

# Peque GraphQL

This library is built on top of [Apollo Server](https://www.apollographql.com/docs/apollo-server/), and it allows you to
code your resolvers following an [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming)/[AOP](https://en.wikipedia.org/wiki/Aspect-oriented_programming) flavor to better fit enterprise-level paradigms and patterns.

```mermaid
graph TB
  APP(Your App) --> PGQL(Peque GraphQL Resolver):::clazz
  PGQL --> APS(Your Apollo Server creation):::server
  APS --> START([Start])
  
  classDef server fill:DarkSeaGreen
  classDef clazz fill:MediumPurple
```
