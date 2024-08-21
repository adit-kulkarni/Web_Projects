function addShoppingItem(){
    
    
    const inputField = document.querySelector(".inputText");
    
    const inputText = inputField.value.trim();
    // console.log(inputText)
    const shoppingList = document.querySelector(".shoppingList");
    const childItem = document.createElement('li');
    const childItemSpan = document.createElement('span');
    childItemSpan.textContent = inputText;
    console.log(inputText);
    console.log(childItemSpan.textContent)
    childItemSpan.style.color = "Black"
    const childItemButton = document.createElement('button')
    childItemButton.textContent = "Delete";
    childItemButton.style.marginLeft = "10px";
    childItemButton.addEventListener("click", function() {
        childItem.remove();
    });

    childItem.appendChild(childItemSpan);
    childItem.appendChild(childItemButton);
    shoppingList.appendChild(childItem);

    inputField.value = '';
    inputField.focus();
}


document.addEventListener("DOMContentLoaded", function() {
    // Select the button by its ID
    const addItemButton = document.querySelector(".btn");
    
    // Add the click event listener to the button
    addItemButton.addEventListener("click", addShoppingItem);
});