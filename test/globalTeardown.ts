import { MongoMemoryServer } from 'mongodb-memory-server';
import { TEST_CONFIG as config } from './config';

export = async function globalTeardown() {
  if (config.Memory) { // Config to decide if an mongodb-memory-server instance should be used
    const instance: MongoMemoryServer = (global as any).__MONGOINSTANCE;
    await instance.stop();
  }
};
