const serverURL = 'http://127.0.0.1:3000/';

async function sendRequest(urlStr, methodStr, bodyStr = '') {
  const param = {
    method: methodStr,
  };
  if (methodStr !== 'GET') {
    param.headers = {
      'Content-Type': 'application/json',
    };

    param.body = bodyStr;
  }

  const respResult = await fetch(urlStr, param)
    .then(async (response) => {
      if (response.ok) {
        return response; // if the HTTP status code is 200-299
      }
      return Promise.reject(response.status);
    })
    .catch((error) => {
      console.log(`Error(${error}): ${urlStr}, ${methodStr}, ${bodyStr}.`);
      return null;
    });
  return respResult;
}

/* response.headers.get('X-Total-Count') */

class ServerRequest {
  /* GARAGE */
  static async getCars(page = 1, limit = 7) {
    const urlStr = `${serverURL
    }garage`
            + `?${
              new URLSearchParams({ _page: page, _limit: limit })}`;
    const response = await sendRequest(urlStr, 'GET');
    const totalCount = response.headers.get('X-Total-Count');
    return {
      data: response.json(),
      totalCount,
    };
  }

  static async getCar(id) {
    const urlStr = `${serverURL}garage/${id}`;
    const response = await sendRequest(urlStr, 'GET');
    return response.json();
  }

  static async createCar(name, color) {
    const urlStr = `${serverURL}garage`;
    const bodyStr = JSON.stringify({ name: `${name}`, color: `${color}` });
    const response = await sendRequest(urlStr, 'POST', bodyStr);
    return response.json();
  }

  static async deleteCar(id) {
    const urlStr = `${serverURL}garage/${id}`;
    const response = await sendRequest(urlStr, 'DELETE');
    return response.json();
  }

  static async updateCar(id, name, color) {
    const urlStr = `${serverURL}garage/${id}`;
    const bodyStr = JSON.stringify({ name: `${name}`, color: `${color}` });
    const response = await sendRequest(urlStr, 'PUT', bodyStr);
    return response.json();
  }

  static async startCarEngine(id) {
    const urlStr = `${serverURL
    }engine`
            + `?${
              new URLSearchParams({ id, status: 'started' })}`;
    const response = await sendRequest(urlStr, 'PATCH');
    return response.json();
  }

  static async stopCarEngine(id) {
    const urlStr = `${serverURL
    }engine`
            + `?${
              new URLSearchParams({ id, status: 'stopped' })}`;
    const response = await sendRequest(urlStr, 'PATCH');
    return response.json();
  }

  static async switchtoDriveMode(id) {
    const urlStr = `${serverURL
    }engine`
            + `?${
              new URLSearchParams({ id, status: 'drive' })}`;
    const response = await sendRequest(urlStr, 'PATCH');
    return response.json();
  }

  /* WINNERS */

  static async getWinners(page = 1, limit = 10, sort = '', order = '') {
    const urlStr = `${serverURL
    }winners`
            + `?${
              new URLSearchParams({
                _page: page,
                _limit: limit,
                _sort: sort,
                _order: order,
              })}`;
    const response = await sendRequest(urlStr, 'GET');
    const totalCount = response.headers.get('X-Total-Count');
    return {
      data: response.json(),
      totalCount,
    };
  }

  static async getWinner(id) {
    const urlStr = `${serverURL}winners/${id}`;
    const response = await sendRequest(urlStr, 'GET');
    return response.json();
  }

  static async createWinner(id, wins, time) {
    const urlStr = `${serverURL}winners`;
    const bodyStr = JSON.stringify({
      id,
      wins,
      time,
    });
    const response = await sendRequest(urlStr, 'POST', bodyStr);
    return response.json();
  }

  static async deleteWinner(id) {
    const urlStr = `${serverURL}winners/${id}`;
    const response = await sendRequest(urlStr, 'DELETE');
    return response.json();
  }

  static async updateWinner(id, wins, time) {
    const urlStr = `${serverURL}winners/${id}`;
    const bodyStr = JSON.stringify({ wins, time });
    const response = await sendRequest(urlStr, 'PUT', bodyStr);
    return response.json();
  }
}

export default ServerRequest;
