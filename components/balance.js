import { useERC20Balances, useMoralisWeb3Api } from "react-moralis";
import CustomContainer from "./customContainer";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Moralis from "moralis";

const Balance = ({user}) => {
  const Web3Api = useMoralisWeb3Api();
  const { fetchERC20Balances, data } = useERC20Balances();

  const [ ethBalance, setEthBalance ] = useState(0);

  const fetchNativeBalance = async () => {
    const result = await Web3Api.account
      .getNativeBalance({
        chain: "rinkeby",
        address: user.get("ethAddress"),
      })
      .catch((e) => console.log(e));
    if(result.balance){
        setEthBalance(Moralis.Units.FromWei(result.balance));
    }
  };

  useEffect(()=>{
    fetchNativeBalance()
    fetchERC20Balances({
        params: {
            chain: "rinkeby",
            address: user.get("ethAddress")
        }
    })
  },[]);
  console.log(data);
  return (
    <>
      <CustomContainer>
        <Text>My ERC20 Tokens</Text>
        {ethBalance && <Text>💵&nbsp; {ethBalance}ETH</Text>}
      </CustomContainer>
    </>
  );
};

export default Balance;
