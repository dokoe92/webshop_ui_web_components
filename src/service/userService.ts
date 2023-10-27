type User = {
    id: number,
    username: string,
    password: string,
    shoppingCart: object
}
export class UserService {

    static user:User;

    static baseUrl = "http://localhost:9000/user";
    static newUserUrl = UserService.baseUrl + "/new";
    static getUserUrl = UserService.baseUrl + "/get-user/"

    static async createNewUser(username: String, password: String) {
        const object = {
            username: username,
            password: password
        }
        const response:User = await fetch(this.newUserUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then(response => response.json())
        UserService.user = response;
        console.log(UserService.user)
    }

    static async getUser() {
        UserService.user = await fetch(UserService.getUserUrl).then(data => data.json());
        console.log(UserService.user);
    }

}