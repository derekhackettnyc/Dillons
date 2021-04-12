import axios from 'axios';

export const hostServer = 'http://3littlebirdsnyc.com/dj3'

export default axios.create({
    baseURL:`${hostServer}/php/`,
    headers: {'Content-Type': 'multipart/form-data' } // Need for sending form data. A MUST!
})
