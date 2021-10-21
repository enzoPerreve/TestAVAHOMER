import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import HomerRock from 'assets/img/HomerRock.jpg';
import Button from '@material-tailwind/react/Button';
import React, { useState, useEffect } from 'react';
import { parseEther } from '@ethersproject/units';
import gif from 'assets/img/HomerGIF.gif';

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

export default function WorkingSection() {

    const [mintAmount, setMintAmount] = useState(1);
    const {mintToken} = 0;

    const onMint = () => {
        const mintPrice = parseEther(`${mintAmount * 2.5}`);
        mintToken(mintAmount, { value: mintPrice });
      };
    const dispatch = useDispatch();
        const blockchain = useSelector((state) => state.blockchain);
        const data = useSelector((state) => state.data);
        const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
        const [claimingNft, setClaimingNft] = useState(false);

        const claimNFTs = (_amount) => {
        if (_amount <= 0) {
            return;
        }
        setFeedback("Minting your Homer...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .purchase(_amount)
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


        const Claimrewards = () => {
            setFeedback("Minting your Homer...");
            setClaimingNft(true);
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
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="red" icon="stars" title="About us">
                    The Homer are NFT that deserve all your intention with more than 120 accessories they are all unique! 
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Reflections"
                    >
                    all the Minters of Homer will receive 20% of minting fees. 
                    Original minters of Homer earn 4% royalties each time their Homer is resold!
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Verified NFT"
                    >
                        Once we reach 2000 mint we will be verified on NFT Trade a place of exchange, sale, purchase of NFT where you could also see your NFT
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-8/12 px-4 mx-auto">
                        <Button className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-75 h-55 mb-6 shadow-lg rounded-full bg-white"
                        color="amber"
                        buttonType="filled"
                        size="lg"
                        rounded={false}
                        block={true}
                        iconOnly={false}
                        ripple="light"
                        onClick={() => mintAmount > 1 && setMintAmount(mintAmount - 1)} >
                            -                       
                        </Button>
                        <Button
                        className="text-black-gray-800 p-3 text-center inline-flex items-center justify-center w-75 h-155 mb-6 shadow-lg rounded-full bg-white" 
                        color="amber"
                        buttonType="outline"
                        size="lg"
                        rounded={false}
                        block={true}
                        iconOnly={false}
                        ripple="dark"
                        > 
                        {mintAmount} 
                        </Button>

                        <Button    
                        className="text-black-gray-800 p-3 text-center inline-flex items-center justify-center w-75 h-155 mb-6 shadow-lg rounded-full bg-white"        
                        color="amber"
                        buttonType="filled"
                        size="lg"
                        rounded={false}
                        block={true}
                        iconOnly={false}
                        ripple="light"
                        onClick={() => mintAmount < 20 && setMintAmount(mintAmount + 1)}>
                            +                      
                        </Button>
                        <Button                           
                            color="amber"
                            buttonType="filled"
                            size="lg"
                            rounded={false}
                            block={true}
                            iconOnly={false}
                            ripple="light"
                            className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-75 h-55 mb-6 shadow-lg rounded-full bg-white"                    
                            /*onClick={(e) => {
                                e.preventDefault();
                                claimNFTs(1);
                                getData();
                              }}*/
                        >
                        Soon Available /*mint*/
                        </Button>
                        <H4 color="gray">About Homer Club</H4>
                        <LeadText color="blueGray">
                        D'oh ! All Homer are cool and love donuts, but some are cooler than others. That’s why we’ve established a trait rarity system to tell which of our frens are likely destined for greatness.
                        </LeadText>
                        <LeadText color="blueGray">
                        There are 120 total traits in the club and these have been categorized into a tier based system. Traits are ranked from ‘common’ all the way through to ‘epic’ and each rank has a corresponding % chance of being minted.
                        </LeadText>
                        
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={gif} />
                            <CardBody>
                                <H6 color="gray">Preview</H6>
                                <Paragraph color="blueGray">

                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
