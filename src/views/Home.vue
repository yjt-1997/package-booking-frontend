<template>
  <div class="home">
    <span style="font-size:30px;">菜鸟驿站</span>
    <div style="float:right;">
      <a-button @click="updateStatus('all')">All</a-button>
      <a-button @click="updateStatus('已预约')">已预约</a-button>
      <a-button @click="updateStatus('已取件')">已取件</a-button>
      <a-button @click="updateStatus('未取件')">未取件</a-button>
      <a-button @click="toAdd" style="border-radius:50%;">+添加</a-button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods: {
    toAdd() {
      this.$router.push({ path: "/Add" });
    },
    updateStatus(newStatus) {
      this.$store.commit("updateStatus", newStatus);
    }
  }
};
</script>
