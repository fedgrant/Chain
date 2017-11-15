import hashFn from './hash';

function Block (previous_hash, data){
  return new Promise(function(resolve, reject){
    return hashFn(data).then(function(hash) {
      resolve({
        hash, 
        data, 
        previous_hash,
        timestamp_created: Date.now()
      })
    })
  });
}

// interface Block {
//   timestamp_created: number;
//   previous_hash: string;
//   hash: string;
//   data: string[];
// }

export default Block;