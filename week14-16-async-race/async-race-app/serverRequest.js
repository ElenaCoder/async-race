const serverURL = 'http://127.0.0.1:3000/';

async function sendRequest(urlStr, methodStr, bodyStr = '') {
    let response;

    if (methodStr === 'GET') {
        response = await fetch(urlStr);
    } else {
        response = await fetch(urlStr, {
            method: methodStr,
            headers: {
                'Content-Type': 'application/json',
            },
            body: bodyStr,
        });
    }

    if (response.ok) {
        return response.json(); // if the HTTP status code is 200-299
    } else {
        (error) =>
            console.log(`Error(${error}): ${urlStr}, ${methodStr}, ${bodyStr}`);
    }
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
        let urlStr =
            serverURL + 'garage' + '?' + new URLSearchParams({ _id: id });
        let response = await sendRequest(urlStr, 'GET');
        return response;
    }

    static async createCar(name, color) {
        let urlStr = serverURL + 'garage';
        let bodyStr = JSON.stringify({ name: `${name}`, color: `${color}`});
        let response = await sendRequest(urlStr, 'POST', bodyStr);
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
        let urlStr =
            serverURL + 'winners' + '?' + new URLSearchParams({ _id: id });
        let response = await sendRequest(urlStr, 'GET');
        return response;
    }

    static async createWinner(id, wins,time) {
        let urlStr = serverURL + 'garage';
        let bodyStr = JSON.stringify({ id: `${id}`, wins: `${wins}`, time: `${time}`});
        let response = await sendRequest(urlStr, 'POST', bodyStr);
        return response;
    }
}

export { ServerRequest };
