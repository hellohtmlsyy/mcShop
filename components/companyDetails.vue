<!-- componyDetails -->
<template>
  <div class='compony-details'>
    <Header-card title="详情信息"></Header-card>
    <table cellspacing="0" cellpadding="0"  class="tb" >
      <tr>
        <th>主营产品或服务</th>
        <td>{{data.mainProduct}}</td>
         <th>经营范围</th>
         <td>{{data.manageBusiness}}</td>
      </tr>
      <tr>
        <th>企业类型</th>
        <td>{{data.type}}</td>
        <th>质量控制</th>
        <td>{{data.qualityControl}}</td>
      </tr>
      <tr>
        <th>经营种类</th>
        <td>{{data.mainProduct}}</td>
        <th>企业地址</th>
        <td>{{data.country}} {{data.province}} {{data.city}} {{data.address}}</td>
      </tr>
      <tr>
        <th>公司成立时间</th>
        <td>{{data.establishmentTime}}</td>
        <th>联系人</th>
        <td>{{data.contactPerson}}</td>
      </tr>
      <tr>
        <th>员工人数</th>
        <td>{{data.staffNumber}}</td>
        <th>营业额</th>
        <td>{{data.turnover}}</td>
      </tr>
      <tr>
        <th>是否对外加工定制</th>
        <td>{{data.yon == '0' ? '否' : '是'}}</td>
        <th>注册资本</th>
        <td>{{data.registeredCapital}}元</td>
      </tr>
      <tr>
        <th>年出口额</th>
        <td>{{data.export}}</td>
        <th>厂房面积</th>
        <td>{{data.realField}}</td>
      </tr>
      <tr>
        <th>开户银行</th>
        <td>{{data.bank ? data.bank : '——'}} </td>
        <th>管理体系认证</th>
        <td>{{data.managementSystem}}</td>
      </tr>
      <tr>
        <th>企业网址</th>
        <td>{{data.website}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import HeaderCard from '~/components/headerCard'

export default {
  components: {
    HeaderCard
  },
  data() {
    return {

    };
  },
  props:['data'],
  created() {

  },
  computed: {

  },
  watch: {},
  methods: {

  },
}
</script>

<style lang='less' scoped>
table,table tr th, table tr td { border:1px solid rgba(210,210,210,1); }
  .compony-details{
    .tb{
      font-size:14px;
      color:rgba(51,51,51,1);
      line-height:26px;
      padding: 26px;
      tr{
        th{
          width:19%;
          background-color:#F2F2F2;
        }
        td{
          width:31%;
          padding: 20px;
        }
      }

    }
  }
</style>
