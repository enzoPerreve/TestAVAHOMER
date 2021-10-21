import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
import Button from '@material-tailwind/react/Button';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";


export default function Header() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    
    
    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
        }
    };

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Homer.</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                            Homer. Reflection Collection on Avalanche 
                            </LeadText>
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

                                        Connect to Avalanche Network
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
                            <LeadText color="gray-200">
                            Launching soon !
                            </LeadText>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
