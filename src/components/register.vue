<template>
  <div class="container">
    <div class="login-box">
      <h2 style="color: black">系统用户注册</h2>
      <form @submit.prevent="handleSubmit">
        <div class="login-options">
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
            style="margin: 0 -10px"
          >
            <el-tab-pane
              label="账号密码注册"
              name="password"
              style="width: 100%"
            >
              <div class="form-group">
                <el-input
                  v-model="username"
                  placeholder="用户名"
                  :prefix-icon="['el-icon', 'user']"
                />
                <el-input
                  v-model="password"
                  placeholder="密码"
                  :prefix-icon="['el-icon', 'lock']"
                  type="password"
                />
                <el-input
                  v-model="email"
                  placeholder="邮箱"
                  :prefix-icon="['el-icon', 'message']"
                />
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <el-button type="primary" style="width: auto">注册</el-button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      activeName: "password",
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    handleSubmit() {
      // Perform registration logic with Axios
      const registrationData = {
        type: this.activeName,
        username: this.username,
        password: this.password,
        email: this.email,
      };

      axios
        .post("your_registration_endpoint", registrationData)
        .then((response) => {
          // Handle the response, e.g., redirect on successful registration
          console.log(response.data);
        })
        .catch((error) => {
          // Handle registration error
          console.error(error);
        });
    },
    handleClick(tab) {
      // Switch registration type when a tab is clicked
      this.activeName = tab;
    },
  },
};
</script>

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
.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
