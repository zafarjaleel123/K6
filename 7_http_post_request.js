import http from "k6/http";
export default function(){
var url='http://test.k6.io/login';
var payload=JSON.stringify({
    email : 'zafar',
    password:'zafar@123',

});
var parameter={
    Headers:{
        'Content-Type': 'application/json',
    }
};
http.post(url,payload,parameter);
}