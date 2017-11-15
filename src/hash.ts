// const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
import * as crypto from 'crypto';

function nodeHash(value) {
  const hash = crypto.createHash('sha512');
  hash.write(value);
  hash.end();
  return new Promise((resolve, reject) => {
    hash.on('readable', () => {
      const data: Buffer = (hash.read() as Buffer);
      if (data) {
        resolve(data.toString('hex'));
      } else {
        reject({
          err: 'HASH', 
          msg: 'No hash value created'
        })
      }
    });
  });
}

export default nodeHash;
