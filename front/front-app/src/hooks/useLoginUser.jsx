import { useContext } from "react"
import { LoginUserContext } from "../Providers/LoginUserProvider"

export const useLoginUser = () => useContext(LoginUserContext)