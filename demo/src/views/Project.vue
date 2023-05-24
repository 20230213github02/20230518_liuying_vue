<template>
  <div>
    <h1>個人情報申請</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="project-ruleForm">

      <table>
        <tr>
          <td><span class="must0">申請情報登録日</span><span class="must">必須</span></td>
          <td>
            <el-form-item prop="Now">
              <el-input v-model="ruleForm.now"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="must0">申請者名</span><span class="must">必須</span></td>
          <td>
            <el-form-item prop="aPLShinseisyaName">
              <el-input v-model="ruleForm.aPLShinseisyaName"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="must0">住所</span><span class="must">必須</span></td>
          <td>
            <el-row>
              <el-col :span="8">
                <el-form-item prop="aPLAddressYubinNo3" label="〒">
                  <el-input v-model="ruleForm.aPLAddressYubinNo3"></el-input>
                </el-form-item>
              </el-col>
              <span>-</span>
              <el-col :span="8">
                <el-form-item prop="aPLAddressYubinNo4">
                  <el-input v-model="ruleForm.aPLAddressYubinNo4" @blur="blur"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="都道府県" prop="aPLAddressTodofuken">
              <el-select v-model="ruleForm.aPLAddressTodofuken" placeholder="都道府県を選択してください。">
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
            <el-form-item label="市区町村" prop="aPLAddressShikuchoson">
              <el-input v-model="ruleForm.aPLAddressShikuchoson"></el-input>
            </el-form-item>
            <el-form-item label="字・番地等" prop="aPLAddressBanchi">
              <el-input v-model="ruleForm.aPLAddressBanchi"></el-input>
            </el-form-item>
            <el-form-item label="マンション名等" prop="aPLAddressManshon">
              <el-input v-model="ruleForm.aPLAddressManshon"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="must0">代表者の役職</span><span class="must">必須</span></td>
          <td>
            <el-form-item prop="aPLDaihyoshaYakushoku">
              <el-input v-model="ruleForm.aPLDaihyoshaYakushoku"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="must0">代表者の氏名</span><span class="must">必須</span></td>
          <td>
            <el-form-item prop="aPLDaihyoshaName">
              <el-input v-model="ruleForm.aPLDaihyoshaName"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="must0">法人番号</span><span class="must">必須</span></td>
          <td>
            <el-form-item prop="aPLHojinNo">
              <el-input v-model="ruleForm.aPLHojinNo"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="must0">担当者の氏名</span><span class="must">必須</span></td>
          <td><el-form-item prop="aPLHojinNo">
              <el-input v-model="ruleForm.aPLHojinNo"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="must0">電話番号</span></td>
          <td>
            <el-form-item prop="aPLCSTEL">
              <el-input v-model="ruleForm.aPLCSTEL"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="must0">FAX番号</span></td>
          <td>
            <el-form-item prop="aPLCSFAX">
              <el-input v-model="ruleForm.aPLCSFAX"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="must0">担当者メールアドレス</span><span class="must">必須</span></td>
          <td>
            <el-form-item prop="aPLCSTantoshaMail">
              <el-input v-model="ruleForm.aPLCSTantoshaMail"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="must0">確認用メールアドレス</span></td>
          <td>
            <el-form-item prop="aPLCSKakuninyoMail">
              <el-input v-model="ruleForm.aPLCSKakuninyoMail"></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <el-form-item>
            <el-button type="primary" @click="saveData">一時保存</el-button>
            <el-button type="primary" @click="back">戻る</el-button>
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
        if (this.ruleForm.aPLCSKakuninyoMail !== '') {
          this.$refs.ruleForm.validateField('aPLCSKakuninyoMail');
        }
        callback();
      }
    };
    let validateMail2 = (rule, value, callback) => {
      if (value === '') { callback(); }
      else if (value !== this.ruleForm.aPLCSTantoshaMail) {
        callback(new Error('確認用メールアドレスは担当者メールアドレスと一致しません。'));
      }
    };
    return {


      ruleForm: {
        now: '',
        aPLShinseisyaName: '',
        aPLAddressYubinNo3: '',
        aPLAddressYubinNo4: '',
        aPLAddressTodofuken: '',
        aPLAddressShikuchoson: '',
        aPLAddressBanchi: '',
        aPLAddressManshon: '',
        aPLDaihyoshaYakushoku: '',
        aPLDaihyoshaName: '',
        aPLHojinNo: '',
        aPLHojinNo: '',
        aPLCSTEL: '',
        aPLCSFAX: '',
        aPLCSTantoshaMail: '',
        aPLCSKakuninyoMail: ''
      },
      rules: {
        aPLShinseisyaName: [
          { required: true, message: '申請者名を入力してください。', trigger: 'blur' },
          { max: 50, message: '50字内で再入力してください。', trigger: 'blur', },
        ],
        aPLAddressYubinNo3: [
          { required: true, message: '郵便番号を入力してください。', trigger: 'blur' },
          { pattern: /^[0-9]+$/, message: '半角数字で入力してください。', trigger: 'blur' },
          { max: 3, message: '3桁で再入力してください。', trigger: 'blur', },
        ],
        aPLAddressYubinNo4: [
          { required: true, message: '郵便番号を入力してください。', trigger: 'blur' },
          { pattern: /^[0-9]+$/, message: '半角数字で入力してください。', trigger: 'blur' },
          { max: 4, message: '4桁で再入力してください。', trigger: 'blur', },
        ],
        aPLAddressTodofuken: [
          { required: true, message: '都道府県を選択してください。', trigger: 'change' },
        ],
        aPLAddressShikuchoson: [
          { required: true, message: '市区町村を入力してください。', trigger: 'blur' },
          { max: 40, message: '40字内で再入力してください。', trigger: 'blur', },
        ],
        aPLAddressBanchi: [
          { required: true, message: '字・番地等を入力してください。', trigger: 'blur' },
          { max: 255, message: '255字内で再入力してください。', trigger: 'blur', },
        ],
        aPLAddressManshon: [
          { required: true, message: 'マンション名等を入力してください。', trigger: 'blur' },
          { max: 255, message: '255字内で再入力してください。', trigger: 'blur', },
        ],
        aPLDaihyoshaYakushoku: [
          { required: true, message: '代表者の役職を入力してください。', trigger: 'blur' },
          { max: 255, message: '255字内で再入力してください。', trigger: 'blur', },
        ],
        aPLDaihyoshaName: [
          { required: true, message: '代表者の氏名を入力してください。', trigger: 'blur' },
          { max: 40, message: '40字内で再入力してください。', trigger: 'blur', },
        ],
        aPLHojinNo: [
          { required: true, message: '法人番号を入力してください。', trigger: 'blur' },
          { max: 13, message: '13字内で再入力してください。', trigger: 'blur', },
        ],
        aPLHojinNo: [
          { required: true, message: '担当者の氏名を入力してください。', trigger: 'blur' },
          { max: 255, message: '255字内で再入力してください。', trigger: 'blur', },
        ],
        aPLCSTEL: [
          { pattern: /^\d{10}$|^\d{11}$/, message: '正確な携帯番号で入力してください。', trigger: 'blur' },
        ],
        aPLCSFAX: [
          { pattern: /^\d{10}$|^\d{11}$/, message: '正確なFAX番号で入力してください。', trigger: 'blur' },

        ],
        aPLCSTantoshaMail: [
          { validator: validateMail, trigger: 'blur' },
          { pattern: /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/, message: '正確な電子メール形式を入力してください。', trigger: 'blur', },
        ],
        aPLCSKakuninyoMail: [
          { validator: validateMail2, trigger: 'blur' },
          { pattern: /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/, message: '正確な電子メール形式を入力してください。', trigger: 'blur', },
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
    this.ruleForm.now = formattedDate;

    // 检查本地存储中是否存在表单数据
    const savedData = localStorage.getItem('ruleForm')
    if (savedData) {
      // zhy注释掉
      localStorage.setItem('ruleForm', JSON.stringify(this.ruleForm))
      this.ruleForm = JSON.parse(savedData)
    }
  },


  methods: {


    blur() {
      axios.get(url + this.ruleForm.aPLAddressYubinNo3 + this.ruleForm.aPLAddressYubinNo4).then((res) => {
        console.log(res.data.results[0])
        this.ruleForm.aPLAddressTodofuken = res.data.results[0].address1;
        this.ruleForm.aPLAddressShikuchoson = res.data.results[0].address2;
        this.ruleForm.aPLAddressBanchi = res.data.results[0].address3;
      })
    },

    saveData() {
      // zhy注释掉
      localStorage.setItem('ruleForm', JSON.stringify(this.ruleForm))
      // zhy添加这行
      // localStorage.setItem('ruleForm', this.ruleForm)
      this.$message('一時保存が正常に終了しました。');
    },

    back() {
      this.$router.push('/Home');
    },

    check() {
      this.$refs.ruleForm.validate(valid => {
        console.log(valid)

        if (valid) {

          // added by zhy
          console.log(this.$refs.ruleForm)


          this.$router.push({
            path: '/Confirm',
            query:
              this.ruleForm

          })


        }
      })





    }

  }

}






</script>
<style>
h1 {
  font-size: 28px;
  text-align: center;
}

table {
  margin: auto;
  border: 1px solid gray;
  width: 90%;
  border-spacing: 0;
  border-collapse: collapse;
}

tr,
td {
  border: 1px solid gray;
  padding: 10px;
}

.must {
  float: right;
  background: rgb(235, 67, 67);
  font-size: 10px;
  width: 35px;
  height: 20px;
  color: white;
  text-align: center;
  line-height: 20px;
  border-radius: 13px;
  border: none;
}
</style>