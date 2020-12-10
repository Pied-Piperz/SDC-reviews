import http from 'k6/http';
import { check } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  vus: 30,
  duration: '1s',
};

export default function () {
  const res = http.get('http://localhost:3000/pg/one/10000000');

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
  });
}