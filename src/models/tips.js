import axios from 'axios';

// const endPoint = 'https://still-journey-70148.herokuapp.com/api/tip'
const endPoint = 'http://localhost:3001/api/tip'
class TipModel {
    static all(){
        let request = axios.get(endPoint);
        return request;
    }

    static create(NewPost) {
        let auth = {'headers': {'Authorization': `Bearer ${localStorage.token}`}};
        let request = axios.post(endPoint, NewPost, auth);
        return request;
    }

    static update (updatePost) {
        let auth = {'headers': {'Authorization': `Bearer ${localStorage.token}`}};
        let tipData = updatePost;
        let request = axios.put(`${ endPoint }/${JSON.stringify(tipData)}`,{},auth);
        return request;
    }

    static delete (tip) {
        let auth = {'headers': {'Authorization': `Bearer ${localStorage.token}`}};

        let request = axios.delete(`${ endPoint }/${tip._id }`,auth);
        return request; 
    }

}

export default TipModel;