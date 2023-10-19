

class ItemStore {
    private data = {};
    private listeners = [];

    setItemData(itemData: {}) {
        this.data = itemData;
        this.notifyAll();
    }

    addListeners(listener: any) {
        // @ts-ignore
        this.listeners.push(listener);
    }

    notifyAll() {
        for (let listener of this.listeners) {
            // @ts-ignore
            listener(this.data)
        }
    }
}

const store = new ItemStore();
export { store };