const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log('Number of categories:', numbers);

categoryItems.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const categoryElements = item.querySelectorAll("li").length;

    console.log("Category:", categoryName);
    console.log("Elements:", numberOfElements);
});
