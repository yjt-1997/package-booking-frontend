<template>
  <div style="text-align:center;">
    <h3>包裹入库</h3>
    <label>运单号：</label>
    <input v-bind="id" />
    <br />
    <label>收件人：</label>
    <input v-bind="receiverName" />
    <br />
    <label>电话：</label>
    <input v-bind="receiverPhone" />
    <br />
    <label>重量：</label>
    <input v-bind="weight" />
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
  }
};
</script>
