class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  _checkValidityApi(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkValidityApi);
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkValidityApi);
  }
  profileUpdateUser(items) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,

      body: JSON.stringify({
        name: items.name,
        about: items.about,
      }),
    }).then(this._checkValidityApi);
  }
  addSendLetter(addCard) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: addCard.name,
        link: addCard.link,
      }),
    }).then(this._checkValidityApi);
  }
  deleteCardsApi(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkValidityApi);
  }
  // likeCardApi(cardId) {
  //   return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
  //     method: "PUT",
  //     headers: this._headers,
  //   }).then(this._checkValidityApi);
  // }
  changeLikeCardStatus(cardId, isLiked) {
    let method = "";
    if (isLiked) {
      method = "PUT";
    } else {
      method = "DELETE";
    }
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: method,
      headers: this._headers,
    }).then(this._checkValidityApi);
  }
  // removeLike(cardId) {
  //   return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
  //     method: "DELETE",
  //     headers: this._headers,
  //   }).then(this._checkValidityApi);
  // }
  updateProfilePicture(photo) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: photo.avatar,
      }),
    }).then(this._checkValidityApi);
  }
}
export default Api;
