<script>
export default {
  name: 'Header'

}
</script>

<template>
  <header>
    <div class="top-header d-flex align-items-center">
      <div class="container d-flex align-items-center">
        <div class="logo">
          <img class="w-100" src="/src/assets/logo/logo-autocar11.png" alt="">
        </div>
        <div class="nav d-flex align-items-center">

          <ul class="d-flex align-items-center">
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Vehicles</a></li>
            <li><a href="">Dealers</a></li>
            <li><a href="">Packages</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
            <li class="item-black">
              <a href="">
                <img src="/src/assets/icon/padlock.png" alt=""> 
                My Account
              </a>
            </li>
            <li class="item-black">
              <a href="">
                <img src="/src/assets/icon/add.png" alt="">
                Add Car
              </a>
            </li>
            <li><a href="">HM</a></li>
            <li class="item-black">
              <a href="">
                <img src="/src/assets/icon/headphones.png" alt="">
                number
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <img src="../assets/slider/slider-autocar-5.jpg" alt="">

    </div>
  </header>
  
</template>



<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

header {
  .top-header {
    height: 75px;

  
    .logo {
      width: 200px;
    }
    .nav {
    
      ul {
        list-style: none;
        margin-bottom: 0;
    
        li {
          margin: 0 2px;
          padding: 12px 10px;
          font-weight: 600;
    
          a {
            text-decoration: none;
            color: $first-color;
            img {
              width: 45px;
              filter: invert(100%);              
            }
    
          }
        &.item-black {
          background-color: $background-color;
    
          a {
            color: $third-color;
          }
        }
    
        }
      }
    }
  }

  .jumbotron {
    background-color: $third-color;
    height: 830px;
    padding-right: 10px;


    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

}


</style>