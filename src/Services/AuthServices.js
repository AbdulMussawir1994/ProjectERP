import configuration from '../Configurations/configuration';
import AxiousServices from "./AxiousServices";

const axiousServices = new AxiousServices();

export default class AuthServices {
    Signup(data){
        return axiousServices.post(configuration.SignUp, data, false)
    }

    Signin(data){
        return axiousServices.post(configuration.SignIn, data,false)
    }
}
