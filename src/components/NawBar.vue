<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid justify-content-center">
      <a class="navbar-brand link-success" href="#" @click.prevent="backHome">Main</a>
      <form class="d-flex" @submit.stop.prevent="funcGetZipData">
        <input
          v-model.trim="zip"
          class="form-control me-2"
          :class="regTest && 'is-valid'"
          type="search"
          pattern="[0-9]{5}"
          placeholder="zip-code"
          aria-label="Search"
          required
        />
        <button v-if="!loading" class="btn btn-outline-success" :disabled="!regTest" type="submit">
          Search
        </button>
        <span v-else class="visually align-self-center">Loading...</span>
      </form>
    </div>
  </nav>
</template>

<script >
import { http } from '../helper/fetch';
import { Report } from 'notiflix/build/notiflix-report-aio';

export default {
  data() {
    return {
      zip: '',
      loading: false
    };
  },

  emits: {
    zipObject: (e) => typeof e === 'object',
    backHome: (e) => typeof e === 'boolean'
  },
  methods: {
    funcGetZipData() {
      this.loading = true;
      http(this.zip)
        .then((e) => {
          if (!e[0]) {
            Report.failure('Error 404', `Your code ${this.zip} not exist`, 'Okay');
            return;
          }
          this.$emit('zipObject', e[0]);
        })
        .finally(() => {
          this.loading = false;
          this.zip = '';
        });
    },
    backHome() {
      this.$emit('backHome', false);
    }
  },
  computed: {
    regTest() {
      return this.zip.match(/^[0-9]{5}$/g);
    }
  }
};
</script>


