import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, Suspense, lazy,useEffect,useState } from "react";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import { Provider } from "react-redux";

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
    const [claimingNft, setClaimingNft] = useState(false);
  
    const claimNFTs = (_amount) => {
      if (_amount <= 0) {
        return;
      }
      setFeedback("Minting your AlpsHunks...");
      setClaimingNft(true);
      blockchain.smartContract.methods
        .mint(_amount)
        .send({
          gasLimit: "285000",
          to: "0xf1De1A5c5a0091F54b8d6c87CDab1503c10c259B",
          from: blockchain.account,
          value: blockchain.web3.utils.toWei(
            (_amount).toString(),
            "ether"
          ),
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          setFeedback(
            "WOW, you now own a AlpsHunks. go visit NFTTRADE to view it."
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    };
  
    const getData = () => {
      if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
      }
    };
  
    useEffect(() => {
      getData();
    }, [blockchain.account]);
  
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
