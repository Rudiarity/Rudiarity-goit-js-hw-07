const categories = document.querySelector("#categories"); 
const categoriesItems = document.querySelectorAll(".item");

console.log("Numbers of categories:",categoriesItems.length); 

categoriesItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryItemsCount = item.querySelectorAll('ul > li').length;
    
    console.log (`Category: ${categoryTitle}`);
    console.log (`Elements:${categoryItemsCount}`);
});

