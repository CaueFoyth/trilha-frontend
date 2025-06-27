import { Worker } from 'worker_threads';
import logger from './logger.js';

function startTask(id) {
  const w = new Worker('./task-worker.js');
  w.on('message', msg => {
    if (msg.done) {
      logger.info('Tarefa completa', msg);
    } else {
      logger.info('Progresso da tarefa', msg);
    }
  });
  w.postMessage({ taskId: id });
}

startTask('T1');
startTask('T2');