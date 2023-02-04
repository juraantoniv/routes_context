import {axiosRequest} from "../../axios.service/axios.service";
import {requestsLinks} from "../urls";

export const userRequest = {

    getAll:()=>axiosRequest.get(requestsLinks.users)
}