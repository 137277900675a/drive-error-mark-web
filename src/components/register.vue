<template>
  <div class="container">
    <div class="register-box">
      <h2>系统用户注册</h2>
      <form @submit.prevent="handleRegister">
        <div class="register-options">
          <div class="form-group">
            <el-input
              v-model="username"
              placeholder="用户名"
              :prefix-icon="User"
            />
            <el-input
              v-model="password"
              placeholder="密码"
              :prefix-icon="Lock"
              type="password"
            />
            <el-input
              v-model="confirmPassword"
              placeholder="确认密码"
              :prefix-icon="Lock"
              type="password"
            />
            <el-input
              v-model="inviteCode"
              placeholder="邀请码"
              :prefix-icon="User"
            />
            <el-checkbox v-model="agreeToTerms">我同意注册协议</el-checkbox>
          </div>
        </div>
        <el-button @click="register" type="primary" style="width: auto"
          >注册</el-button
        >
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      inviteCode: "",
      agreeToTerms: false,
      error: "",
    };
  },
  methods: {
    async register() {
      const username = this.username;
      const password = this.password;
      const confirmPassword = this.confirmPassword;
      const inviteCode = this.inviteCode;

      if (password !== confirmPassword) {
        this.error = "两次输入的密码不一致";
        return;
      }

      if (!inviteCode) {
        this.error = "请输入邀请码";
        return;
      }

      if (!this.agreeToTerms) {
        this.error = "您必须同意注册协议才能继续";
        return;
      }

      try {
        const response = await axios.post("/api/register", {
          username,
          password,
          inviteCode,
        });

        if (response.data.success) {
          console.log(response.data);
        } else {
          this.error = response.data.message;
        }
      } catch (error) {
        this.error = "请求失败，请稍后重试";
      }
    },
  },
};
</script>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("img/bg.jpg");
  background-size: cover;
  background-position: center;
}

.register-box {
  text-align: center;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  background-color: rgba(249, 249, 249, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  animation: float 3s infinite;
}

h2 {
  color: #000000;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.el-input {
  border: 1px solid #ccc;
  border-radius: 5px;
}

.el-button {
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.el-button:hover {
  background-color: #2c83ff;
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
</style>
