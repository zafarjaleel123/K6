import http from "k6/http";
import { check } from "k6";
import { Counter } from "k6/metrics";   

let mycounter=new Counter('errors123');
export let options={
    thresholds:{
        "errors123": ["count<100"],
    }

};
export default function () {
    const response = http.get('https://test-api.k6.io/public/crocodiles/1/');
    console.log(response.body);
    console.log(response.json("name"));
    let body=JSON.parse(response.body);
    console.log(JSON.stringify(body));
    
    let contentOk=response.json("name")==='Bert';

    mycounter.add(contentOk)
    check(response, {
        'resoponse code is 200': (r) => r.status === 200,
    });

}