---
title: Parameters
description: Handling Parameters with Peque GraphQL
order: 6
---

# Parameters

The arguments that can be injected in a resolver method such as query, field, mutation, and subscription.

| Parameter                | Description                                                       |
|--------------------------|-------------------------------------------------------------------|
| `@Parent()`              | Return value of the parent resolver.                              |
| `@Args(key?: string)`    | Argument, if specified, or all the arguments passed in the field. |
| `@Context(key?: string)` | Shared objects across all resolvers.                              |
| `@Info()`                | Object that contains the execution state of the operation.        |

## Usage example

```typescript
import { Resolver, Query } from '@pequehq/graphql';

@Resolver()
class ExampleResolver {
  @Query()
  async query(@Parent() parent: any,
              @Args() args: any,
              @Context() context: any,
              @Info() info: any) {
    // Use the parameters.
  }
}
```

For further information about Apollo resolver parameters, please read [here](https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments).
