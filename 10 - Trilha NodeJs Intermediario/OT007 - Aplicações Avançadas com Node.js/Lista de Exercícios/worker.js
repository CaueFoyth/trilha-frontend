import { parentPort } from 'worker_threads';

parentPort.on('message', (msg) => {
  const result = msg.num ** 2;
  parentPort.postMessage({ result });
});
