<template>
  <div>
    <LoginForm />
    <RegisterForm/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'
export default {
  name: 'LoginView',
  components: {LoginForm, RegisterForm},
  data() {
    return {};
  }
}
</script>