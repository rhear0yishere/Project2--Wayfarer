import axios from 'axios';

const endPoint = 'http://localhost:3001/user';

class UserModel {

static all() {
    let request = axios.get(endPoint);
    return request;
}

static signup(user){
    let request = axios.post(`${endPoint}/signup`,user);
    return request;

}

static login() {
    let request = axios.post(`${endPoint}/login`,user);
    return request;
}

static delete(user) {
    let request = axios.delete(`${endPoint}/${user._id}`);
    return request;
}


}
export default UserModel;