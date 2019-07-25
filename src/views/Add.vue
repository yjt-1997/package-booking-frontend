<template>
  <div style="text-align:center;">
    <h3>包裹入库</h3>
    <label>运单号：</label>
    <input v-model="id" />
    <br />
    <label>收件人：</label>
    <input v-model="receiverName" />
    <br />
    <label>电话：</label>
    <input v-model="receiverPhone" />
    <br />
    <label>重量：</label>
    <input v-model="weight" />
    <br />
    <a-button @click="addItem">入库</a-button>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      id: 0,
      receiverName: "",
      receiverPhone: "",
      weight: 0.0
    };
  },
  methods: {
    addItem() {
      this.$store.dispatch("addItem", {
        id: this.id,
        receiverName: this.receiverName,
        receiverPhone: this.receiverPhone,
        weight: this.weight
      });
    }
  }
};
</script>
