<script>
import { store } from '../data/store';

export default {
  name: 'Footer',

  data() {
    return {
      store,
    }
  },

}
</script>


<template>
  <footer>
    <div class="container">
      <div class="row justify-content-between">

        <div class="col-3 contact">
          <div class="logo">
            <img class="w-100" src="../assets/logo/logo-footer-autocar11.png" alt="">
          </div>
          <div class="address">
            <i class="fa-solid fa-location-dot"></i>
              {{ store.autoCar.address }}
          </div>
          <div class="phone">
            <i class="fa-solid fa-phone-volume"></i>
              {{ store.autoCar.phone }}
          </div>
          <div class="mail">
            <i class="fa-regular fa-envelope"></i>
            {{ store.autoCar.email }}
          </div>
          <div class="social">
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
          </div>

        </div>

        <div class="col-4 newsletter d-flex flex-column">
          <h2>Join Our Newsletter</h2>
          <span>Subscrive to be informed about our services and products.</span>
          <input class="ps-5" type="text" placeholder="You Email Address">
          <input class="text-center" type="text" placeholder="Subscribe &#10132;">
        </div>

        <div class="col-5 d-flex justify-content-around ">
          <div class=" my-account">
            <h2>My Account</h2>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fa-solid fa-minus"></i></span><a href="#">My Account</a></li>
              <li><span class="fa-li"><i class="fa-solid fa-minus"></i></span><a href="#">Checkout</a></li>
              <li><span class="fa-li"><i class="fa-solid fa-minus"></i></span><a href="#">Cart</a></li>
              <li><span class="fa-li"><i class="fa-solid fa-minus"></i></span><a href="#">Packages</a></li>
              <li><span class="fa-li"><i class="fa-solid fa-minus"></i></span><a href="#">Add Car</a></li>
            </ul>
          </div>

          <div class="quick">
            <h2>Quick Links</h2>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fa-solid fa-minus"></i></span><a href="#">Home</a></li>
              <li><span class="fa-li"><i class="fa-solid fa-minus"></i></span><a href="#">About Us</a></li>
              <li><span class="fa-li"><i class="fa-solid fa-minus"></i></span><a href="#">Blog</a></li>
              <li><span class="fa-li"><i class="fa-solid fa-minus"></i></span><a href="#">Contact</a></li>
              <li><span class="fa-li"><i class="fa-solid fa-minus"></i></span><a href="#">Refund & Return</a></li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  </footer>
  
</template>



<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

footer {
  color: $third-color;
  background-color: $first-color;
  padding: 40px 0;
  font-size: 0.9rem;

  h2 {
      font-size: 1.5rem;
      font-weight: bolder;
      margin-bottom: 20px;
    }

  
  .contact {
    .logo {
      width: 200px;
      margin-bottom: 30px;
    }
  
    .address,
    .phone,
    .mail,
    .social {
      margin-bottom: 20px;
  
      a {
        color: $third-color;
      }
      
      i {
        font-size: 1.5rem;
        margin: 0 15px;
      }
    }
  
    .social {
      margin-left: 30px;
    }
  }

  .newsletter {

    span {
      margin-bottom: 35px;
    }

    input {
      color: $second-color;
      font-size: 20px;
      height: 60px;
      border: none;
      border-radius: 5px;
      margin-bottom: 5px;
    }
  }

  ul{
    li{
      margin-bottom: 10px;

      span {
        i{
          font-weight: bold;
        }

      }

      a {
        text-decoration: none;
        color: $third-color;
      }
    }
  }

}



</style>