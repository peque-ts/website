export const PROJECTS = {
  framework: {
    id: 'framework',
    name: 'Framework',
    description:
      'Create enterprise level server-side TypeScript applications. For REST, GraphQL, and Microservices.',
    descriptionShort: 'Node.js framework for backend applications.',
  },
  graphql: {
    id: 'graphql',
    name: 'GraphQL',
    description: 'Write Apollo GraphQL resolvers in a OOP fashion with TypeScript decorators.',
    descriptionShort: 'OOP transposition of Apollo Server resolvers.',
  },
  di: {
    id: 'di',
    name: 'IoC Container',
    description:
      'Lightweight Inversion of Control and Dependency Injection for TypeScript applications.',
    descriptionShort: 'TypeScript Dependency Injection.',
  },
  smb: {
    id: 'smb',
    name: 'Message Broker',
    description: 'TCP-based Redis-like Pub/Sub type of message broker, almost configuration-less.',
    descriptionShort: 'TCP-based Message Broker.',
  },
};

export type ProjectId = keyof typeof PROJECTS;
