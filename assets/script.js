let AddButtons = document.querySelectorAll (".ContentBox");

if (local.Storage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]));
}

AddButtons.forEach(item => {
    let AddButton = item.lastElementChild;

    AddButton.onclick = function (event) {
        event.preventDefault();

        if (local.Storage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }

        let array = JSON.parse(localStorage.getItem("basket"));
        
        let ProductId = this.parentElement.parentElement.getAttribute ("data-id");

        let existProduct = array.find(p=>p.id==ProductId);

        if (existProduct == undefined) {
            array.push({
                id: ProductId,
                imageURL: this.parentElement.previousElementSibling.firstElementChild.getAttribute ("src"),
                name: this.previousElementSibling.previousElementSibling.innerText,
                price: this.previousElementSibling.firstElementChild.innerText,
                count: 1
            })
        }

        else {
            existProduct.count++;
        }

        localStorage.setItem("basket", JSON.stringify(array));
    }
});