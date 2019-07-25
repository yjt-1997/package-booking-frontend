<template>
  <div style="text-align:center;">
    <h1>预约取件</h1>
    <label style="font-size:30px;">运单号：</label>
    <input />
    <br />
    <label style="font-size:30px;">取件时间：</label>
    <a-date-picker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Select Time"
      @change="onChange"
      @ok="onOk"
    />
  </div>
</template>

<script>
export default {
  name: "order"
};
</script>
