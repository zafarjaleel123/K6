import http from "k6/http";
import { check } from "k6";

export default function () {
    let res = http.get("http://test.k6.io/");
    console.log('response body ' + res.body.length + ' vu= ' + __VU +' iteration number '+__ITER);

    check(res, {

        'status code is 200': (r) => r.status === 200,
        'response body in byte': (r) => r.body.length === 11105,
    });
}