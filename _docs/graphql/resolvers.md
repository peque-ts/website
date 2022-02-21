---
title: Resolvers
description: Writing Resolvers with Peque GraphQL
order: 2
---

# Resolvers

Resolvers are components that are responsible for getting data (resolving, indeed) from a GraphQL operation, 
such as queries, mutations, and subscriptions.

Resolvers should be written as classes decorated with `@Resolver()`. If you are using IoC containers
(such as [Peque DI](https://github.com/pequehq/di), or [Inversify](https://inversify.io/)), you can also
leverage this pattern to inject and organize dependencies. See an example below.

```typescript
import { Resolver } from '@pequehq/graphql';

@Resolver()
class ExampleResolver {
  constructor (private dependency: SomeDependency) {
    // Use this.dependency.
  }
}
```

## Usage example

Declare classes of your resolvers and decorate them with `@Resolver()`.

```typescript
import { Resolver } from '@pequehq/graphql';

@Resolver()
export class ExampleResolverOne {}

@Resolver()
export class ExampleResolverTwo {}
```

Use `PequeGraphQL.build` to get values to pass to Apollo Server's config.

```typescript
import { ApolloServer } from 'apollo-server-express';
import { mergeResolvers } from '@graphql-tools/merge';
import { PequeGraphQL } from '@pequehq/graphql';

import { ExampleResolverOne, ExampleResolverTwo } from './resolvers'; 

const resolvers = PequeGraphQL.build([
  new ExampleResolverOne(),
  new ExampleResolverTwo(),
]);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: mergeResolvers(resolvers),
});
```

Note: resolvers are returned as array, it's recommended the usage of @graphql-tools/merge to merge them before passing
them to the ApolloServer's configuration.

### With pre-existing Apollo flavor resolvers

If you already have resolvers defined as functions, and want to gradually migrate to a [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) approach,
you can pass them as 2nd argument to `PequeGraphQL.build`.

```typescript
import { ApolloServer } from 'apollo-server-express';
import type { IResolvers } from '@graphql-tools/utils/Interfaces';
import { mergeResolvers } from '@graphql-tools/merge';
import { Resolver, PequeGraphQL } from '@pequehq/graphql';

// Class resolver.
@Resolver()
class ExampleResolver {}

// Pre-existent Apollo flavor resolvers.
const preExistingResolvers: IResolvers[] = [
  { Query: { testOne: (parent, args, context, info): string => 'testOne' } },
  { Query: { testTwo: (parent, args, context, info): string => 'testTwo' } },
];

const resolvers = PequeGraphQL.build([new ExampleResolver()], preExistingResolvers);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: mergeResolvers(resolvers),
});
```
