import { Worker } from 'worker_threads';

function runWorker(num) {
  return new Promise((res, rej) => {
    const w = new Worker('./worker.js', { argv: [] });
    w.on('message', res);
    w.on('error', rej);
    w.postMessage({ num });
  });
}

(async () => {
  const { result } = await runWorker(10);
  console.log('Resultado do Worker:', result);
})();
