<script>
export default {
  name: 'Header'

}
</script>

<template>
  <header>
    <div class="top-header">
      <div class="container d-flex">
        <div class="logo">
          LOGO
        </div>
        <div class="nav">

          <ul class="d-flex">
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Vehicles</a></li>
            <li><a href="">Dealers</a></li>
            <li><a href="">Packages</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
            <li class="item-black"><a href="">icona My Account</a></li>
            <li class="item-black"><a href="">icona Add Car</a></li>
            <li><a href="">HM</a></li>
            <li class="item-black"><a href="">icona number</a></li>
          </ul>
          
        </div>
      </div>
    </div>
    <div class="jumbotron">

    </div>
  </header>
  
</template>



<style lang="scss" scoped>
.nav {

  ul {
    list-style: none;

    li {
      margin: 0 10px;

      a {
        text-decoration: none;

      }
    }
  }
}

</style>