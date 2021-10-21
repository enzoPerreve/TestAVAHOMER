import React, { Fragment, Suspense, lazy,useEffect,useState } from "react";
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const Claimrewards = () => {
        blockchain.smartContract.methods
            .claimRewards()
            .send({
            gasLimit: "285000",
            to: "0x8fba485235DF82FB8439450763fD1E986DFdfCe1",
            from: blockchain.account,
            value: blockchain.web3.utils.toWei(
                (0.2).toString(),
                "ether"
            ),
            })
            .once("error", (err) => {
            console.log(err);
            })
            .then((receipt) => {
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
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href=""
                        target="_blank"
                        rel="noreferrer"
                    >
                        <NavbarBrand>Homer on Avalanche</NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <NavLink
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fab fa-donuts"
                                    size="xl"
                                />
                                &nbsp;Your Homer.
                            </NavLink>
                            <NavLink
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fab fa-twitter"
                                    size="xl"
                                />
                                &nbsp;Twitter
                            </NavLink>
                            <NavLink
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fab fa-discord"
                                    size="xl"
                                />
                                &nbsp;Discord
                            </NavLink>
                            <NavLink
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                MARKETPLACE
                            </NavLink>
                            {blockchain.account === "" ||
                            blockchain.smartContract === null ? (
                                <Button
                                    color="transparent"
                                    className="bg-white text-black ml-4"
                                    ripple="dark"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(connect());
                                        getData();
                                      }}
                                    >

                                        Connect
                                </Button>
                            ) : ( 
                                <Button
                                    color="transparent"
                                    className="bg-white text-black ml-4"
                                    ripple="dark">
                                        {blockchain.account}
                                </Button>
                            )
                            }
                            <Button
                                color="transparent"
                                className="bg-white text-black ml-4"
                                ripple="dark"
                                onClick={(e) => {
                                    e.preventDefault();
                                    Claimrewards();
                                    getData();
                                  }}>
                                    0 : Claim 
                                    
                            </Button>
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
