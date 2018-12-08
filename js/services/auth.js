/** AuthService - класс для отправки запросов на сервер */
class AuthService {

    /**
     * @description Отправляет запрос для входа на сервер с данными с инпутов
     * @param {String} email - "email" с инпута формы входа
     * @param {String} password - "password" с инпута формы входа
     */
    login(email, password) {
        return new Promise((resolve, reject) => {
            fetch(`${env.apiUrl}/public/auth/login`, {
                    method: "POST",
                    body: JSON.stringify({ email, password }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }

    /**
     * @description Отправляет запрос для регистрации на сервер с данными с инпутов
     * @param {String} email - "email" с инпута формы регистрации
     * @param {String} password - "emapasswordil" с инпута формы регистрации
     * @param {String} nickname - "emanicknameil" с инпута формы регистрации
     * @param {String} first_name - "emfirst_nameail" с инпута формы регистрации
     * @param {String} last_name - "emlast_nameail" с инпута формы регистрации
     * @param {Number} phone - "emphoneail" с инпута формы регистрации
     * @param {String} gender_orientation - "emgender_orientationail" с инпута формы регистрации
     * @param {String} city - "city" с инпута формы регистрации
     * @param {String} country - "emacountryil" с инпута формы регистрации
     * @param {Number} date_of_birth_day - "emadate_of_birth_dayil" с инпута формы регистрации
     * @param {Number} date_of_birth_month - "emadate_of_birth_monthil" с инпута формы регистрации
     * @param {Number} date_of_birth_year - "emadate_of_birth_yearil" с инпута формы регистрации
     */
    register(first_name, last_name, nickname, date_of_birth_day, date_of_birth_month, date_of_birth_year, country, city, gender_orientation, email, phone, password) {
        return new Promise((resolve, reject) => {
            fetch(`${env.apiUrl}/public/auth/signup`, {
                    method: "POST",
                    body: JSON.stringify({ first_name, last_name, nickname, date_of_birth_day, date_of_birth_month, date_of_birth_year, country, city, gender_orientation, email, phone, password }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }

    /**
     * @description Отправляет запрос для сброса пароля на сервер с данными с инпутов
     * @param {String} email - "email" с инпута формы сброса пароля
     */
    reset_password(email) {
        return new Promise((resolve, reject) => {
            fetch(`https://mostlikedperson-api.herokuapp.com/api/public/auth/reset-password`, {
                    method: "POST",
                    body: JSON.stringify({ email }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then((data) => resolve(data))
                .catch((error) => reject(error))
        });
    }
}