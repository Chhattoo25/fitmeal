

// // function myFunction() {
// //     document.getElementById("myDropdown").classList.toggle("show");
// //   }
  
// //   // Close the dropdown if the user clicks outside of it
// //   window.onclick = function(event) {
// //     if (!event.target.matches('.dropbtn')) {
// //       var dropdowns = document.getElementsByClassName("dropdown-content");
// //       var i;
// //       for (i = 0; i < dropdowns.length; i++) {
// //         var openDropdown = dropdowns[i];
// //         if (openDropdown.classList.contains('show')) {
// //           openDropdown.classList.remove('show');
// //         }
// //       }
// //     }
// //   }


// //   function myFunct() {
// //     document.getElementById("Dropdown").classList.toggle("show");
// //   }
  
// //   // Close the dropdown if the user clicks outside of it
// //   window.onclick = function(event) {
// //     if (!event.target.matches('.dropbtn')) {
// //       var dropdowns = document.getElementsByClassName("dropdown-content");
// //       var i;
// //       for (i = 0; i < dropdowns.length; i++) {
// //         var openDropdown = dropdowns[i];
// //         if (openDropdown.classList.contains('show')) {
// //           openDropdown.classList.remove('show');
// //         }
// //       }
// //     }
// //   }


// //   function myFun() {
// //     document.getElementById("Dropdown3").classList.toggle("show");
// //   }
  
// //   // Close the dropdown if the user clicks outside of it
// //   window.onclick = function(event) {
// //     if (!event.target.matches('.dropbtn')) {
// //       var dropdowns = document.getElementsByClassName("dropdown-content");
// //       var i;
// //       for (i = 0; i < dropdowns.length; i++) {
// //         var openDropdown = dropdowns[i];
// //         if (openDropdown.classList.contains('show')) {
// //           openDropdown.classList.remove('show');
// //         }
// //       }
// //     }
// //   }




// // var sliderimage = document.getElementById("sliderimage");

// // var images = new Array(
// //     "https://i.ibb.co/LSNvwRB/image.jpg",
// //     "https://i.ibb.co/rkw7bZp/SLIDE-03.jpg",
// //     "https://i.ibb.co/pj32Bgf/SLIDE-01.jpg",
// //     "https://i.ibb.co/P42jzk4/SLIDE-02.jpg",
// //     "https://i.ibb.co/cX1vBzn/Creative-1-1920x1280px.jpg"
// // );

// // var len = images.length;
// // var i=0;

// // function top_slider(){
// //     if(i>len-1){
// //         i=0;
// //     }
// //     sliderimage.src = images[i];
// //     i++;
// //     setTimeout("top_slider()",5000)
// // }




// //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>for dabbba part>>>>>>>>>>>>>>>>>.............................


// var list1=
// [
//     {id:1,img:"https://i.ibb.co/8YSpnNG/keto.jpg",title:"Weight Loss Meal Plan",below_title:"1200-1400 kcal",para:"If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist ofcomplex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet."},
//     {id:2,img:"https://i.ibb.co/s3GCnfq/maintenance.jpg",title:"Athletic Sport Meal Plan",below_title:"1400-1800kcal",para:"A diet rich in protein is essential for promoting muscle growth and repair while simultaneously burning fat to ensure you stay in shape. This plan includes high protein meals for individuals who want to gain weight or build muscle. If you are a fitness enthusiast who’s looking for meals higher in calories and lean protein then we’ve got you covered."},
//     {id:3,img:"https://i.ibb.co/cT5pnS7/athletic.jpg",title:"Maintenance Meal Plan",below_title:"1400-1600kcal",para:"If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist ofcomplex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet."},
//     {id:4,img:"https://i.ibb.co/8YSpnNG/keto.jpg",title:"Keto Weight Meal Plan",below_title:"1300-1500 kcal",para:"The Keto is all to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist ofcomplex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet."},

// ]




// function showData(a){
//     console.log(a);
//         let element = list1[a]
//         console.log(element);
//         document.getElementById("card").textContent="";
//          let card = document.getElementById("card");
//     let div = document.createElement("div");
//     div.className = "weight-loss-meal-content";

//     // let div2 =  document.createElement("div");

//     let image = document.createElement("img");
//     image.src=element.img;

//     // div2.appened(image);

//     let div3 = document.createElement("div");
//     div3.className = "weight-loss-meal-right-content";

//     let div4 = document.createElement("div");
//     let h1 = document.createElement("h1");
//     h1.textContent = element.title;

//     let p = document.createElement("p");
//     p.textContent = element.below_title;


//     div4.append(h1,p);
//     div3.append(div4);

//     let div5 = document.createElement("div");
//     div5.className = "weight-loss-meal-main-content";

//     let p1 = document.createElement('p');
//     p1.textContent = element.para;
//     p1.className="pareshani_solution"

//     div5.append(p1)

//     let div6 = document.createElement("div");
//     div6.className = "weight-loss-meal-button";

//     let button = document.createElement('button')
//     button.textContent = "View Plan";

//     div6.append(button);

//     div.append(image,div3,div5,div6);

//     card.append(div);

// }


// let weight_loss_meal_plan = document.getElementById("weight_loss_meal_plan");
// weight_loss_meal_plan.addEventListener("click",f1);
// function f1(){
//   // weight_loss_meal_plan.innerHTML=null;
//     showData(0)
// }

// let athletic_meal_plan = document.getElementById("athletic_meal_plan");
// athletic_meal_plan.addEventListener("click",f2);
// // athletic_meal_plan.innerHTML= null;
// function f2(){
//     showData(1)
// }

// let maintenance_mael_plan = document.getElementById("maintenance_mael_plan");
// maintenance_mael_plan.addEventListener("click",f3);
// function f3(){
//     showData(2)
// }

// let keto_meal_plan = document.getElementById("keto_meal_plan");
// keto_meal_plan.addEventListener("click",f4);
// function f4(){
//     showData(3)
// }



// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>dabba pat..............................................

// // ??????????????????crousel2???????????????????????????????????????????????????????

// // let span = document.getElementsByTagName('span');
// // let product = document.getElementsByClassName('product')
// // let product_page = Math.ceil(product.length/4);
// // let l = 0;
// // let movePer = 25.34;
// // let maxMove = 203;
// // // mobile_view	
// // let mob_view = window.matchMedia("(max-width: 768px)");
// // if (mob_view.matches)
// //  {
// //      movePer = 50.36;
// //      maxMove = 504;
// //  }

// // let right_mover = ()=>{
// //     l = l + movePer;
// //     if (product == 1){l = 0; }
// //     for(const i of product)
// //     {
// //         if (l > maxMove){l = l - movePer;}
// //         i.style.left = '-' + l + '%';
// //     }

// // }
// // let left_mover = ()=>{
// //     l = l - movePer;
// //     if (l<=0){l = 0;}
// //     for(const i of product){
// //         if (product_page>1){
// //             i.style.left = '-' + l + '%';
// //         }
// //     }
// // }
// // span[1].onclick = ()=>{right_mover();}
// // span[0].onclick = ()=>{left_mover();}


// // ??????????????????crousel2???????????????????????????????????????????????????????












// // testimonial

// var testimonials = document.getElementById('testimonials');
// var control1 = document.getElementById('control1');
// var control2 = document.getElementById('control2');
// var control3 = document.getElementById('control3');


// control1.onclick=function(){
//     testimonials.style.transform = "translateX(870px)";
//     control1.classList.add("active");
//     control2.classList.remove("active");
//     control3.classList.remove("active");
// }

// control2.onclick=function(){
//     testimonials.style.transform = "translateX(0px)";
//     control1.classList.remove("active");
//     control2.classList.add("active");
//     control3.classList.remove("active");
// }

// control3.onclick=function(){
//     testimonials.style.transform = "translateX(-870px)";
//     control1.classList.remove("active");
//     control2.classList.remove("active");
//     control3.classList.add("active");
// }









// //testimonial
