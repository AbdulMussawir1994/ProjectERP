const axios = require('axios').default

export default class AxiousServices  {

    post(url,data,IsRequired=false,Header)
    {
        return axios.post(url,data,IsRequired && Header)
    }
}
