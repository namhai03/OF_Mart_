function deleteItem(deleteButton) {
    // Tìm phần tử cha (div có class "item-cart")
    var itemCart = deleteButton.parentElement;
    // Loại bỏ phần tử cha khỏi DOM
    itemCart.remove();
}