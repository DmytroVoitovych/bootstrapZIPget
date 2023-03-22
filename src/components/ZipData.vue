<template>
  <div class="table-responsive">
    <table class="table table-success table-striped border-info mb-0 table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Keys</th>
          <th scope="col">Values</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(e, i) in zipData" :key="e[0]">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ e[0] }}</td>
          <td datazip="no data" :class="!e[1].trim() && 'noData'">{{ e[1] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script >
export default {
  props: {
    zipData: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.noData::before {
  content: attr(datazip);
  color: brown;
}
</style>