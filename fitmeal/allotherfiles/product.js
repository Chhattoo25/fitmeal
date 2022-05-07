var container = document.getElementById("container");

var data = [

  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/25-550x550.jpg",
    price: "1200",
    name: "Almond Date Chocolate",
    detail:
      "Delicious Dates stuffed with a Almonds and covered in dark chocolate. With the finest golden almonds at the ..",
   
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/23-550x550.jpg",
    price: "550",
    
    name: "Coco Rush",
    detail:
      "Coco Rush is made with dates, nuts, premium grade cacao and wholesome ingredients. A delicious, healthy ...",
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/veganhomemadeenergybarsh-300x300.jpg",
    price: "750",
    
    name: "Energy Bars",
    detail:
      "Each bar brings a great texture with the energy and nutrients you need.  We keep things sweet by using only ...",
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/24-275x275.jpg",
    
      name: "Flax Seed Balts",
    price: "550",
    detail: "A crunchy, chocolaty dessert for hunger pangs, Flax Seeds will provide you instant energy. About This Product ...",
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/snack-nuttyBuddy-300x300-1-100x100.jpg",
    
      name: "Nutty Buddy",
    price: "650",
    detail: "Nutty Buddy – These Nutrient-packed nutty treats make for the perfect guilt-free snack … and ...",
  },
  {
    image_url:
      "https://www.fitmeals.co.in/wp-content/uploads/2021/06/peanut-butter-balls-2-275x275.jpg",
    
      name: "Peanut Butter Truffles",
    price: "1050",
    detail: "Creamy peanut butter completely coated in dark chocolate — The ultimate snack for those who love all things ...",
  }
 
 
];
// console.log(data);
localStorage.setItem("productItem", JSON.stringify(data));
var product = JSON.parse(localStorage.getItem("productItem"));
var cartProduct = JSON.parse(localStorage.getItem("productCartItem")) || [];

function PriceSortMain() {
  var selected = document.getElementById("sortPrice").value;
  console.log(selected);

  if (selected == "low") {
    product = product.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (selected == "high") {
    product = product.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  displayProduct(product);
}
displayProduct(product);


function displayProduct(product) {
  document.getElementById("container").innerHTML = "";
  product.map(function (item) {
    var image = document.createElement("img");
    image.setAttribute("src", item.image_url);

    var button = document.createElement("button");
    button.textContent = "select option";
    button.addEventListener("click", function () {
      addtoCart(item);
    });

    var namePro = document.createElement("p");
    namePro.setAttribute("class", "name");
    namePro.textContent = item.name;

    var detailPro = document.createElement("p");
    detailPro .setAttribute("class", "detail");
    detailPro .textContent = item.detail;

    var pricePro = document.createElement("p");
    pricePro.setAttribute("class", "price");
    pricePro.textContent = item.price;

    var divContainer = document.createElement("div");
    container.append(divContainer);
  
    divContainer.append( image, namePro, detailPro , pricePro,  button);

  });
  function addtoCart(item) {
    cartProduct.push(item);
    localStorage.setItem("productCartItem", JSON.stringify(cartProduct));
  }
}
document.getElementById("goCart").addEventListener("click", function () {
  window.location.href = "cart.html";
});