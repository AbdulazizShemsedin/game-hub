import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:  { 
        key: "99165a26015c403c90847e0fd579ef42"
    }
})

