import { spawn } from 'child_process';

const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', data => console.log(`stdout: ${data}`));
ls.stderr.on('data', data => console.error(`stderr: ${data}`));
ls.on('close', code => console.log(`Processo saiu com código ${code}`));