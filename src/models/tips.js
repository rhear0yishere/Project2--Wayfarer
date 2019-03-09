import axios from 'axios';

const endPoint = 'https://still-journey-70148.herokuapp.com'

class TipModel {
    static all(){
        let request = axios.get(endPoint);
        return request;
    }

    static create(NewPost) {
        let request = axios.post(endPoint, NewPost)
        return request;
    }

    static update (tipId,updatePost) {
        let tipData = updatePost;
        let request = axios.put(`${ endPoint }/${JSON.stringify(tipData)}`);
        return request;
    }

    static delete (tip) {
        let request = axios.delete(`${ endPoint }/${tip._id }`);
        return request; 
    }

}

export default TipModel;