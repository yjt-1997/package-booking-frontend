<template>
  <div style="text-align:center;">
    <h1>预约取件</h1>
    <label style="font-size:30px;">运单号：</label>
    <input v-model="id" />
    <br />
    <label style="font-size:30px;">取件时间：</label>
    <a-date-picker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="Select Time" />
    <br />
    <a-button @click="submitOrder">确定</a-button>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "order",
  data() {
    return {
      id: 0
    };
  },
  methods: {
    submitOrder() {
      this.$store.dispatch("orderItem", {
        id: this.id,
        orderTime: moment().valueOf()
      });
      this.id = 0;
    }
  }
};
</script>
