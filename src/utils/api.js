class Api{
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }
    _getResponseData(res) {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    } 
    //Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
            method: 'GET',
          })
          .then(res => this._getResponseData(res))
      }
    // Загрузка информации о пользователе с сервера
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
            method: 'GET'
          })
          .then(res => this._getResponseData(res))
      }
    //Редактирование профиля
    updateUserProfile({ name, about }) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ name, about })
      })
      .then(res => this._getResponseData(res))
    }
    // Метод для добавления новой карточки
    addCard({ name, link}) {
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({ name, link})
      })
      .then(res => this._getResponseData(res))
  }
    setLike(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
      })
      .then(res => this._getResponseData(res))
    }
    delLike(cardId){
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => this._getResponseData(res))
    }
    deleteCard(cardId){
      return fetch(`${this._url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => this._getResponseData(res))
    }
    setAvatar(link){
      return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify( link )
      })
      .then(res => this._getResponseData(res))
    }
}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-77',
    headers: {
      Authorization: '541229d3-61b8-44d0-8441-0c3c4441404d',
      'Content-Type': 'application/json'
    }
  });
export default api;