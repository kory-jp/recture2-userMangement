import { useCallback, useState } from "react"

export const useSelectUser = () => {
  const [ selectedUser, setSelectedUser ] = useState(null);
  const onSelectUser = useCallback((props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id)
    setSelectedUser(targetUser);
    onOpen();
  }, [])
  return { onSelectUser, selectedUser}
}