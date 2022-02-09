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

export { SNIPPET_FRAMEWORK };
