const serverURL = 'http://127.0.0.1:3000/';

async function sendRequest(urlStr, methodStr, bodyStr = '') {
    let param = {
        method: methodStr,
    };
    if (methodStr !== 'GET') {
        param.headers = {
            'Content-Type': 'application/json',
        };

        param.body = bodyStr;
    }

    let response = await fetch(urlStr, param)
        .then(async (response) => {
            if (response.ok) {
                return response; // if the HTTP status code is 200-299
            } else {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
        })
        .catch((error) => {
            console.log(`Error(${error}): ${urlStr}, ${methodStr}, ${bodyStr}`);
            return null;
        });
    return response;
}

/*response.headers.get('X-Total-Count') */

class ServerRequest {
    /*GARAGE */
    static async getCars(page = 1, limit = 7) {
        let urlStr =
            serverURL +
            'garage' +
            '?' +
            new URLSearchParams({ _page: page, _limit: limit });
        let response = await sendRequest(urlStr, 'GET');
        let totalCount = response.headers.get('X-Total-Count');
        return {
            data: response.json(),
            totalCount: totalCount,
        };
    }

    static async getCar(id) {
        let urlStr = serverURL + `garage/${id}`;
        let response = await sendRequest(urlStr, 'GET');
        return response.json();
    }

    static async createCar(name, color) {
        let urlStr = serverURL + 'garage';
        let bodyStr = JSON.stringify({ name: `${name}`, color: `${color}` });
        let response = await sendRequest(urlStr, 'POST', bodyStr);
        return response.json();
    }

    static async deleteCar(id) {
        let urlStr = serverURL + `garage/${id}`;
        let response = await sendRequest(urlStr, 'DELETE');
        return response.json();
    }

    static async updateCar(id, name, color) {
        let urlStr = serverURL + `garage/${id}`;
        let bodyStr = JSON.stringify({ name: `${name}`, color: `${color}` });
        let response = await sendRequest(urlStr, 'PUT', bodyStr);
        return response.json();
    }

    /*WINNERS */

    static async getWinners(page = 1, limit = 10, sort = '', order = '') {
        let urlStr =
            serverURL +
            'winners' +
            '?' +
            new URLSearchParams({
                _page: page,
                _limit: limit,
                _sort: sort,
                _order: order,
            });
        let response = await sendRequest(urlStr, 'GET');
        let totalCount = response.headers.get('X-Total-Count');
        return {
            data: response.json(),
            totalCount: totalCount,
        };
    }

    static async getWinner(id) {
        let urlStr = serverURL + `winners/${id}`;
        let response = await sendRequest(urlStr, 'GET');
        return response.json();
    }

    static async createWinner(id, wins, time) {
        let urlStr = serverURL + 'garage';
        let bodyStr = JSON.stringify({
            id: `${id}`,
            wins: `${wins}`,
            time: `${time}`,
        });
        let response = await sendRequest(urlStr, 'POST', bodyStr);
        return response.json();
    }

    static async deleteWinner(id) {
        let urlStr = serverURL + `winners/${id}`;
        let response = await sendRequest(urlStr, 'DELETE');
        return response.json();
    }

    static async updateWinner(id, wins, time) {
        let urlStr = serverURL + `winners/${id}`;
        let bodyStr = JSON.stringify({ wins: `${wins}`, time: `${time}` });
        let response = await sendRequest(urlStr, 'PUT', bodyStr);
        return response.json();
    }
}

export { ServerRequest };
