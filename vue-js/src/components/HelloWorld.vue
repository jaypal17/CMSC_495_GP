<template>
  <div class="hello">
    <!-- Example of vusJs -->
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <div class="container-fluid">
          <button class="btn btn btn-primary">
            <router-link to="reservation">
              Reservation
            </router-link>
          </button>
        </div>
      </li>
      <li>
        <div class="container-fluid">
          <button class="btn btn btn-danger">
            <router-link to="login">
              Login
            </router-link>
          </button>
        </div>
      </li>
      <li>
        <div class="container-fluid">
          <button class="btn btn btn-success">
            <router-link to="profilecreation">
              Register
            </router-link>
          </button>
        </div>
      </li>
      <li>
        <div class="container-fluid">
          <button class="btn btn btn-warning">
            <router-link to="contactus">
              Contact Us
            </router-link>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<!-- Example of vusJs -->
<script>
  export default {
    name: 'Welcome',
    data() {
      return {
        msg: 'Welcome to Hotel ....'
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: black;
  }
</style>
