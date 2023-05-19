<template>
    <div class="box">
     <h1>中小企業経営革新計画申請システム申請一覧</h1>

     <div class="d1" >
     <h2 >申請情報</h2>
     <button @click="register" class="button1">新規</button>
     </div>
 
     <div>
     <table>
       <tr class="title">
         <td>受付番号</td>
         <td>申請区分</td>
         <td>表紙_申請日</td>
         <td>公開用ステータス</td>
         <td>申請者更新日時</td>
       </tr>
       <tr v-for="item in tableData">
        <td v-if="(item.appUketsukeNo!='再開')">{{item.appUketsukeNo}} </td>
        <td v-else @click="project" style="text-decoration: underline; color: blue ;">{{item.appUketsukeNo}} </td>
         <td>{{ item.appShinseiKubun}}</td>
         <td>{{ item.appShinseiDate}}</td>
         <td>{{ item.appKokaiyoStatus}}</td>
         <td>{{ item.appShinseishaKoshinDateTime}}</td>
       </tr>
     </table>
    </div>
   <br><br>
    <div class="d3">
     <el-pagination
       v-model:current-page="pageNum"
       v-model:page-size="pageSize"
       :page-sizes="[5, 10, 15]"
       :small="small"
       :disabled="disabled"
       :background="background"
       layout="total, sizes, prev, pager, next, jumper"
       :total="total"
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
     />
    </div>

 <br><br><br>
   
    <div >
     <h2 >お知らせ</h2>
     <button  @click="all" class="button2">お知らせ一覧 > </button>
     
     <br><br><br>
     <hr>
      <div>
       <ul v-for="item in tableData1" :key="item.id"  style="border-style: double;">
       
        <li style="color: blue ;"> {{item.ntcDATE.replace('-','年').replace('-','月')+"日"}} </li>
        <br>
         <li class="title" @click="show(item)" :title='item.ntcTITLE'>{{item.ntcTITLE.length > 15?item.ntcTITLE.substring(0,15)+"..." : item.ntcTITLE}}</li>
         <br>
         <li v-show="item.isShow"  >{{ item.ntcJUYO }}</li>
         <br><br>
       </ul>
      </div>
    
    </div>
 
 </div>
 </template>

 <script>
 export default{
   name:'Home',
   components:{
   },
   data(){
    return{
     tableData:[
         {
           appUketsukeNo:"",
           appShinseiKubun:"",
           appShinseiDa:"",
           appKokaiyoStatus:"",
           appShinseishaKoshinDateTime:""
         }
       ],
       total:0,
       pageNum:1,
       pageSize:5,

      tableData1:[
        { 
          ntcDATE:"",
          ntcTITLE:"",
          ntcJUYO:""
        }
      ],
      isShow:false
      
    }},

     created(){
     this.load(),
     this.load1()
     
     },

   
     methods:{
     load(){
       fetch("http://localhost:8888/user/page?pageNum="+this.pageNum+"&pageSize="+this.pageSize)
       .then(res =>res.json()).then(res=>{
       console.log(res)
        this.tableData=res.data
        this.total=res.total
        })
      
       },
       load1(){
       fetch("http://localhost:8888/user/date")
      .then(res =>res.json()).then(res=>{
       console.log("请求成功了",res)
       this.tableData1=res },
       error=>{
       console.log("请求失败了", error.message)
   })},

  



   handleSizeChange(pageSize){
       console.log(pageSize)
       this.pageSize=pageSize
       this.load()
     },
 
     handleCurrentChange(pageNum){
       console.log(pageNum)
       this.pageNum=pageNum
       this.load()
     },

     register(){ //指定跳转的路由的名字下
    this.$router.push('/Register');
     },

    project () { //指定跳转的路由的名字下
    this.$router.push('/Project');
},
show(item) {
      if(!item.isShow){
       
        item.isShow=!item.isShow}
        
      },
    
      all(){
       fetch("http://localhost:8888/user/notification")
      .then(res =>res.json()).then(res=>{
       console.log("请求成功了",res)
       this.tableData1=res },
       error=>{
       console.log("请求失败了", error.message)
   })},
    

  


  
   }
 }

 </script>

 <style>
 .box {
             margin: auto;
             padding: 0px;
             font-size: 15px;
             color: rgb(83, 81, 81);
             width: 90%;
         }
 h1{
   text-align: center;
 }
 h2{
   float: left;
 }
  table{
             margin: auto;
             border:1px solid gray;
             width: 100%;
             border-spacing:0;
             border-collapse:collapse;
             text-align: center;
         }
 
         tr{
             border:1px solid gray;
             padding:10px;
         }
         
         td{
             border:1px solid gray;
             padding:10px;
             width:20%
         }
         .title{
           font-weight: 800;
           background-color:rgb(51, 111, 214);
           color: #ffffff;
           
         }
 .d3{
   display: flex;
   justify-content: center;
 }
  .button1{
             width: 100px;
             height: 30px;
             line-height: 10px;
             background:rgb(51, 111, 214);
             color: #ffffff;
             font-size: 18px;
             border-radius: 5px;
             text-align: center;
             border: none;
             float: right;
             margin-top: 20px;
             margin-right: 60px;
         }
  .button2{
             width: 150px;
             height: 30px;
             line-height: 10px;
             background:rgb(51, 111, 214);
             color: #ffffff;
             font-size: 18px;
             border-radius: 5px;
             text-align: center;
             border: none;
             float: right;
             margin-top: 20px;
             margin-right: 20px;
         }

 li{

list-style: none;

}
.active{
	display:none;
}

.title{
  background-color: white;
  color:black
}
 
 </style>
 