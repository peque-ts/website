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

```graphql
type Query {
  users: [User]
}

type User {
  id: ID
  name: String
  surname: String
  location: Location
  family: Family
}

type Family {
  father: String!
  mother: String!
  userId: ID!
}

type LocationProperties {
  locationId: ID!
  property: String!
}

type Location {
  id: ID!
  city: String!
  country: String!
  properties: [LocationProperties!]!
}
```

```typescript
import { Resolver, Query, Field, Parent } from '@pequehq/graphql';
import { Injectable } from '@pequehq/di';
import {
  UserService,
  FamilyService,
  LocationService,
  LocationPropertyService
} from '../your/services';
import { User, Location, LocationProperty, Family } from '../your/dto'

@Injectable()
@Resolver()
class ResolverSchemaOne {
  constructor(private userService: UserService,
              private familyService: FamilyService,
              private locationService: LocationService,
              private locationPropertyService: LocationPropertyService) {}
  
  @Query()
  async users(): Promise<User[]> {
    return await this.userService().getAll();
  }

  @Field({ type: User })
  async location(@Parent() parent: User): Promise<Location> {
    return await this.locationService.get(parent.location);
  }

  @Field({ type: User })
  async family(@Parent() parent: User): Promise<Family> {
    return await this.familyService.get(parent.family);
  }

  @Field({ type: Location, name: 'properties' })
  async properties(@Parent() parent: Location): Promise<LocationProperty[]> {
    return await this.locationPropertyService.get(parent.id);
  }
}
```
