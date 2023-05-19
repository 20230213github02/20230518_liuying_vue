<template>
    <div>
    <h1>個人情報申請</h1>  
   <table>
     <tr>
       <td><span class="must0">申請情報登録日</span><span class="must">必須</span></td>
       <td>
        <span>{{ruleForm.Now }}</span>
       </td>
     </tr>

     <tr>
       <td><span class="must0">申請者名</span><span class="must">必須</span></td>
       <td><span>{{ruleForm.APLShinseisyaName  }}</span>  </td>
     </tr>

     <tr>
       <td><span class="must0">住所</span><span class="must">必須</span></td>
       <td>  
        <span>{{ ruleForm.APLAddressYubinNo3}} </span>
        <span>{{ ruleForm.APLAddressYubinNo4}} </span>
          <span>{{ ruleForm.APLAddressTodofuken}}</span>
            <span> {{ ruleForm.APLAddressShikuchoson}} </span>
              <span>{{ ruleForm. APLAddressBanchi}} </span>
                <span>{{ruleForm.APLAddressManshon}} </span>
       </td>
     </tr>
     <tr>
       <td><span class="must0">代表者の役職</span><span class="must">必須</span></td>
       <td>
        <span>{{ ruleForm.APLDaihyoshaYakushoku}}</span>
       </td>
     </tr>
     <tr>
       <td><span class="must0">代表者の氏名</span><span class="must">必須</span></td>
       <td>
        <span>{{ ruleForm.APLDaihyoshaName}}</span>
       </td>
     </tr>
     <tr>
       <td><span class="must0">法人番号</span><span class="must">必須</span></td>
       <td>
        <span> {{ruleForm.APLHojinNo}}</span>
       </td>
     </tr>
     <tr>
       <td><span class="must0">担当者の氏名</span><span class="must">必須</span></td>
       <td>
        <span>{{ ruleForm.APLTantoshaName}}</span>
       </td>
     </tr>
     <tr>
       <td><span class="must0">電話番号</span></td>
       <td>
        <span>{{ ruleForm.APLCSTEL}}</span>
       </td>
     </tr>
     <tr>
       <td><span class="must0">FAX番号</span></td>
       <td>
        <span> {{ ruleForm.APLCSFAX}}</span>
       </td>
     </tr>
     <tr>
       <td><span class="must0">担当者メールアドレス</span><span class="must">必須</span></td>
       <td>
        <span>{{ ruleForm.APLCSTantoshaMail}}</span>
       </td>
     </tr>
     <tr>
       <td><span class="must0">確認用メールアドレス</span></td>
       <td>
        <span> {{ ruleForm.APLCSKakuninyoMail}}</span>
       </td>
     </tr>
   </table>
   <button @click="submit">submit</button>
  </div>
</template>
<script>
import axios from 'axios';
export default{
    data() {
     return{
      ruleForm: {  }
  }
    },
    mounted() {
    // 获取路由参数
    this.ruleForm={
 Now : this.$route.query.Now,
 APLShinseisyaName :this.$route.query.APLShinseisyaName,
 APLAddressYubinNo3: this.$route.query.APLAddressYubinNo3,
 APLAddressYubinNo4: this.$route.query.APLAddressYubinNo4,
 APLAddressTodofuken: this.$route.query.APLAddressTodofuken,
 APLAddressShikuchoson: this.$route.query.APLAddressShikuchoson,
 APLAddressBanchi: this.$route.query.APLAddressBanchi,
 APLAddressManshon: this.$route.query.APLAddressManshon,
 APLDaihyoshaYakushoku: this.$route.query.APLDaihyoshaYakushoku,
 APLDaihyoshaName:this.$route.query.APLDaihyoshaName,
 APLHojinNo: this.$route.query.APLHojinNo,
 APLTantoshaName: this.$route.query.APLTantoshaName,
 APLCSTEL: this.$route.query.APLCSTEL,
 APLCSFAX: this.$route.query.APLCSFAX,
 APLCSTantoshaMail: this.$route.query.APLCSTantoshaMail,
 APLCSKakuninyoMail: this.$route.query.APLCSKakuninyoMail
}
  },
  methods:{
    submit() {
      // 提交数据到后台
     
      axios.post('http://localhost:8888/Apply/save', this.ruleForm
   )
                        .then(response => {
        // 处理提交结果
        console.log('数据提交到后台成功', response);
        alert('数据提交到后台成功')
      }).catch(error => {
          console.error('数据提交到后台失败', error);
          // 在这里处理请求失败后的逻辑
          alert('失败')
        });
    }
  }
}
</script>