import { useCallback, useState } from "react"
import axios from "axios";

import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const {showMessage} = useMessage();
  const [ loading, setLoading ] = useState(false);
  const [ users, setUsers ] = useState([]);
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(() =>
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" })
      )
      .finally(() => setLoading(false));
  }, []);

  return { getUsers, loading, users };
}

