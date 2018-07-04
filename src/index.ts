import { RTRNApiApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { RTRNApiApplication };

export async function main(options?: ApplicationConfig) {
  const app = new RTRNApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
