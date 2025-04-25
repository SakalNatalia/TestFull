<template>
<section class="banner">
  <div class="overlay"></div>
  <div class="container text-center text-white position-relative">
    <h1 class="display-4">Gilbert and Emily</h1>
    <p class="lead">We are getting married</p>
  </div>
</section>
<div class="space">
  <h3 class="font-weight-bold title-style">Happy Couple</h3>
  <p class="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     <div class="d-flex justify-content-center mt-4">
  <div class="text-center mr-4">
    <img src="@/assets/him-1.jpeg" alt="Couple 1" class="img-fluid mb-2" style="max-width: 500px;">
    <p class="font-weight-bold title-style-smaller text-left">The Groom</p>
    <p class="box-stylesize text-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
  </div>
  <div class="text-center">
    <img src="@/assets/her-1.jpeg" alt="Couple 2" class="img-fluid mb-2" style="max-width: 500px;">
    <p class="font-weight-bold title-style-smaller text-left">The Bride</p>
    <p class="box-stylesize text-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
  </div>
</div>
</div>
<section class="banner second-banner">
  <div class="overlay"></div>
  <div class="container text-center text-white position-relative">
    <h2 class="display-4">Let the Adventure Begin</h2>
    <p class="lead">March 19, 2017</p>
  </div>
</section>
<div>
  <h3 class="font-weight-bold title-style">Our wedding</h3>
  <p class="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     </p>   
  <div class="d-flex justify-content-center flex-wrap mt-4">
    <div class="text-center mr-4" style="max-width: 350px;">
      <img src="@/assets/wedding-1.jpeg" alt="Groom" class="img-fluid mb-2" style="max-width: 100%;">
      <p class="font-weight-bold title-style-smaller">Reception</p>
      <p class="box-stylesize2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
    </div>

    <div class="text-center mr-4" style="max-width: 350px;">
     <img src="@/assets/wedding-2.jpeg" alt="Bride" class="img-fluid mb-2" style="max-width: 100%;">
      <p class="font-weight-bold title-style-smaller">Ceremony</p>
     <p class="box-stylesize2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
   </div>

   <div class="text-center" style="max-width: 350px;">
     <img src="@/assets/wedding-3.jpeg" alt="Bride" class="img-fluid mb-2" style="max-width: 100%;">
      <p class="font-weight-bold title-style-smaller">Party</p>
      <p class="box-stylesize2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
    </div>
  </div>
</div>
<section class="banner third-banner mt-5">
  <div class="overlay2"></div>
</section>
<div class="space">
  <h3 class="font-weight-bold title-style">Are you attending?</h3>
  <p class="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>
<div class="d-flex justify-content-center align-items-center mt-4 countdown-wrapper">
      <div class="time-box">
        <h3 class="time-number">{{ countdown.Days }}</h3>
        <p class="time-unit">Days</p>
      </div>
      <div class="time-box">
        <h3 class="time-number">{{ countdown.Hours }}</h3>
        <p class="time-unit">Hours</p>
      </div>
      <div class="time-box">
        <h3 class="time-number">{{ countdown.Minutes }}</h3>
        <p class="time-unit">Minutes</p>
      </div>
      <div class="time-box">
        <h3 class="time-number">{{ countdown.Seconds }}</h3>
        <p class="time-unit">Seconds</p>
      </div>
</div>
<div>
  <router-link to="/rsvp" class="btn custom-btn mt-5 mb-2">RSVP</router-link>
</div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const countdown = ref({
  Days: '0',
  Hours: '0',
  Minutes: '0',
  Seconds: '0'
})

const targetDate = new Date('2025-09-01T00:00:00') 

let timerInterval

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  if (distance < 0) {
    countdown.value = {
      Days: '0',
      Hours: '0',
      Minutes: '0',
      Seconds: '0'
    }
    clearInterval(timerInterval)
    return
  }

  countdown.value = {
    Days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    Hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    Minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    Seconds: Math.floor((distance % (1000 * 60)) / 1000)
  }
}

onMounted(() => {
  updateCountdown()
  timerInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timerInterval)
})
</script>