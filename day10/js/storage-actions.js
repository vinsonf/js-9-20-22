// setItem(key, value)
// getItem(key)
// removeItem(key)
// clear()


localStorage.setItem('name', 'John');
localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

export function addItemsToLocalStore(items){
    localStorage.setItem('items', JSON.stringify(items));
}

export function getItemsFromLocalStore(){
    if (localStorage.getItem('items')) {
        return JSON.parse(localStorage.getItem('items'));
    } else {
        return [];
    }
}