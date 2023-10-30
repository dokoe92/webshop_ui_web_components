type UserDetails = {
    userId: number,
    shoppingCartDto: object
}

export class UserService {

    static user: UserDetails;

    static baseUrl = "http://localhost:9000/user";
    static newUserUrl = UserService.baseUrl + "/new";
    static getUserUrl = UserService.baseUrl + "/get-user/"

    private static observers = [];



    static async createNewUser(username: String, password: String) {
        const object = {
            username: username,
            password: password
        }
        UserService.user = await fetch(this.newUserUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then(response => response.json())
        console.log(UserService.user, "User created")
    }

    static async getUser(userId:number) {
        UserService.user = await fetch(UserService.getUserUrl + userId).then(data => data.json());
        console.log(UserService.user, "User Details");
    }

}