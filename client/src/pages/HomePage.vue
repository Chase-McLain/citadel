<script setup>



</script>

<template>

  <main class="container-fluid">
    <section class="row citadel-text">
      <div class="col-md-6">
        <h1 class="m-5 fw-bold">The Citadel</h1>
      </div>
      <div class="col-md-6 text-end">
        <h3 class="mt-5 me-2">Event management for people, by Steve</h3>
        <p class="mb-0 me-2">Whatever your interests are, from sleeping to eternal imprisonment, Steve will handle them
          all.
        </p>
        <p class="me-2">There are thousands of people contained within the citadel. Log in to begin your life sentence.
        </p>
      </div>
    </section>
  </main>

  <div class="container-fluid">
    <section class="row position-relative justify-content-between">
      <div class="col-md-3 relcol text-center">
        <h3 class="how-to-header">How The Citadel Works</h3>
      </div>
      <div class="col-12 border-bottom border-black mt-5">
      </div>
      <div class="col-md-4 mt-5 ms-5">
        <div class="how-to-box">
          <h4 class="ms-2"><span class="mdi mdi-magnify"> Discover events that interest you</span></h4>
          <p class="ms-2">Steve will host them in the citadel and manage tickets for you</p>
        </div>
      </div>
      <div class="col-md-4 my-5">
        <div class="how-to-box me-5">
          <h4 class="ms-2"><span class="mdi mdi-plus"> Start an event with Steve now</span></h4>
          <p class="ms-2">Create an event with citadel and aid in the imprisonment of millions</p>
          <div class="text-end">
            <button class="btn btn-success me-2 mb-2">
              <span class="mdi mdi-plus-box"></span> CREATE EVENT
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="row border-top border-black position-relative sect-bg">
      <div class="col-md-2 relcol">
        <h3 class="how-to-header text-center">
          Event Categories
        </h3>
      </div>
    </section>
    <section class="row border-top border-black mt-5">
      <div class="col">
        rats
      </div>
    </section>
  </div>

</template>

<style scoped lang="scss">
main {
  background-image: url(https://www.rjtravelagency.com/wp-content/uploads/2023/04/Citadel-of-Aleppo-Syria-1.jpg);
  background-position: center;
  background-size: cover;
  min-height: 88vh;
}

.citadel-text {
  // text-shadow: 1px 1px 1px white;
  text-shadow: 2px 2px 2px #5e81a0;
}

.relcol {
  position: absolute;
  top: -20px;
}

.how-to-header {
  background-color: white;
  border: inset 5px black;
  border-radius: 20px;
}

.how-to-box {
  border: double 5px black;
  background-color: rgb(183, 178, 178);
  min-height: 159px;
}

.sect-bg {
  background-color: grey;
}
</style>
