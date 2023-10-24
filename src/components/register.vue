<template>
  <div class="register-page">
    <div class="register-box">
      <h1 class="title">注册页面</h1>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="username">
            <el-icon name="el-icon-user"></el-icon> 用户名：
          </label>
          <el-input
            type="text"
            id="username"
            v-model="username"
            class="input-field"
          ></el-input>
        </div>
        <div class="input-group">
          <label for="password">
            <el-icon name="el-icon-lock"></el-icon> 密码：
          </label>
          <el-input
            type="password"
            id="password"
            v-model="password"
            class="input-field"
          ></el-input>
        </div>
        <div class="input-group">
          <label for="email">
            <el-icon name="el-icon-message"></el-icon> 邮箱：
          </label>
          <el-input
            type="email"
            id="email"
            v-model="email"
            class="input-field"
          ></el-input>
        </div>
        <div class="input-group">
          <button type="submit" class="submit-btn">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
const email = ref("");

function handleSubmit() {
  console.log("用户名:", username.value);
  console.log("密码:", password.value);
  console.log("邮箱:", email.value);
}
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5),
    url("https://images.unsplash.com/photo-1528320448160-66b7a5a56b57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
  );
  background-size: cover;
  background-repeat: no-repeat;
}

.register-box {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  animation: float 3s infinite;
  width: 400px; /* 根据需要调整大小 */
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.input-field {
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

.submit-btn {
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
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
