import { check } from 'k6';
import { Rate } from 'k6/metrics';
import http from 'k6/http';
export let options={
vus: 5,
duration: '10s',


};
export default function(){
   let res=http.get("http://blazedemo.com");
   check(res,{
        'is status is 200': (r)=>r.status===200,

   });
}