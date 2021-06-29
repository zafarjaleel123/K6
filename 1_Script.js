import http from 'k6/http';

//Main function where users will be spread
export default function () {
    http.get("https://www.google.com/");

    //Auto format document ALT+SHIFT+F

}
