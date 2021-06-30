import http from "k6/http";
import { check } from "k6";
export default function () {
    var url = "https://test.k6.io/contacts.php";
    var param = {
        Headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': '_ga=GA1.2.686971632.1623605119; _lfa=LF1.1.6941cd2439c47d98.1624533449219; _hjid=5d80a20d-7e45-49fa-b045-3b250ee648a8; _gid=GA1.2.2011139658.1624978204',
            'Host': 'test.k6.io',
            'Referer': 'http://test.k6.io/',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
        },

    };
    const response = http.get(url, param);
    check(response, {
        'respone code is 200': (r) => r.status === 200,
    });
    console.log(response.body);
}