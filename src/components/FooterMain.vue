<template>
  <footer class="footer">
    <ul class="footer-block list-unstyled margin-reset mb-0">
      <li class="footer__items">
        <span>&#xA9;</span>
      </li>
      <li class="footer__items">
        <span>{{ year() }}</span>
      </li>
      <li class="footer__items"><p class="mb-0">All Rights Reserved</p></li>
      <li class="footer__items"><p class="mb-0">Developed with</p></li>
      <li class="footer__items">
        <svg class="footer__haert">
          <use href="../assets/sprite.svg#icon-hearts"></use>
        </svg>
      </li>
      <li class="footer__items">
        <a
          href="https://portfolio-dmytrovoitovych.vercel.app/"
          class="footer__items--ref link-success"
          target="_blank"
          >by Voitovych</a
        >
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'FooterMain',
  methods: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #f7f7f7;
  z-index: 0;
}

@media screen and (min-width: 1200px) {
  .footer {
    min-width: 1200px;
    height: 77px;
  }
}

@media screen and (min-width: 768px) {
  .footer {
    min-width: 100%;
    height: 79px;
  }
}

@media screen and (min-width: 260px) and (max-width: 340px) {
  .footer {
    height: auto;
    padding: 40px 0;
    min-width: 100%;
  }
}

.footer-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #545454;
  min-width: 320px;
}

@media screen and (min-width: 1200px) {
  .footer-block {
    min-width: 1200px;
  }
}

@media screen and (min-width: 768px) {
  .footer-block {
    min-width: 100%;
  }
}

@media screen and (min-width: 260px) and (max-width: 340px) {
  .footer-block {
    min-width: 100%;
  }
}

.footer__items {
  margin-left: 5px;
  margin-right: 5px;
  color: #20c997;
}

.footer__items:nth-child(3) {
  margin: 0;
  padding-left: 5px;
  padding-right: 5px;
  border-left: 1.5px solid #545454;
  border-right: 1.5px solid #545454;
}
.footer__haert {
  fill: rgb(255, 107, 8);
  width: 14px;
  height: 13px;
}

.footer__items--ref {
  text-decoration: underline;
  cursor: pointer;

  -webkit-animation: mymove 3s infinite;
  /* Safari 4.0 - 8.0 */
  animation: mymove 3s infinite;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove {
  30% {
    box-shadow: 0px 15px 15px rgba(255, 170, 114, 1);
  }
}

@keyframes mymove {
  30% {
    box-shadow: 0px 15px 15px rgba(255, 170, 114, 1);
  }
}
</style>