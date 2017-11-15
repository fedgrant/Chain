import Block from './block';

class Chain {
  chain: object;
  current_hash: string;
  constructor() {
    this.chain = {}
    this.current_hash = '-';
  }

  createBlock(data) {
    return new Promise(function(resolve, reject) {
      return Block(this.current_hash, data)
        .then(function(block){
          this.current_hash = block.hash;
          this.chain[block.hash] = block;
          resolve(block);
      }.bind(this));
    }.bind(this));
  }
  
  addToChain(block) {

  }
  getCurrentBlock() {
    return new Promise(function(resolve, reject){
      if (this.current_hash != '-') {
        resolve(this.chain[this.current_hash]);
      } else {
        reject('No Blocks Created');
      }
    }.bind(this))
  }

  searchForBlock(hash) {
    return new Promise(function(resolve, reject) {
      let block = this.chain[hash];
      if (block) {
        resolve(block);
      } else {
        reject('Block Not Found')
      }
    }.bind(this))
  }
}

export default Chain;