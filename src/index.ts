import axios from "axios";
import { apiUrl, npmVersion, version } from "./constants";

export const getVerion = () => version;

export const getNpmVerion = () => npmVersion;

export const getApi = async () => (await axios.get(apiUrl)).data