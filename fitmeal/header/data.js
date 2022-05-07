let arr =[
  "./images/slider1.PNG",
  
  
  "./images/slider2.PNG",
  

 "./images/slider3.PNG",
  
  "./images/slider4.PNG",
  

]

let navbar =()=>{
  return `  <div id="topbar">
  <div id="top-left">
      <ul>
          <li>
              <a href="#"> <i class="fa-solid fa-location-dot"></i>food delivery in hyderabad </a>
          </li>



          <li>
              <a href="#"><i class="fa-solid fa-phone-volume"></i>9100347480
              </a>
          </li>
          <li>
              <a href="#"><i class="fa-solid fa-envelope-open-text"></i>fitmealsindia@gmail.com</a>
          </li>
      </ul>
  </div>
  <div id="top-right">
      <div><i class="fa-solid fa-magnifying-glass"></i></div>
      <div><i class="fa-solid fa-address-book"></i></div>
      <div><i class="fa-solid fa-bag-shopping"></i></div>
  </div>
</div>
<hr>

<div id="navbar">

  <div id="logo">
      <a href="../index.html">
          <img src="https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-black.png">
      </a>
  </div>
  <div class="dropdown">
      <center>
          <ul>
              <!-- 1 -->
              <li><a href="https://www.fitmeals.co.in/">Home</a></li>
              <li> <a>Meal Plan <i class="fa-solid fa-greater-than"></i></a>
                  <ul>
                      <li>
                          <a href="">Weight Loss Meal Plan</a>
                      </li>
                      <li>
                          <a href="#">Maintenance Meal Plan</a>
                      </li>
                      <li>
                          <a href="#">Athletic Meal Plan</a>
                      </li>
                      <li>
                          <a href="#">Keto Meal Plan</a>
                      </li>
                      <li>
                          <a href="#">Transformation Challenges</a>
                      </li>
                  </ul>
              </li>
              <!-- 2 -->

              <li>
                  <a href="#">Health Coaching</a>
              </li>
              <!-- 3 -->

              <li>
                  <a href="#">Products <i class="fa-solid fa-greater-than"></i></a>
                  <ul>
                      <li>
                          <a href="#">Vegan Sweets</a>
                      </li>
                      <li>
                          <a href="#">Low-Cal Sauces</a>
                      </li>
                      <li>
                          <a href="#">Nut Butters</a>
                      </li>
                      <li>
                          <a href="#">Fresh Bakes</a>
                      </li>
                  </ul>
              </li>
              <!-- 4 -->
              <li>
                  <a href="#">Blog</a>
              </li>
              <!-- 5 -->

              <li>
                  <a href="#">About us <i class="fa-solid fa-greater-than"></i></a>
                  <ul>
                      <li>
                          <a href="#">Our Story</a>
                      </li>
                      <li>
                          <a href="#">FAQ</a>
                      </li>
                      <li>
                          <a href="#">Testimonials</a>
                      </li>
                  </ul>
              </li>
              <!-- 6 -->
          </ul>
      </center>
  </div>


  <div id="callbtn">
      <button><span>Call: 9100347480</span></button>
  </div>`
}

let footer = ()=>{
//   return `<div>
//     <img src="./images/footer.PNG"></img>
//   </div>`

return `
<div class="wave5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8EC038" fill-opacity="1" d="M0,96L120,122.7C240,149,480,203,720,234.7C960,267,1200,277,1320,282.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
</div>



<div class="wave3">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#292D35" fill-opacity="1" d="M0,96L80,96C160,96,320,96,480,128C640,160,800,224,960,224C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>    </div>



</div>
<div class="wave4">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8EC038" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,256C640,245,800,235,960,240C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
</div>

<div class="footer-below">
<div class="footer-background-image">
  <img src="https://i.ibb.co/t4G7JkK/footer-bg.png">
  
</div>
<div class="fitmeals_footer-image-logo1">
  <img src="https://i.ibb.co/41BJ2Sh/logo-white.png">
</div>
<p>The Fitmeals culinary<br>teamconsists of very passionate and<br>skilled chefs. Our team is well<br>versed in nutrition and all<br>our menus and plans are designed<br>by qualified nutrition experts.</p>
<div class="social-media-icon">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     width="32" height="32"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#8ec038"><path d="M80.625,10.75c-38.52723,0 -69.875,31.34777 -69.875,69.875c0,38.52724 31.34777,69.875 69.875,69.875c38.52724,0 69.875,-31.34776 69.875,-69.875c0,-38.52723 -31.34776,-69.875 -69.875,-69.875zM80.625,21.5c32.7175,0 59.125,26.4075 59.125,59.125c0,29.73808 -21.84861,54.19101 -50.39062,58.41114v-41.32031h16.69189l2.62451,-16.94385h-19.31641v-9.28027c0,-7.04125 2.2916,-13.29053 8.88135,-13.29053h10.58203v-14.80225c-1.85975,-0.24725 -5.78854,-0.79785 -13.22754,-0.79785c-15.523,0 -24.62842,8.20225 -24.62842,26.875v11.2749h-15.95703v16.96484h15.97803v41.17334c-28.09758,-4.59889 -49.48779,-28.8407 -49.48779,-58.26416c0,-32.7175 26.4075,-59.125 59.125,-59.125z"></path></g></g></svg>
    
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="32" height="32"
     viewBox="0 0 172 172"
     style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#8ec038"><path d="M37.625,21.5c-8.84221,0 -16.125,7.28279 -16.125,16.125v96.75c0,8.84221 7.28279,16.125 16.125,16.125h96.75c8.84221,0 16.125,-7.28279 16.125,-16.125v-96.75c0,-8.84221 -7.28279,-16.125 -16.125,-16.125zM37.625,32.25h96.75c3.02579,0 5.375,2.34921 5.375,5.375v96.75c0,3.02579 -2.34921,5.375 -5.375,5.375h-96.75c-3.02579,0 -5.375,-2.34921 -5.375,-5.375v-96.75c0,-3.02579 2.34921,-5.375 5.375,-5.375zM104.64453,53.75c-9.06225,0 -16.42969,7.36745 -16.41895,16.41895c0,1.68775 0.58789,2.81851 0.58789,3.94726c-13.588,-0.56975 -24.87315,-7.34359 -32.7959,-16.96484c-1.6985,2.26825 -2.26758,5.08828 -2.26758,7.91553c0,5.6545 2.20325,10.18462 6.73975,14.15137c-3.01,-0.4085 -4.4715,-1.13883 -6.73975,-2.26758c0,7.92275 5.04494,14.1428 12.40869,15.85205c0,0 -2.83666,0.56689 -4.53516,0.56689c-1.29,0 -2.83447,-0.56689 -2.83447,-0.56689c2.26825,6.22425 7.92141,11.31689 15.28516,11.31689c-5.6545,3.96675 -13.02346,6.78174 -20.38721,6.78174h-3.96826c5.375,4.6655 13.43112,7.34864 24.90137,7.34864c30.00325,0 46.44336,-24.88037 46.44336,-46.38037v-2.26758c2.838,-2.26825 5.65752,-5.09567 7.93652,-8.50342c-3.397,1.70925 -6.22945,2.26472 -9.6372,2.83447c3.397,-2.2575 6.24087,-5.09332 7.36962,-9.04932c-2.82724,1.68775 -6.21635,3.37752 -10.1831,3.94726c-2.838,-3.38625 -7.36829,-5.08105 -11.90479,-5.08105z"></path></g></g></svg>


    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     width="32" height="32"
     viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#8ec038"><path d="M51.31446,10.75c-22.33984,0 -40.56446,18.22461 -40.56446,40.56446v58.66308c0,22.29785 18.22461,40.52246 40.56446,40.52246h58.66308c22.29785,0 40.52246,-18.2246 40.52246,-40.56445v-58.62109c0,-22.33984 -18.2246,-40.56446 -40.56445,-40.56446zM51.31446,21.5h58.62109c16.54492,0 29.81445,13.26953 29.81445,29.81446v58.62109c0,16.54492 -13.26953,29.81445 -29.77246,29.81445h-58.66308c-16.54493,0 -29.81446,-13.26953 -29.81446,-29.77246v-58.66308c0,-16.54493 13.26953,-29.81446 29.81446,-29.81446zM123.625,32.25c-2.98145,0 -5.375,2.39355 -5.375,5.375c0,2.98145 2.39355,5.375 5.375,5.375c2.98145,0 5.375,-2.39355 5.375,-5.375c0,-2.98145 -2.39355,-5.375 -5.375,-5.375zM80.625,43c-20.70215,0 -37.625,16.92285 -37.625,37.625c0,20.70215 16.92285,37.625 37.625,37.625c20.70215,0 37.625,-16.92285 37.625,-37.625c0,-20.70215 -16.92285,-37.625 -37.625,-37.625zM80.625,53.75c14.90723,0 26.875,11.96777 26.875,26.875c0,14.90723 -11.96777,26.875 -26.875,26.875c-14.90723,0 -26.875,-11.96777 -26.875,-26.875c0,-14.90723 11.96777,-26.875 26.875,-26.875z"></path></g></g></svg>
</div>

<div class="second-column"><h2>Explore</h2>
  <a href="index.html"><h3>Home</h3></a>
  <a href="1_week_weight_loss_plan.html"><h3>Meal Plan</h3></a>
</div>

<div class="links-colums"><h2>Links</h2>
  <a href="#"><h3>About Us</h3></a>
  <a href="blog.html"><h3>Blog</h3></a>
  <a href="FAQ.html"><h3>FAQ</h3></a>
  <a href="testimonials.html"><h3>Testimonial</h3></a>
</div>


<div class="Contact-columns"><h2>Contact</h2>
  <a href="#" class="link-active"
  ><i class="material-icons">phone</i></a>
  <h3>Call Us</h3>
 
    <p>9100347480</p>
     <p>9100347480</p>
   
     <a href="#" class="link-active"
     ><i class="material-icons">email</i></a>
     <h3>E-mail Us</h3>
     <p>fitmealsindia@gmail.com</p>


     <a href="#" class="link-active"
><i class="material-icons">location_on</i></a>
  <h3>Our Location</h3>
  <p>Banjara Hills, Road no.5, Hyderabad</p>


</div>
</div>

<div class="copyright">
<p>Copyright © 2021. FitMeals. All Rights Reserved.

</p>
</div>`
}
let footeri  = ()=>{
    return `
    <div>
     <img src="../images/footer.PNG"></img>
   </div>`
}

let navbar2 = ()=>{
    return `   <div id="topbar">
    <div id="top-left">
        <ul>
            <li>
                <a href="#"> <i class="fa-solid fa-location-dot"></i>food delivery in hyderabad </a>
            </li>



            <li>
                <a href="#"><i class="fa-solid fa-phone-volume"></i>9100347480
                </a>
            </li>
            <li>
                <a href="#"><i class="fa-solid fa-envelope-open-text"></i>fitmealsindia@gmail.com</a>
            </li>
        </ul>
    </div>
    <div id="top-right">
        <div><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></div>
        <div><a href="../loginsignup/login.html"><i class="fa-solid fa-address-book"></i></a></div>
        <div><a href="../allotherfiles/cart.html><i class="fa-solid fa-bag-shopping"></i></a></div>
    </div>
</div>
<hr>
<div class="border"></div>
<div class="header">
    <a href="#" class="logo"><img  src="https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-black.png" alt=""></a>
    <ul>
       
        <li><a href="../index.html" id="Home" >Home</a></li>
        <li><a href="#" id="mealsplan">meal plans</a>
            <div class="submealmenu">
                <ul>
                    <li><a href="../allotherfiles/weight_loss_meal_plan.html" id="lossmeal">Weight Loss Meal Plan</a></li>
                    <li><a href="../allotherfiles/maintainance_meal_plan.html" id ="maintance">Maintance Meal Plan</a></li>
                    <li><a href="Athletic_Meal_Plan.html">
                        Athletic Meal Plan
                    </a></li>
                    <li><a href="keto_meal_plan.html">Keto Meal Plan</a></li>
                    <li><a href="#">Transformation Challenge</a></li>
                </ul>
            </div>

        </li>
        <li><a href="health.html" id="health">Health coaching</a></li>
        <li><a href="product.html">product <span style="color: rgb(180,180,180); width: 1px;">&#x3e
        </a>
        <div class="subproductmenu">
            <ul>
                <li><a href="../allotherfiles/vegan.html">Vegan Sweets</a></li>
                <li><a href="localories.html">Low-Cal Sauces</a></li>
                <li><a href="../allotherfiles/nutbutter.html">
                    Nut Butters
                </a></li>
                <li><a href="../allotherfiles/FreshBakes.html">Fresh Bakes</a></li>
                
            </ul>
            </div>
        </li>
        <li><a href="../allotherfiles/blog.html">Blog</a></li>
        <li><a href="../allotherfiles/aboutus.html" id="about">About Us <span style="color: rgb(180,180,180); width: 1px;"><span id="arrow">&#x3e</span></a>
            <div class="subaboutmenu">
                <ul>
                    <li><a href="../allotherfiles/ourstory.html">Our Story</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">
                        Testimonials
                    </a></li>

                    
                </ul>
            </div>
        </li>
        
    </ul>
    <button id="call" style="background-color: red; width: 17%; height: 34px; border: 1px solid red; border-radius: 20px; color: white; font-weight: 600;
    position: relative; left: 45px; ">call: 9100347480</button>
</div>
`
}
export {arr ,navbar,footer,footeri,navbar2}