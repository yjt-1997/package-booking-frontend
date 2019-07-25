<template>
  <div>
    <a-table bordered :dataSource="this.items" :columns="columns" :rowKey="rowKey">
      <span slot="tags" slot-scope="tags">
        <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
      </span>
      <span slot="time" slot-scope="time">
          <span>{{!time ? "" :new Date(time).toLocaleString() }}</span>
        </span>
      <!-- <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>-->
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
          dataIndex: "orderTime",
          scopedSlots: { customRender: "time" }
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
    rowKey(record) {
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