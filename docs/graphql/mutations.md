---
title: Mutations
description: Mutations
order: 5
---

# Mutations

Mutations are the conventional SDL schema type designated to represent a data modification query, and they are
represented as class methods decorated by the `@Mutation()` decorator.

## Options

The `@Mutation()` decorator supports the options declared inside the `IMutationOptions` interface.

| Options  | Description                                                                                                                         | Required |
|----------|-------------------------------------------------------------------------------------------------------------------------------------|----------|
| `name`   | The name of the mutation query in the SDL schema mutation type. If not specified, than the name is assumed to be the method's name. | No       |

```graphql
type User {
  id: ID
  name: String
  surname: String
}

type Mutation {
  insertUser(name: String!, surname: String!): User
  updateUser(id: ID, name: String!, surname: String!): User
  deleteUser(id: ID): User
}
```

```typescript
import { Resolver, Mutation } from '@pequehq/graphql';
import { Injectable } from '@pequehq/di';
import { UserService } from '../your/services';
import { User } from '../your/dto'

@Injectable()
@Resolver()
class ResolverSchemaOne {
  constructor(private userService: UserService) {}

  @Mutation()
  async insertUser(@Args() args: any): Promise<User> {
    return await this.userService.insert({ name: args.name, surname: args.surname });
  }

  @Mutation()
  async updateUser(@Args() args: any): Promise<User> {
    return await this.userService.update(args.id, { name: args.name, surname: args.surname });
  }

  @Mutation()
  async updateUser(@Args() args: any): Promise<User> {
    const user = await this.userService.get(args.id);
    await this.userService.delete(args.id);
    
    return user;
  }
}
```
