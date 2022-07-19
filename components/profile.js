import { useState } from "react";
import { FormControl, FormLabel, Text, Input, Button } from "@chakra-ui/react";
import CustomContainer from "./customContainer";

const Profile = ({ user }) => {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <>
      <CustomContainer>
        <Text>
          <b>🥸&nbsp; Username: {user.getUsername()}</b>
        </Text>
        <Text>
          <b>💵&nbsp; Wallet Address: {user.get("ethAddress")}</b>
        </Text>
        <form>
          <FormControl>
            <FormLabel htmlFor="username">Set a new username</FormLabel>
            <Input
              id="username"
              type="text"
              placeholder="ex. busy metal"
              value={input}
              onChange={e=>setInput(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="purple">
            ✅&nbsp; Change Username
          </Button>
        </form>
      </CustomContainer>
    </>
  );
};

export default Profile;
