const EventEmitter = require('events');

class Auth extends EventEmitter {
    login(user, password) {
        if (user === 'admin' && password === '1234') {
            this.emit('loginSuccess', user);
        } else {
            this.emit('loginFailed', user);
        }
    }
}

const auth = new Auth();

auth.on('loginSuccess', (user) => {
    console.log(`Login bem-sucedido para o usuário: ${user}`);
});

auth.on('loginFailed', (user) => {
    console.log(`Login falhou para o usuário: ${user}`);
});

auth.login('admin', '1234');
auth.login('joao', 'wrongPassword');