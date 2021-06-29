import http from "k6/http";

export let options = {
    stages: [
        { duration: '5s', target: 3 },
        { duration: '10s', target: 2 }
    ]
}
export default function () {
    http.get("https://www.google.com/");
}