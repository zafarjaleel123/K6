import http from "k6/http";
export let options = {
    //Declare configration
    vus: 5,
    duration: '5s', //1m5s
}
export default function () {
    http.get("https://www.google.com/");

}