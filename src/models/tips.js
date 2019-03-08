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

    static update (tipId,updatePost) {
        let tipData = updatePost;
        let request = axios.put(`${ endPoint }/${JSON.stringify(tipData)}`);
        return request;
    }

    static delete (tip) {
        let request = axios.delete(`${ endPoint }/${tip._id }`);
        return request; 
    }


    // static findCity (city) {
    //     let request = axios.get(`${ endPoint }/${city }`);
    //     return request;
    // }


    // static findText(tip) {
    //     let request = axios.get(`${ endPoint }/${tip._text }`);
    //     return request;
    //   }

}

export default TipModel;