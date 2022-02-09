const SNIPPET_FRAMEWORK = `import { Controller, Get, Module, PequeFactory } from '@pequehq/framework';

@Controller('/test')
class MyController {
  @Get('/hello')
  hello() {
    return { test: 'hello world' };
  }
}

@Module({ controllers: [MyController] })
class MyModule {}

const webserver = PequeFactory.createServer({
  cors: true,
  isCpuClustered: false,
  rootModule: MyModule,
});

webserver.start();`;

const SNIPPET_DI = `import { Container, Injectable } from '@pequehq/di';

@Injectable()
class Foo {
  getPizza() {
    return 'pizza';
  }
}

@Injectable()
class Bar {
  constructor(private foo: Foo) {}
  
  test() {
    console.log(this.foo.getPizza())
  }
}

const DI = new Container();

DI.set(Foo, 'Foo');
DI.set(Bar, 'Bar');

DI.get<Bar>('Bar').test(); // prints "pizza"`;

const SNIPPET_SMB_SERVER = `import { BrokerFactory } from '@pequehq/smb-broker';

const broker = new BrokerFactory().createBroker();

broker.create().then(() => {
  // things.
});`;

const SNIPPET_SMB_CLIENT = `import { BrokerClientFactory } from '@pequehq/smb-client';

const client = new BrokerClientFactory().make();

await client.connect({ connectionTimeout: 10000 });

client.subscribe('^topic', (command) => {
  console.log(command.action.message); // prints {"test":"message"}
});

client.message('topic', { test: 'message' });
`;

export { SNIPPET_FRAMEWORK, SNIPPET_DI, SNIPPET_SMB_CLIENT, SNIPPET_SMB_SERVER };
