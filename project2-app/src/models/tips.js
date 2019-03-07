import axios from 'axios';

const endPoint = `http://localhost:3002/api/tip`

class TipModel {
    static all(){
        let request = axios.get(endPoint);
        return request;
    }

    static create(NewPost) {
        let request = axios.post(endPoint, NewPost)
        return request;
    }

    static update (tipsId,updatePost) {
        let request = axios.put (`${ endPoint }/${ tipsId }`, updatePost)
        return request;
    }

    static delete (tips) {
        let request = axios.delete (`${ endPoint }/${ tips._id }`)
    }

}

export default TipModel;