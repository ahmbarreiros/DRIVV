import axios from "axios";

const poster = (url: string, data: string) => axios.post(url, data);

export default poster;
