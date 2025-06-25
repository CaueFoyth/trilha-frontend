const { Duplex } = require('stream');

class ModifyDuplexStream extends Duplex {
  constructor(options) {
    super(options);
    this._buffer = [];
  }

  _write(chunk, encoding, callback) {
    const upperChunk = chunk.toString().toUpperCase();
    this._buffer.push(Buffer.from(upperChunk));
    callback();
  }

  _read(size) {
    if (this._buffer.length === 0) {
      this.push(null);
    } else {
      const chunk = this._buffer.shift();
      const lowerChunk = chunk.toString().toLowerCase();
      this.push(Buffer.from(lowerChunk));
    }
  }
}

const duplex = new ModifyDuplexStream();

duplex.write('Olá Mundo!');
duplex.end();

duplex.on('data', (data) => {
  console.log('Saída:', data.toString()); 
});