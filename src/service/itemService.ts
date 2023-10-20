import {store} from "../store/itemStore";

export class ItemService {

    static baseUrl = "http://localhost:9000";

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
}