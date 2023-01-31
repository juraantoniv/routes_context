import axios from "axios";
import {baseURL} from "../api/urls";


export const axiosRequest = axios.create({baseURL})