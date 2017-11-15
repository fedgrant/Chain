// const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
import { hash } from 'crypto';
let hashFn = Hash();
function nodeHash(value) {
  const hashStream = hashFn.createHash('sha512');
  hashStream.write(value);
  hashStream.end();
  return new Promise((resolve, reject) => {
    hashStream.on('readable', () => {
      const data: Buffer = hashStream.read();
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
