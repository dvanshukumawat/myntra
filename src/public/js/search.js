const searchWrapper = document.querySelector(".search-div");
const inputBox = searchWrapper.querySelector("input");
const suggBox = document.querySelector(".autocom");

console.log(suggBox);


suggestions = [
    ["tshirts for men", "/type/tshirt"],
    ["jeans for men", "/type/jeans"],
    ["shoes for men", "/type/shoes"],
    ["suits for men", "/type/suits"],
    ["caps for men", "/type/caps"],
    ["tops for women", "/type/Top"],
    ["sarees for women", "/type/Saree"],
    ["flats for women", "/type/Flats"],
    ["jeans for women", "/type/Jeans"],
    ["kurta for Women", "/type/Kurta"],
    ["tshirts for kids", "/type/tshirtKids"],
    ["jeans for kids", "/type/jeansKids"],
    ["shoes for kids", "/type/shoesKids"],
]

inputBox.onkeyup = (e) => {
    suggBox.style.display = "flex"
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        // icon.onclick = () => {
        //     webLink = `https://www.google.com/search?q=${userData}`;
        //     linkTag.setAttribute("href", webLink);
        //     linkTag.click();
        // }
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data[0].toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<a class="ac-results" href="/products${data[1]}">${data[0]}</a>`;
        });
        showSuggestions(emptyArray);
    }

    function showSuggestions(list) {
        let listData;
        if (!list.length) {
            userValue = inputBox.value;
            listData = `<li>${userValue}</li>`;

        } else {
            listData = list.join('');
        }
        suggBox.innerHTML = listData;
    }
}