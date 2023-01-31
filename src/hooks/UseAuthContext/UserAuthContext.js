import {useContext} from "react";
import {AuthContext} from "../../hoc/Auth.provider";

const useAuthContext =()=>useContext(AuthContext)

export {
    useAuthContext
}