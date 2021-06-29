import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  var res=http.get('https://test.k6.io');
 console.log('response time was '+String(res.timings.duration+'ms'));
  sleep(1);
}