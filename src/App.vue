<template >
  <header class="sticky-top" v-if="access">
    <NawBar @zipObject="zipObject" @backHome="backHome" />
  </header>
  <main>
    <button
      v-if="!access"
      type="button"
      class="btn btn-success btn-lg position-fixed bottom-0 start-0 end-0"
      @click="startWork"
    >
      Let's try
    </button>
    <ZipData v-if="Object.keys(data).length" :zipData="Object.entries(data)" />
  </main>
  <footer v-if="access">
    <FooterMain />
  </footer>
</template>

<script >
import NawBar from './components/NawBar.vue';
import ZipData from './components/ZipData.vue';
import FooterMain from './components/FooterMain.vue';

export default {
  components: {
    NawBar,
    ZipData,
    FooterMain
  },
  data() {
    return {
      data: {},
      access: false
    };
  },
  created() {
    this.getSaveData();
  },
  methods: {
    zipObject(dataZip) {
      window.localStorage.setItem('zips', JSON.stringify(dataZip));
      this.data = dataZip;
    },
    startWork() {
      this.access = true;
      window.localStorage.setItem('switcher', JSON.stringify(true));
    },
    getSaveData() {
      const items = JSON.parse(window.localStorage.getItem('zips'));
      const switcher = JSON.parse(window.localStorage.getItem('switcher'));
      if (items) {
        this.data = items;
      }
      if (switcher) {
        this.access = switcher;
      }
      return;
    },
    backHome(e) {
      this.data = {};
      this.access = e;
      window.localStorage.clear();
    }
  }
};
</script>


<style scoped>
</style>
