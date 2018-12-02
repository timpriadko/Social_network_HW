/** Message - класс для вывода сообщений на страницу */
class Message {
    constructor() {
        this._messageContainer;
    }

    init() {
        this._setContainer();
    }

    /**
     * @description Отображает на странице сообщение об ошибке с данными с сервера
     * @param {*} text - параметр "text" из ответа с сервера
     * @param {*} error - параметр "error" из ответа с сервера
     */
    show({ text, error }) {
        const template = Message._createMessageTemplate(text, error);
        this._messageContainer.insertAdjacentHTML("afterbegin", template);
    }

    /** Создаеёт на странице блок, в котором будут отображаться сообщения */
    _setContainer() {
        const template = "<div class='message-container'></div>";
        document.body.insertAdjacentHTML("afterbegin", template);
        this._messageContainer = document.querySelector(".message-container");
    }

    /** Шаблон сообщения об ошибке */
    static _createMessageTemplate(text, error) {
        return `
            <div class="alert ${error ? 'alert-danger' : 'alert-success'}">${text}</div>
        `;
    }
}