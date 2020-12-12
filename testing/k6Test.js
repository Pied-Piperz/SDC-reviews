import http from 'k6/http';
import { group, sleep, check } from 'k6';

export const options = {
  stages: [
    { target: 1000, duration: '10s'},
    { target: 1000, duration: '40s'},
    { target: 0, duration: '10s'}
  ],
  // rps: 1000,
  // vus: 20,
  // duration: '15s',
};

export default function () {
  let product = (Math.floor(Math.random()*1000000 + 9000000));
  const res = http.get(`http://localhost:3000/api/one/${product}`);
  sleep(1);
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // group("page_2 - http://localhost:3000/", function() {
	// 	let req, res;
	// 	req = [{
	// 		"method": "get",
	// 		"url": "http://localhost:3000/"
	// 	},{
	// 		"method": "get",
	// 		"url": "http://localhost:3000/stylesheet.css"
	// 	},{
	// 		"method": "get",
	// 		"url": "http://localhost:3000/bundle.js"
	// 	},{
	// 		"method": "get",
	// 		"url": `http://localhost:3000/api/one/${product}`
  //   }];
  //     res = http.batch(req);

	// 	// Random sleep between 20s and 40s
  //   sleep(Math.floor(Math.random()*0.5+1));
  // });
}