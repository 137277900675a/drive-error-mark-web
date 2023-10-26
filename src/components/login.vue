<template>
  <div class="container">
    <div class="login-box">
      <h2 style="color: black">系统用户登录</h2>
      <form @submit.prevent="handleSubmit">
        <div class="login-options">
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
            style="margin: 0 -10px"
          >
            <el-tab-pane
              label="证书登录"
              name="certificate"
              style="width: 100%"
            >
              <div class="form-group">
                <el-input
                  v-model="certificate"
                  placeholder="证书编号"
                  :prefix-icon="User"
                />
                <el-input
                  v-model="certificatePassword"
                  placeholder="证书密码"
                  :prefix-icon="Lock"
                  type="password"
                />
              </div>
            </el-tab-pane>
            <el-tab-pane label="账密登录" name="password" style="width: 100%">
              <div class="form-group">
                <el-input
                  v-model="username"
                  placeholder="用户名"
                  :prefix-icon="User"
                />
                <!-- <i class="el-icon-edit"></i> -->
                <el-input
                  v-model="password"
                  placeholder="密码"
                  :prefix-icon="Lock"
                  type="password"
                />
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <el-button type="primary" style="width: auto">登录</el-button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      activeName: "certificate",
      username: "",
      certificate: "",
      certificatePassword: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // Perform login logic with Axios
      const loginData = {
        type: this.activeName,
        username: this.username,
        certificate: this.certificate,
        password:
          this.activeName === "certificate"
            ? this.certificatePassword
            : this.password,
      };

      axios
        .post("your_login_endpoint", loginData)
        .then((response) => {
          // Handle the response, e.g., redirect on successful login
          console.log(response.data);
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
        });
    },
    handleClick(tab) {
      // Switch login type when a tab is clicked
      this.activeName = tab;
    },
  },
};
</script>
<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
</script>

<style scoped>
/* Your existing styles can remain as they are */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

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
