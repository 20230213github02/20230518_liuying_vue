<template>
  <div>
  <h1>個人情報申請</h1>  
 <table>
   <tr>
     <td><span class="must0">申請情報登録日</span><span class="must">必須</span></td>
     <td>
      <span>{{ruleForm.now }}</span>
     </td>
   </tr>

   <tr>
     <td><span class="must0">申請者名</span><span class="must">必須</span></td>
     <td><span>{{ruleForm.aPLShinseisyaName  }}</span>  </td>
   </tr>

   <tr>
     <td><span class="must0">住所</span><span class="must">必須</span></td>
     <td>  
      <span>{{ ruleForm.aPLAddressYubinNo3}} </span>
      <span>{{ ruleForm.aPLAddressYubinNo4}} </span>
        <span>{{ ruleForm.aPLAddressTodofuken}}</span>
          <span> {{ ruleForm.aPLAddressShikuchoson}} </span>
            <span>{{ ruleForm. aPLAddressBanchi}} </span>
              <span>{{ruleForm.aPLAddressManshon}} </span>
     </td>
   </tr>
   <tr>
     <td><span class="must0">代表者の役職</span><span class="must">必須</span></td>
     <td>
      <span>{{ ruleForm.aPLDaihyoshaYakushoku}}</span>
     </td>
   </tr>
   <tr>
     <td><span class="must0">代表者の氏名</span><span class="must">必須</span></td>
     <td>
      <span>{{ ruleForm.aPLDaihyoshaName}}</span>
     </td>
   </tr>
   <tr>
     <td><span class="must0">法人番号</span><span class="must">必須</span></td>
     <td>
      <span> {{ruleForm.aPLHojinNo}}</span>
     </td>
   </tr>
   <tr>
     <td><span class="must0">担当者の氏名</span><span class="must">必須</span></td>
     <td>
      <span>{{ ruleForm.aPLHojinNo}}</span>
     </td>
   </tr>
   <tr>
     <td><span class="must0">電話番号</span></td>
     <td>
      <span>{{ ruleForm.aPLCSTEL}}</span>
     </td>
   </tr>
   <tr>
     <td><span class="must0">FAX番号</span></td>
     <td>
      <span> {{ ruleForm.aPLCSFAX}}</span>
     </td>
   </tr>
   <tr>
     <td><span class="must0">担当者メールアドレス</span><span class="must">必須</span></td>
     <td>
      <span>{{ ruleForm.aPLCSTantoshaMail}}</span>
     </td>
   </tr>
   <tr>
     <td><span class="must0">確認用メールアドレス</span></td>
     <td>
      <span> {{ ruleForm.aPLCSKakuninyoMail}}</span>
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
now : this.$route.query.Now,
aPLShinseisyaName :this.$route.query.aPLShinseisyaName,
aPLAddressYubinNo3: this.$route.query.aPLAddressYubinNo3,
aPLAddressYubinNo4: this.$route.query.aPLAddressYubinNo4,
aPLAddressTodofuken: this.$route.query.aPLAddressTodofuken,
aPLAddressShikuchoson: this.$route.query.aPLAddressShikuchoson,
aPLAddressBanchi: this.$route.query.aPLAddressBanchi,
aPLAddressManshon: this.$route.query.aPLAddressManshon,
aPLDaihyoshaYakushoku: this.$route.query.aPLDaihyoshaYakushoku,
aPLDaihyoshaName:this.$route.query.aPLDaihyoshaName,
aPLHojinNo: this.$route.query.aPLHojinNo,
aPLHojinNo: this.$route.query.aPLHojinNo,
aPLCSTEL: this.$route.query.aPLCSTEL,
aPLCSFAX: this.$route.query.aPLCSFAX,
aPLCSTantoshaMail: this.$route.query.aPLCSTantoshaMail,
aPLCSKakuninyoMail: this.$route.query.aPLCSKakuninyoMail
}
},
methods:{
  submit() {
    // 提交数据到后台
   
    // add by ZHY
    console.log(this.ruleForm);
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