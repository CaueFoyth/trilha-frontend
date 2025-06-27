import cluster from 'cluster';
import os from 'os';
import http from 'http';

if (cluster.isMaster) {
  const CPUs = os.cpus().length;
  for (let i = 0; i < CPUs; i++) cluster.fork();
  cluster.on('exit', (w) => console.log(`Worker ${w.process.pid} morreu`));
} else {
  http.createServer((_, res) => res.end(`Rodando no PID ${process.pid}`))
      .listen(8000);
}
