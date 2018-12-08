class ImageService {
    remove(id) {

    }

    /**
     * @description Получает данные о картинке с сервера
     * @param {String} id - id картинки
     */
    getInfo(id) {
        return new Promise((resolve, reject) => {
            fetch(`${env.apiUrl}/public/users/image-info/${id}`)
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }
}