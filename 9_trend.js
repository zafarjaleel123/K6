import http from "k6/http";
import { Trend } from "k6/metrics";

let apitrend=new Trend("apitrendduration");
let googleapi=new Trend("google duration");

export default function(){

    let response=http.get('https://test-api.k6.io/public/crocodiles/1/');
    apitrend.add(response.timings.duration);

    let response1=http.get('https://www.google.com/');
    googleapi.add(response1.timings.duration);
}
