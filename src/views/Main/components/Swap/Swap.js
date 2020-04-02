import React, { useEffect, useState, Fragment } from 'react';
import { Zilliqa } from "services";

const Swap = () => {
  let [balance, setBalance] = useState(null);
  useEffect(() => {
    !Zilliqa.get_pk() && Zilliqa.set_pk();
  }, [])

  return (
    <Fragment>
      <button onClick={() => Zilliqa.get_balance()} >Get Balance</button>
    </Fragment>
  );
}

export default Swap;