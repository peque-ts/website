---
title: Client
description: Client
---

# Client

The client is the components that can connect to a broker is order to subscribe to consume events, and send messages
in order to produce events.

## Start

```typescript
import { BrokerClientFactory } from '@pequehq/smb-client';

const idOne = await clientOne.connect({ connectionTimeout: 10000 });
const idTwo = await clientTwo.connect({ connectionTimeout: 10000 });

console.log(`Client One ID: ${idOne}`, `Client Tow ID: ${idTwo}`);

clientOne.subscribe('^topic', (command) => console.log(command.action.message));

clientTwo.message('topic', { test: 'message topic' });
clientTwo.message('topic_other', { test: 'messate topic_other' });
``` 

## Commands

| Command       | Description                                                               |
|---------------|---------------------------------------------------------------------------|
| `subscribe`   | It subscribes the client to a specific topic or a RegEx topic pattern     |
| `unsubscribe` | It unsubscribes the client from a specific topic or a RegEx topic pattern |
| `message`     | It sends payload to a specific topic                                      |
| `publish`     | A broadcast receive from the broker                                       |
