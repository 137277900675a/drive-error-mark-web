<template>
  <div class="container">
    <div class="login-box">
      <h2 style="color: black">系统用户登录</h2>
      <form @submit.prevent="handleSubmit">
        <div class="login-options">
          <a
            @click="switchLoginType('certificate')"
            :class="{ active: loginType === 'certificate' }"
            :style="{
              textDecoration:
                loginType === 'certificate' ? 'underline' : 'none',
              color: loginType === 'certificate' ? 'blue' : 'gray',
            }"
            >证书登录</a
          >
          <a
            @click="switchLoginType('password')"
            :class="{ active: loginType === 'password' }"
            :style="{
              textDecoration: loginType === 'password' ? 'underline' : 'none',
              color: loginType === 'password' ? 'blue' : 'gray',
            }"
            >账号密码登录</a
          >
        </div>
        <div class="form-group" v-if="loginType === 'certificate'">
          <label for="certificate" style="color: black"> </label>
          <input
            type="text"
            id="certificate"
            v-model="certificate"
            placeholder="证书编号"
          />
          <br />
          <label for="password" style="color: black"> </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="证书密码"
          /><br />
        </div>
        <div class="form-group" v-if="loginType === 'password'">
          <label for="username" style="color: black"> </label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="用户名"
          /><br />
          <label for="password" style="color: black"> </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="密码"
          /><br />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginType: "certificate",
      username: "",
      certificate: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // 在这里编写登录逻辑
      console.log("登录方式:", this.loginType);
      console.log("用户名:", this.username);
      console.log("证书编号:", this.certificate);
      console.log("密码:", this.password);
    },
    switchLoginType(type) {
      this.loginType = type;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100vh;
  background-image: url("img/bg.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container form {
  width: 100%;
  max-width: 600px;
}

.login-box {
  text-align: center;
  width: 80%;
  max-width: 400px;
  background-color: rgba(249, 249, 249, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  box-sizing: border-box;
  animation: float 3s infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.login-box h2 {
  margin-bottom: 20px;
  color: #3498db;
}

.login-options {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.login-options a {
  margin: 0 10px;
  text-decoration: none;
  color: #3498db;
  cursor: pointer;
  transition: color 0.3s ease;
}

.login-options a.active {
  font-weight: bold;
  color: #2c83ff;
}

.form-group {
  margin-bottom: 20px; /* 更改输入框之间的间距为30px */
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 20px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="text"]::placeholder,
input[type="password"]::placeholder {
  font-style: italic;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2c83ff;
}

.fa {
  font-size: 16px;
  margin-right: 5px;
}
</style>
