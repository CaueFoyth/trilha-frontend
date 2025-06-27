import { parentPort } from 'worker_threads';

parentPort.on('message', ({ taskId }) => {
  for (let i = 0; i <= 100; i += 20) {
    parentPort.postMessage({ taskId, progress: i });
  }
  parentPort.postMessage({ taskId, done: true });
});