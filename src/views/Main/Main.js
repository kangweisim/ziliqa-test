import { makeStyles } from '@material-ui/styles';
import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import useRouter from 'utils/useRouter';
import { Pool, Swap } from './components';

const useStyles = makeStyles(theme => ({
}));

const Main = props => {
  // const classes = useStyles();
  const router = useRouter();

  return (
    <Fragment>
      <div>
        <button disabled={router.location.pathname === "/swap"} onClick={() => router.history.push("/swap")}>Swap</button>
        <button disabled={router.location.pathname === "/pool"} onClick={() => router.history.push("/pool")}>Pool</button>
      </div>
      <Switch>
        <Route exact path="/swap" component={Swap} />
        <Route exact path="/pool" component={Pool} />
        <Redirect to="/swap" />
      </Switch>
    </Fragment>

  );
}

export default Main;