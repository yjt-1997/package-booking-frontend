<template>
  <div>
    <a-table bordered :dataSource="this.items" :columns="columns" :rowKey="rowKey">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>
      <template slot="operation" slot-scope="record">
        <a-button @click="receive(record)" v-if="record.status!=`已取件`">确认收货</a-button>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  name: "List",
  components: {},
  data() {
    return {
      columns: [
        {
          title: "运单号",
          dataIndex: "id",
          width: "20%",
          scopedSlots: { customRender: "id" }
        },
        {
          title: "收件人",
          dataIndex: "receiverName"
        },
        {
          title: "收件电话",
          dataIndex: "receiverPhone"
        },
        {
          title: "状态",
          dataIndex: "status"
        },
        {
          title: "预约时间",
          dataIndex: "orderTime"
        },
        {
          scopedSlots: { customRender: "operation" }
        }
      ]
    };
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    }
  },
  methods: {
    receive(record) {
      record.status = "已取件";
      this.$store.dispatch("updateItem", record);
    },
    rowKey(record){
      return record.id;
    }
  },
  mounted() {
    this.$store.dispatch("getItems");
  }
};
</script>

<style lang="scss">
</style>