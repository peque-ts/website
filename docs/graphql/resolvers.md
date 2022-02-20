---
title: Resolvers
description: Resolvers
order: 2
---

# Resolvers

The resolvers are the components that are responsible for getting data (resolving, indeed) from a GraphQL operation, 
such as queries, mutations, and/or subscription.

With this library, resolvers are classes decorated with the `@Resolver()` decorator. If you are using IoC containers
(such as Peque DI), you can also leverage this pattern in order to inject and organize dependencies.

```typescript
import { Resolver } from '@pequehq/graphql';

@Resolver()
class ResolverExample {
  @Inject()
  propertyDependency: DependencyOne;
  
  constructor (private constructorDependency: DepenencyTwo) {}
}
```

# Loading

## With an IoC container
If you are managing your dependencies with and IoC container (such as Peque DI or InversifyJS), you shall set your
resolvers into the container first to then retrieve their declarations in order to feed them to the IoC container
for the correct instantiation process.

```typescript
import { ApolloServer } from 'apollo-server-express';
import { Resolver, ResolverService } from '@pequehq/graphql';
import { Injectable, Inject, Container } from '@pequehq/di';

@Injectable()
@Resolver()
class ResolverExampleOne {
  @Inject()
  propertyDependency: DependencyOne;
  
  constructor (private constructorDependency: DepenencyTwo) {}
}

@Injectable()
@Resolver()
class ResolverExampleTwo {
  @Inject()
  propertyDependency: DependencyThree;

  constructor (private constructorDependency: DepenencyFour) {}
}

const DI = new Container({ providers: [ResolverExampleOne, ResolverExampleTwo] });
// Or manually DI.set(ResolverExampleOne, ResolverExampleOne.name);

const resolverService = new ResolverService();
const resolverInstances = resolverService.get(resolverService.getDeclarations().map((resolver) => DI.get(resolver.name)));

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: mergeResolvers(resolverInstances),
});
```

## Classic instantiation

If you are opting for classic instantiation, then you have to manually manage the instantiation of your resolver
classes within their dependencies, if any.

```typescript
import { ApolloServer } from 'apollo-server-express';
import { Resolver, ResolverService } from '@pequehq/graphql';

@Resolver()
class ResolverExampleOne {}

@Resolver()
class ResolverExampleTwo {}

const resolverService = new ResolverService();
const resolverInstances = resolverService.get([new ResolverExampleOne(), new ResolverExampleTwo()]);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: mergeResolvers(resolverInstances),
});
```

## With pre-existing Apollo flavor resolvers

```typescript
import { IResolvers } from '@graphql-tools/utils/Interfaces';
import { ApolloServer } from 'apollo-server-express';
import { Resolver, ResolverService } from '@pequehq/graphql';
import { Injectable, Inject, Container } from '@pequehq/di';

@Injectable()
@Resolver()
class ResolverExampleOne {
  @Inject()
  propertyDependency: DependencyOne;
  
  constructor (private constructorDependency: DepenencyTwo) {}
}

@Injectable()
@Resolver()
class ResolverExampleTwo {
  @Inject()
  propertyDependency: DependencyThree;

  constructor (private constructorDependency: DepenencyFour) {}
}

// Pre-existent Apollo flavor resolver.
const preExistingResolvers: IResolvers[] = [
  { Query: { testOne: (): string => 'testOne' } },
  { Query: { testTwo: (): string => 'testTwo' } },
];

// The example is made using IoC containers, but classic instantiation works
// with pre-existing Apollo flavor resolvers as well.
const DI = new Container({ providers: [ResolverExampleOne, ResolverExampleTwo] });

const resolverService = new ResolverService();
const resolverInstances = resolverService.get(
  resolverService.getDeclarations().map((resolver) => DI.get(resolver.name)),
  preExistingResolvers
);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: mergeResolvers(resolverInstances),
});
```
