/**
 * Класс реализующий запросы на сервер
 */

class Api {
    constructor(url, token) {
        this.url = url;
        this.token = token;
    }

    _getPromiseRes(res) {
        if (res.ok) { return res.json(); }
        return Promise.reject(res.status, res.text);
    }

    getInitialCards() {

        return fetch(`${this.url}/cards`, {
            headers: {
                authorization: this.token,
            }
        })

            .then(this._getPromiseRes)

            .catch((err) => console.error(err));

    }

    getUserInfo() {

        return fetch(`${this.url}/users/me`, {
            headers: {
                authorization: this.token,
            }
        })

            .then(this._getPromiseRes)

            .catch((err) => console.error(err));

    }

    updateUserInfo(name, about) {

        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                about,
            }),
        })

            .then(this._getPromiseRes)

            .catch((err) => {
                console.error(err);
            });
    }

    postCard(name, link) {

        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                link,
            }),
        })

            .then(this._getPromiseRes)

            .catch((err) => {
                console.error(err);
            });
    }
}

const MY_TOKEN = '87f8a436-5ee7-4266-9bfc-523daea2f9ff';
const SERVER_Url = 'https://nomoreparties.co/cohort4';

const api = new Api(SERVER_Url, MY_TOKEN);

export default api;



