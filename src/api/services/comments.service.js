import {axiosRequest} from "../../axios.service/axios.service";
import {requestsLinks} from "../urls";

export const commentsRequest = {
    getAll:()=>axiosRequest.get(requestsLinks.comments),
    getByID:(id)=>axiosRequest.get(`${requestsLinks.postById}/${id}`)
}