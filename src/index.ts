import axios from "axios";
import { apiUrl, version } from "./constants";

export const getVerion = () => version;

export const getApi = async () => (await axios.get(apiUrl)).data