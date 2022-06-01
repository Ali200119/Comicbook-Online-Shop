let Table = document.querySelector ("#Table").firstElementChild;

if (localStorage.getItem("basket") != null) {
    let array = JSON.parse(localStorage.getItem("basket"));
    
    array.forEach(product => {
        let tr = document.createElement ("tr");
        
        let tdImage = document.createElement ("td");
        let Image = document.createElement ("img");
        Image.src = product.imageURL;
        Image.style.width = "100px";
        tdImage.append(Image);
        
        let tdName = document.createElement ("td");
        tdName.innerText = product.name;

        let tdPrice = document.createElement ("td");
        tdPrice.innerText = "$" + product.price;

        let tdCount = document.createElement ("td");
        tdCount.innerText = product.count;

        tr.append(tdImage, tdName, tdPrice, tdCount);
        Table.lastElementChild.append(tr);
    });
}