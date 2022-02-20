---
title: Parameters
description: Parameters
order: 7
---

# Parameters

The arguments that can be injected in a resolver method, such as query, field, mutation, and/or subscription.

```typescript
import { Resolver, Mutation } from '@pequehq/graphql';
import { Injectable } from '@pequehq/di';
import { UserService } from '../your/services';
import { User } from '../your/dto'

@Resolver()
class ResolverSchemaOne {
  constructor(private userService: UserService) {}

  @Query()
  async users(@Parent() parent: any,
              @Args() args: any,
              @Context() context: any,
              @Info() info: any): Promise<User[]> {
    // Use the arguments.
    return await this.userService().getAll();
  }
}
```

| Parameter                | Description                                                           |
|--------------------------|-----------------------------------------------------------------------|
| `@Parent()`              | The return value of the parent resolver.                              |
| `@Args(key?: string)`    | The argument, if specified, or all the arguments passed in the field. |
| `@Context(key?: string)` | The shared objects across all resolvers.                              |
| `@Info()`                | The object that contains the execution state of the operation.        |

For further information about Apollo resolver arguments, read [here](https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments).
