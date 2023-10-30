import {store} from "../store/itemStore";
import {UserService} from "./userService";

export class ItemService {

    static baseUrl = "http://localhost:9000";

    static addtoShoppingCartURL = ItemService.baseUrl + "/cart/add"
    static clearShoppingCartUrl = ItemService.baseUrl + "/cart/clear-cart/"

    static async getAllItems(category: string) {
        let requestOn: string = "";
        category = category.toLowerCase()
        switch (category) {
            case "pants": {
                requestOn = this.baseUrl + "/items/pants";
                break;
            }
            case "pullovers": {
                requestOn = this.baseUrl + "/items/pullovers";
                break;
            }
            case "shirts": {
                requestOn = this.baseUrl + "/items/shirts";
                break;
            }
            case "shoes": {
                requestOn = this.baseUrl + "/items/shoes";
                break;
            }
        }
        if (requestOn != "") {
            const response =  await this.fetchItems(requestOn);
            store.setItemData(response);
            console.log("store", store.data);
        } else {
            console.log("Please use valid path!");
        }
    }

    static async fetchItems(url: string) {
        const response = await fetch(url);
        return response.json();  // Convert the response to JSON and return
    }

    static async addToShoppingCart(itemId: number) {
        const addItemDto = {
            itemId : itemId,
            userId : UserService.user.userId
        }
        const response = await fetch(ItemService.addtoShoppingCartURL, {
            method: "POST",
            body: JSON.stringify(addItemDto),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(data => data.json());

        console.log(response);
    }

    static async clearShoppingCart() {
        const response = await fetch(ItemService.clearShoppingCartUrl + UserService.user.userId, {
            method: "DELETE"
        }).then(data => data.json());
        console.log(response)
    }


}