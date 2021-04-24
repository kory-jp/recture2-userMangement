import { useDisclosure } from "@chakra-ui/hooks";
import {  Center, Stack, Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, {memo, useCallback, useEffect} from "react";

import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import UserCard from "../organisms/user/UserCard";
import UserDetailModal from "../organisms/user/UserDetailModal";

export const UserManagement = memo(() => {
  const {isOpen, onOpen, onClose } = useDisclosure();
  const {getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser} = useLoginUser();


  useEffect(()=> getUsers(), []);
  const onClickUser = useCallback((id)=> {
    onSelectUser({id, users, onOpen})
  },[users, onSelectUser, onOpen]);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner/>
        </Center>
      ) : (
            <Wrap p={{ base: 4, md: 10 }}>
              {users.map((user)=> (
                <WrapItem key={user.id} mx="auto">
                  <UserCard 
                    id={user.id}
                    imageUrl="https://source.unsplash.com/random" 
                    userName={user.username}
                    fullName={user.name}
                    onClick={onClickUser}
                  />
                </WrapItem>
              ))}
          </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose}/>
    </>
  )
})

export default UserManagement;