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
                return response.json(); // if the HTTP status code is 200-299
            } else {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
        })
        .catch((error) => {
            console.log(`Error(${error}): ${urlStr}, ${methodStr}, ${bodyStr}`);
            return false;
        });
    return response;
}

/*response.headers.get('X-Total-Count') */

class ServerRequest {
    /*GARAGE */
    static async getCars(page = 1, limit = 0) {
        let urlStr =
            serverURL +
            'garage' +
            '?' +
            new URLSearchParams({ _page: page, _limit: limit });
        let response = await sendRequest(urlStr, 'GET');
        return response;
    }

    static async getCar(id) {
        let urlStr = serverURL + `garage/${id}`;
        let response = await sendRequest(urlStr, 'GET');
        return response;
    }

    static async createCar(name, color) {
        let urlStr = serverURL + 'garage';
        let bodyStr = JSON.stringify({ name: `${name}`, color: `${color}` });
        let response = await sendRequest(urlStr, 'POST', bodyStr);
        return response;
    }

    static async deleteCar(id) {
        let urlStr = serverURL + `garage/${id}`;
        let response = await sendRequest(urlStr, 'DELETE');
        return response;
    }

    /*WINNERS */

    static async getWinners(page = 1, limit = 0, sort = '', order = '') {
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
        return response;
    }

    static async getWinner(id) {
        let urlStr = serverURL + `winners/${id}`;
        let response = await sendRequest(urlStr, 'GET');
        return response;
    }

    static async createWinner(id, wins, time) {
        let urlStr = serverURL + 'garage';
        let bodyStr = JSON.stringify({
            id: `${id}`,
            wins: `${wins}`,
            time: `${time}`,
        });
        let response = await sendRequest(urlStr, 'POST', bodyStr);
        return response;
    }

    static async deleteWinner(id) {
        let urlStr = serverURL + `winners/${id}`;
        let response = await sendRequest(urlStr, 'DELETE');
        return response;
    }
}

export { ServerRequest };
