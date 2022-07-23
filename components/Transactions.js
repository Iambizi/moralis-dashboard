import { useERC20Balances, useMoralisWeb3Api } from "react-moralis";
import CustomContainer from "./customContainer";
import { Text, Divider, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Moralis from "moralis";

const Transactions = ({user}) => {
    const Web3Api = useMoralisWeb3Api();
    const [Transactions, setTransactions] = useState([]);
    const BASE_URL = "https://rinkeby.etherscan.io/tx/"

    const fetchTransactions = async () =>{
        const data = await Web3Api.account.getTransactions(
            {
                chain: "rinkeby",
                address: user.get("ethAddress"),
                limit: 5
            }
        )
        if(data){
            setTransactions(data.result);
        }
    }
    
    console.log(Transactions);
    useEffect(()=>{
        fetchTransactions();
    },[]);
  return (
    <>
      <CustomContainer>
        <Text fontSize="xl" fontWeight="bold" >
            My last 5 transactions
        </Text>
        {Transactions && Transactions.map(transaction =>(
            <div key={transaction.hash}>
                <Link href={`${BASE_URL}${transaction.hash}`} isExternal>➡️&nbsp; {transaction.hash}</Link>
                <Divider />
            </div>
        ))}
      </CustomContainer>
    </>
  );
};

export default Transactions;
