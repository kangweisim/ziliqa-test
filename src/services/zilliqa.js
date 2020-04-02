const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const {
  toBech32Address,
  getAddressFromPrivateKey,
} = require('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');

let pk = "";
let address = "";

export function set_pk() {
  let key = prompt("What's your private key?", "");
  pk = key;
  try {
    address = getAddressFromPrivateKey(pk);
    get_balance({ pk_check: false });
  } catch (e) {
    if (e.message === "Private key is not correct") {
      console.log("Invalid private key");
    } else {
      console.log(e);
    }
    pk = "";
  }
}

export function get_pk() {
  return pk;
}

export function get_address() {
  return address;
}

export async function get_balance({ pk_check = true } = {}) {
  // if true, pk_check prompts for pk is there is no pk stored;
  if (!pk) {
    console.log("Oops, no private key");
    if (pk_check) return set_pk();
  }
  let balance = await zilliqa.blockchain.getBalance(address);
  console.log(balance);
  console.log(`Your balance is: ${balance.result.balance} (nonce:${balance.result.nonce})`);
}