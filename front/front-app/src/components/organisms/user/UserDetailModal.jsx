import React, {memo, useEffect, useState} from "react";
import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react"
import PrimaryButton from "../../atoms/button/PrimaryButton";

export const UserDetailModal = memo((props) => {
  const { user, isOpen, onClose, isAdmin = false, } = props;

  const [username, setUsername ] = useState('');
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [phone, setPhone ] = useState('');

  useEffect(()=> {
    setUsername(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onChangeUserName = (e) => setUsername(e.target.value)
  const onChangeName = (e) => setName(e.target.value)
  const onChangeEmail = (e) => setEmail(e.target.value)
  const onChangePhone = (e) => setPhone(e.target.value)

  const onClickUpdate = () => alert();
  return (
    <Modal
      isOpen={isOpen} 
      onClose={onClose} 
      autoFocus={false}
      motionPreset = "slideInBottom"
    >
    <ModalOverlay />
    <ModalContent pb={2}>
      <ModalHeader>ユーザー詳細</ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input value={username} onChange={onChangeUserName} isReadOnly={!isAdmin}/>
          </FormControl>
          <FormControl>
            <FormLabel>フルネーム</FormLabel>
            <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin}/>
          </FormControl>
          <FormControl>
            <FormLabel>MAIL</FormLabel>
            <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin}/>
          </FormControl>
          <FormControl>
            <FormLabel>TEL</FormLabel>
            <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin}/>
          </FormControl>
        </Stack>
      </ModalBody>
      {isAdmin && (
        <ModalFooter>
          <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
        </ModalFooter>
      )}
    </ModalContent>
  </Modal>
  )
})

export default UserDetailModal;