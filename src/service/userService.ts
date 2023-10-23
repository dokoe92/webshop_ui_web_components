export class UserService {

    static baseUrl = "http://localhost:9000/user";
    static newUserUrl = UserService.baseUrl + "/new";

    static async createNewUser(username: String, password: String) {
        const object = {
            username: username,
            password: password
        }
        const response = await fetch(this.newUserUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then(response => response.json())
        console.log(response);
    }

}