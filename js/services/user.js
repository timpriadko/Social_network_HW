/** UserService - класс для работы с сервером */
class UserService {

    // Получает данные о залогиненом пользователе с сервера
    getInfo() {
        return new Promise((resolve, reject) => {
            // Get token 
            const token = localStorage.getItem("social_user_token");
            // Get id
            const id = localStorage.getItem("social_user_id");
            if (!token || !id) return reject("Unauthorized.");

            fetch(`${env.apiUrl}/public/users/get-info/${id}`, {
                    method: "GET",
                    headers: {
                        "x-access-token": token
                    }
                })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        })
    }

    // Загружает на сервер обложку пользователя
    uploadCover(file) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('coverImg', file);
            // Get token 
            const token = localStorage.getItem("social_user_token");
            // Get id
            const id = localStorage.getItem("social_user_id");
            if (!token || !id) return reject("Unauthorized.");

            fetch(`${env.apiUrl}/public/users/upload-cover/${id}`, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "x-access-token": token
                    }
                })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }

    // Загружает на сервер картинку пользователя
    uploadImg(photo) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("userPhotos", photo);
            const token = localStorage.getItem("social_user_token");
            const id = localStorage.getItem("social_user_id");
            if (!token || !id) return reject("Unauthorized.");

            fetch(`${env.apiUrl}/public/users/upload-photos/${id}`, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "x-access-token": token
                    }
                })
                .then(response => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }

    // Удаляет с сервера картинку пользователя
    deleteImg(imgId, imgSrc) {
        return new Promise((resolve, reject) => {
            const id = localStorage.getItem("social_user_id");
            const token = localStorage.getItem("social_user_token");
            if (!token || !id) return reject("Unauthorized.");

            fetch(`${env.apiUrl}/public/users/remove-photo/${id}`, {
                    method: "DELETE",
                    body: JSON.stringify({
                        image_id: imgId,
                        image_url: imgSrc
                    }),
                    headers: {
                        "Content-type": "application/json",
                        "x-access-token": token
                    }
                })
                .then(response => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        })
    }
}