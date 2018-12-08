/** UserUI -  добавляет UI-элементы страницы с данными пользователя*/
class UserUI {
    constructor() {
        this._cover = document.querySelector(".user-cover");
        this._userAvatar = document.querySelector(".user-ava");
        this._userName = document.querySelector(".user-name");
    }

    // Отображает аватар, обложку и полное имя пользователя
    renderUserInfo({ avatar, cover, full_name }) {
        this.setUserCover(cover);
        this.setAvatar(avatar);
        this.setName(full_name);
    }

    // Устанавливает обложку пользователя
    setUserCover(url) {
        this._cover.style.background = `url("${url}") no-repeat center / cover`;
    }

    // Устанавливает аватар пользователя
    setAvatar(url) {
        const template = `<img src="${url}" alt="">`;
        this._userAvatar.insertAdjacentHTML("afterbegin", template);
    }

    // Устанавливает полное имя пользователя
    setName(name) {
        this._userName.textContent = name;
    }
}