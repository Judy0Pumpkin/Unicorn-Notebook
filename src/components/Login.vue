<template>

<head>
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link> -->

</head>

    <div>
        <div class="pageLogin">
            <div class= "box">

                <v-form  @submit.prevent="login()">
                    <v-text-field
                        v-model="userName"
                        label="Email"
                        required
                        type="email"
                        :rules="emailRules"
                        
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        label="Password"
                        required
                        type="password"
                    ></v-text-field>
                <v-btn block class="mt-2" type="submit">Login</v-btn>
                <v-btn  block class="mt-2"
                @click=createAccount()>Create Account</v-btn>
                </v-form>
                
            </div>

            <v-img class="mx-auto" content
                            src="@/assets/welcome.png"

                            width="20vw"
                            min-width="220px"
                            cover
                            align-self="center"
                        
                            >
                </v-img>
            </div>
       


    </div>
</template>


<script>

import { signIn,auth, createAccount } from '@/plugins/fireBase';

    export default {
        data:()=>({
            userName: "",
            password: "",
            user:"",
            emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },]

   

        }),

        message:{
        },

        components:{
            
        },
        computed:{
    
        },
        methods:{
            async login() {

        
                signIn(this.userName,this.password).then((user) => {
                this.user =user;

                    this.$router.push('/welcome');

                    setTimeout(() => {
                    this.$router.push('/homepage');
                    }, 1500);



               

               
        
           

            


                })
                // 失敗的行為一律交給了 catch
                .catch((errorMessage) => {
                    window.alert(errorMessage);
                    console.log(errorMessage);

                });
                

               

},

                async createAccount(){
                    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
                    if (!this.password.length >= 8) {
                        
                        alert('Password should have more than 8 characters.');
      
                    }
                    else if(this.password==0) {
                        alert( 'This field is required.');
                    }
                    else if(!regularExpression.test(this.password)) {
                        alert( "password should contain atleast one number and one special character");
                    }

                    else{
                    createAccount(this.userName, this.password)
                    .then(()=>{
                        console.log(this.userName);
                        console.log(this.password);
                    })
                    .catch((e)=>{
                        console.log(e);
                    });
                }

                },


    required: function(value) {
      if (value) {
        return true;
      } else {
        return 'This field is required.';
      }
    },
    min6: function(value) {
      if (value.length >= 8) {
        return true;
      } else {
        return 'Password should have more than 8 characters.';
      }
    },
    special: function(value){
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(!regularExpression.test(value)) {
         return "password should contain atleast one number and one special character";
        }
    }



        },
        mounted(){
            auth.onAuthStateChanged((user)=>{console.log(user)} )
    },
    
    }
       
</script>


<style lang="css" scoped>
.box{

    position:relative;
    width :40vw;
    height :auto;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 40px;
    padding-left: 40px;
    display:space-around;
    justify-content:center;
    align-self: center;
    justify-self: center;
    border-style: solid;
  border-color: #92a8d1;
    margin-top: 28vh;
    min-width: 300px;
}
 
.v-img_img{
    position:relative;
    left: 60px;



}

.pageLogin{
    height: auto;
    width: 100vw;
    align-self: center;
    justify-content: center;
    align-content: center;
    display:contents;

  }

  /* ///////////// */

 
</style>
