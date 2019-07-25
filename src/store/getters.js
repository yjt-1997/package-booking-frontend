export const getters = {
    getItems: (state) => {
        let status = state.status;
        if (status == "all") {
            return state.items;
        } else {
            return state.items.filter(item => item.status == status);
        }
    }
}