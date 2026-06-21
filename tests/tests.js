import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '2m', target: 300 },
    { duration: '2m', target: 500 },
    { duration: '2m', target: 0 }
  ]
};

const BASE_URL = __ENV.API_URL

export default function () {

  let r = Math.random();

  if (r < 0.6) {

    http.get(`${BASE_URL}/api/usuarios`);

  } else if (r < 0.9) {

    const userId = Math.floor(Math.random() * 500) + 1;

    http.get(
      `${BASE_URL}/api/usuarios/${userId}`
    );

  } else {

    const userId = Math.floor(Math.random() * 500) + 1;

    const payload = JSON.stringify({
      usuario_id: userId,
      tipo: 'ingreso',
      monto: 10,
      descripcion: 'Prueba de carga'
    });

    http.post(
      `${BASE_URL}/api/transacciones`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  sleep(Math.random() * 3);
}
