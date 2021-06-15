import axios from "axios";
import {fetchFruitsError, fetchFruitsSuccess} from "../store/actions/fruits";

class FruitsService {
    static fetchFruits(dispatch){
        return axios.get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
            .then(res => dispatch(fetchFruitsSuccess(res.data)))
            .catch(err => dispatch(fetchFruitsError(err)))
    }
}

export default FruitsService;