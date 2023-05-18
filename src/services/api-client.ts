import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c9df1b4acee64fc8bb546555c3703958'
    }
});