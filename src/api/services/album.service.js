import {axiosRequest} from "../../axios.service/axios.service";
import {requestsLinks} from "../urls";

export const albumRequest = {
    getAll:()=>axiosRequest.get(requestsLinks.albums)
}