<template>
  <div>
   <h1>個人情報申請</h1>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="project-ruleForm">
    
  <table>
    <tr>
      <td><span class="must0">申請情報登録日</span><span class="must">必須</span></td>
      <td>
        <el-form-item prop="Now" >
           <el-input v-model="ruleForm.Now"></el-input>
        </el-form-item>
      </td>
    </tr>
    <tr>
      <td><span class="must0">申請者名</span><span class="must">必須</span></td>
      <td>
        <el-form-item prop="APLShinseisyaName" >
           <el-input v-model="ruleForm.APLShinseisyaName"></el-input>
        </el-form-item>
      </td>
    </tr>
    <tr>
      <td><span class="must0">住所</span><span class="must">必須</span></td>
      <td>
        <el-row>
          <el-col :span="8">
           <el-form-item prop="APLAddressYubinNo3" label="〒">
             <el-input v-model="ruleForm.APLAddressYubinNo3"></el-input>
           </el-form-item>
         </el-col>
         <span>-</span>
         <el-col :span="8">
        <el-form-item prop="APLAddressYubinNo4">
           <el-input v-model="ruleForm.APLAddressYubinNo4" @blur="blur"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
        <el-form-item label="都道府県" prop="APLAddressTodofuken">
 <el-select v-model="ruleForm.APLAddressTodofuken" placeholder="都道府県を選択してください。">
<el-option label="北海道" value="北海道"></el-option>
<el-option label="青森県" value="青森県"></el-option>
<el-option label="岩手県" value="岩手県"></el-option>
<el-option label="宮城県" value="宮城県"></el-option>
<el-option label="秋田県" value="秋田県"></el-option>
 <el-option label="山形県" value="山形県"></el-option>
  <el-option label="福島県" value="福島県"></el-option>
<el-option label="茨城県" value="茨城県"></el-option>
<el-option label="栃木県" value="栃木県"></el-option>
 <el-option label="群馬県" value="群馬県"></el-option>
<el-option label="埼玉県" value="埼玉県"></el-option>
 <el-option label="千葉県" value="千葉県"></el-option>
 <el-option label="東京都" value="東京都"></el-option>
 <el-option label="神奈川県" value="神奈川県"></el-option>
<el-option label="新潟県" value="新潟県"></el-option>
 <el-option label="富山県" value="富山県"></el-option>
 <el-option label="石川県" value="石川県"></el-option>
 <el-option label="福井県" value="福井県"></el-option>
<el-option label="山梨県" value="山梨県"></el-option>
 <el-option label="長野県" value="長野県"></el-option>
 <el-option label="岐阜県" value="岐阜県"></el-option>
 <el-option label="静岡県" value="静岡県"></el-option>
 <el-option label="愛知県" value="愛知県"></el-option>
 <el-option label="三重県" value="三重県"></el-option>
<el-option label="滋賀県" value="滋賀県"></el-option>
<el-option label="京都府" value="京都府"></el-option>
 <el-option label="大阪府" value="大阪府"></el-option>
 <el-option label="兵庫県" value="兵庫県"></el-option>
 <el-option label="奈良県" value="奈良県"></el-option>
 <el-option label="和歌山県" value="和歌山県"></el-option>
 <el-option label="鳥取県" value="鳥取県"></el-option>
<el-option label="島根県" value="島根県"></el-option>
 <el-option label="岡山県" value="岡山県"></el-option>
 <el-option label="広島県" value="広島県"></el-option>
 <el-option label="山口県" value="山口県"></el-option>
 <el-option label="徳島県" value="徳島県"></el-option>
 <el-option label="香川県" value="香川県"></el-option>
 <el-option label="愛媛県" value="愛媛県"></el-option>
 <el-option label="高知県" value="高知県"></el-option>
 <el-option label="福岡県" value="福岡県"></el-option>
 <el-option label="佐賀県" value="佐賀県"></el-option>
 <el-option label="長崎県" value="長崎県"></el-option>
 <el-option label="熊本県" value="熊本県"></el-option>
 <el-option label="大分県" value="大分県"></el-option>
 <el-option label="宮崎県" value="宮崎県"></el-option>
<el-option label="鹿児島県" value="鹿児島県"></el-option>
 <el-option label="沖縄県" value="沖縄県"></el-option>
</el-select>
        </el-form-item>
        <el-form-item label="市区町村" prop="APLAddressShikuchoson">
      <el-input v-model="ruleForm.APLAddressShikuchoson"></el-input>
      </el-form-item>
 <el-form-item label="字・番地等" prop="APLAddressBanchi">
<el-input v-model="ruleForm.APLAddressBanchi"></el-input>
</el-form-item>
<el-form-item label="マンション名等" prop="APLAddressManshon">
 <el-input v-model="ruleForm.APLAddressManshon"></el-input>
</el-form-item>
      </td>
    </tr>
    <tr>
      <td><span class="must0">代表者の役職</span><span class="must">必須</span></td>
      <td>
        <el-form-item prop="APLDaihyoshaYakushoku" >
           <el-input v-model="ruleForm.APLDaihyoshaYakushoku"></el-input>
        </el-form-item>
      </td>
    </tr>
    <tr>
      <td><span class="must0">代表者の氏名</span><span class="must">必須</span></td>
      <td>
        <el-form-item prop="APLDaihyoshaName" >
           <el-input v-model="ruleForm.APLDaihyoshaName"></el-input>
        </el-form-item>
      </td>
    </tr>
    <tr>
      <td><span class="must0">法人番号</span><span class="must">必須</span></td>
      <td>
        <el-form-item prop="APLHojinNo" >
           <el-input v-model="ruleForm.APLHojinNo"></el-input>
        </el-form-item>
      </td>
    </tr>
    <tr>
      <td><span class="must0">担当者の氏名</span><span class="must">必須</span></td>
      <td><el-form-item prop="APLTantoshaName" >
           <el-input v-model="ruleForm.APLTantoshaName"></el-input>
        </el-form-item>
      </td>
    </tr>
    <tr>
      <td><span class="must0">電話番号</span></td>
      <td>
        <el-form-item prop="APLCSTEL" >
           <el-input v-model="ruleForm.APLCSTEL"></el-input>
        </el-form-item>
      </td>
    </tr>
    <tr>
      <td><span class="must0">FAX番号</span></td>
      <td>
        <el-form-item prop="APLCSFAX" >
           <el-input v-model="ruleForm.APLCSFAX"></el-input>
        </el-form-item>
      </td>
    </tr>
    <tr>
      <td><span class="must0">担当者メールアドレス</span><span class="must">必須</span></td>
      <td>
        <el-form-item prop="APLCSTantoshaMail" >
           <el-input v-model="ruleForm.APLCSTantoshaMail"></el-input>
        </el-form-item>
      </td>
    </tr>
    <tr>
      <td><span class="must0">確認用メールアドレス</span></td>
      <td>
        <el-form-item prop="APLCSKakuninyoMail" >
           <el-input v-model="ruleForm.APLCSKakuninyoMail"></el-input>
        </el-form-item>
      </td>
    </tr>
    <tr>
      <el-form-item>
 <el-button type="primary" @click="saveData" >一時保存</el-button>
<el-button type="primary" @click="back" >戻る</el-button>
<el-button type="primary" @click="check">内容確認</el-button>

 </el-form-item>
    </tr>

  </table>
    
  </el-form>
</div>
</template>
<script>
 import axios from 'axios';
 let url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=';
export default {
 
  
  data() {
    
   let validateMail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('担当者メールアドレスを入力してください。'));
        } else {
          if (this.ruleForm.APLCSKakuninyoMail !== '') {
            this.$refs.ruleForm.validateField('APLCSKakuninyoMail');
          }
          callback();
        }
      };
      let validateMail2 = (rule, value, callback) => {
       if (value===''){callback();}
      else if (value !== this.ruleForm.APLCSTantoshaMail) {
          callback(new Error('確認用メールアドレスは担当者メールアドレスと一致しません。'));
        } 
      };
   return {
    
   
   ruleForm: {  
    Now:'',
    APLShinseisyaName:'',
    APLAddressYubinNo3:'',
    APLAddressYubinNo4:'',
    APLAddressTodofuken:'',
    APLAddressShikuchoson:'',
    APLAddressBanchi:'',
    APLAddressManshon:'',
    APLDaihyoshaYakushoku:'',
    APLDaihyoshaName:'',
    APLHojinNo:'',
    APLTantoshaName:'',
    APLCSTEL:'',
    APLCSFAX:'',
    APLCSTantoshaMail:'',
    APLCSKakuninyoMail:''
   },
  rules: {
  APLShinseisyaName: [
  { required: true, message: '申請者名を入力してください。', trigger: 'blur' },
  { max: 50, message: '50字内で再入力してください。', trigger: 'blur',},
  ],
  APLAddressYubinNo3: [
  { required: true, message: '郵便番号を入力してください。', trigger: 'blur' },
  {  pattern:/^[0-9]+$/, message: '半角数字で入力してください。', trigger: 'blur' },
  { max: 3, message: '3桁で再入力してください。', trigger: 'blur',},
  ],
  APLAddressYubinNo4: [
  {  required: true, message: '郵便番号を入力してください。', trigger: 'blur' },
  {  pattern:/^[0-9]+$/, message: '半角数字で入力してください。', trigger: 'blur' },
  { max: 4, message: '4桁で再入力してください。', trigger: 'blur',},
  ],
  APLAddressTodofuken: [
  {  required: true, message: '都道府県を選択してください。', trigger: 'change' },
  ],
  APLAddressShikuchoson: [
  {  required: true, message: '市区町村を入力してください。', trigger: 'blur' },
  { max: 40, message: '40字内で再入力してください。', trigger: 'blur',},
  ],
  APLAddressBanchi: [
  {  required: true, message: '字・番地等を入力してください。', trigger: 'blur' },
  { max: 255, message: '255字内で再入力してください。', trigger: 'blur',},
  ],
  APLAddressManshon: [
  {  required: true, message: 'マンション名等を入力してください。', trigger: 'blur' },
  { max: 255, message: '255字内で再入力してください。', trigger: 'blur',},
  ],
  APLDaihyoshaYakushoku: [
  {  required: true, message: '代表者の役職を入力してください。', trigger: 'blur' },
  { max: 255, message: '255字内で再入力してください。', trigger: 'blur',},
  ],
  APLDaihyoshaName: [
  {  required: true, message: '代表者の氏名を入力してください。', trigger: 'blur' },
  { max: 40, message: '40字内で再入力してください。', trigger: 'blur',},
  ],
  APLHojinNo: [
  {  required: true, message: '法人番号を入力してください。', trigger: 'blur' },
  { max: 13, message: '13字内で再入力してください。', trigger: 'blur',},
  ],
  APLTantoshaName: [
  {  required: true, message: '担当者の氏名を入力してください。', trigger: 'blur' },
  { max: 255, message: '255字内で再入力してください。', trigger: 'blur',},
  ],
  APLCSTEL: [
  {  pattern:/^\d{10}$|^\d{11}$/, message: '正確な携帯番号で入力してください。', trigger: 'blur' },
  ],
  APLCSFAX: [
  { pattern:/^\d{10}$|^\d{11}$/, message: '正確なFAX番号で入力してください。', trigger: 'blur' },
  
  ],
  APLCSTantoshaMail: [
  {  validator: validateMail, trigger: 'blur' },
  { pattern:/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/, message: '正確な電子メール形式を入力してください。', trigger: 'blur',},
  ],
  APLCSKakuninyoMail: [
  {  validator: validateMail2, trigger: 'blur' },
  { pattern:/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/, message: '正確な電子メール形式を入力してください。', trigger: 'blur',},
  ],
  
   }
   };
   },
   mounted() {
     
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const formattedDate = `${year}年${month.toString().padStart(2, '0')}月${day.toString().padStart(2, '0')}日`;
    this.ruleForm.Now = formattedDate;
   
    // 检查本地存储中是否存在表单数据
    const savedData = localStorage.getItem('ruleForm')
    if (savedData) {
      localStorage.setItem('ruleForm', JSON.stringify(this.ruleForm))
      this.ruleForm = JSON.parse(savedData)
    }
  },


  methods: {
    
   
    blur() {
      axios.get(url + this.ruleForm.APLAddressYubinNo3+this.ruleForm.APLAddressYubinNo4).then((res) => {
        console.log(res.data.results[0])
        this.ruleForm.APLAddressTodofuken = res.data.results[0].address1;
        this.ruleForm.APLAddressShikuchoson = res.data.results[0].address2;
        this.ruleForm.APLAddressBanchi = res.data.results[0].address3;
      })
    },

    saveData(){
      localStorage.setItem('ruleForm', JSON.stringify(this.ruleForm))
      this.$message('一時保存が正常に終了しました。');
    },

    back(){
      this.$router.push('/Home');
    },

    check() {
      // this.$refs.ruleForm.validate(valid => {
        
      //   if (valid) {
         
         
    
   this.$router.push({
        path: '/Confirm',
        query: 
          this.ruleForm
        
      })

        
    // }
    // })  
    
    



    }
                      
                }

     }
    

   
   
  
  
  </script>
  <style>
    h1{
            font-size: 28px;
            text-align: center;
        }
  table{
            margin: auto;
            border:1px solid gray;
            width: 90%;
            border-spacing:0;
            border-collapse:collapse;
        }

        tr,td{
            border:1px solid gray;
            padding:10px;
        }
        .must{
            float: right;
            background:rgb(235, 67, 67);
            font-size: 10px;
            width:35px;
            height:20px;
            color:white;
            text-align: center;
            line-height: 20px;
            border-radius: 13px;
            border: none;
        }
</style>