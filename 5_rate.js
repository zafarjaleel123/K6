import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics"; 

//export varable that are used in the test
export let errorrate =new Rate('errors');
export let options={
    thresholds :{
        errors: ['rate<0.1'],//less then 10
    },
};
export default function () {
    let response = http.get("http://test.k6.io/");
    console.log('response body ' + response.body.length + ' vu= ' + __VU + ' iteration number ' + __ITER);
    check(response, {
        'response code is 200': (r) => r.status === 200,
    })
    errorrate.add(!check);

}