
import {axiosRequest} from "../../axios.service/axios.service";
import {requestsLinks} from "../urls";

export const todosRequest = {
    getAll:()=>axiosRequest.get(requestsLinks.todos),
}