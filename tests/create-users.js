import http from 'k6/http';

export const options = {
  vus: 1,
  iterations: 500
};

// pasamos la ip como argumento
const BASE_URL = __ENV.API_URL 

export default function () {

  const id = __ITER + 1;

  const payload = JSON.stringify({
    nombre: `Usuario${id}`,
    email: `usuario${id}@test.com`,
    saldo: 1000
  });

  http.post(
    `${BASE_URL}/api/usuarios`,
    payload,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}
