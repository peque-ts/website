---
title: Broker
description: Broker
---

# Broker

The broker is the server component that allows the clients to subscribe and unsubscribe, and provides the broadcast
of the messages towards the subscribed clients.

## Start

### Code

```typescript
import { BrokerFactory } from '@pequehq/smb-broker';

const broker = new BrokerFactory().createBroker();

async function startBroker(): Promise<void> {
  await broker.create();
}

startBroker().then(() => {
  // Server is started and you can do additional things, but also not necessary.
});
``` 

### Command line

```shell
export $PORT=8021
export $HOSTNAME="127.0.0.1"
smb-broker 
```
