<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white shadow-md rounded-lg">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">
          {{ isLogin ? "Iniciar sesión" : "Crear cuenta" }}
        </h2>
        <form @submit.prevent="handleSubmit">
          <div class="space-y-4">
            <div v-if="!isLogin" class="form-control">
              <label class="label" for="name">
                <span class="label-text text-gray-700">Nombre</span>
              </label>
              <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Tu nombre"
                  class="input input-bordered w-full bg-gray-50"
                  required
              />
            </div>
            <div class="form-control">
              <label class="label" for="email">
                <span class="label-text text-gray-700">Email</span>
              </label>
              <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="tu@email.com"
                  class="input input-bordered w-full bg-gray-50"
                  required
              />
            </div>
            <div class="form-control">
              <label class="label" for="password">
                <span class="label-text text-gray-700">Contraseña</span>
              </label>
              <input
                  id="password"
                  v-model="form.password"
                  type="password"
                  placeholder="********"
                  class="input input-bordered w-full bg-gray-50"
                  required
              />
            </div>
            <button
                type="submit"
                class="btn w-full bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-800 hover:border-gray-700 rounded-md py-2 transition-colors duration-300 ease-in-out font-semibold text-lg"
            >
              {{ isLogin ? "Iniciar sesión" : "Registrarse" }}
            </button>
          </div>
        </form>
        <div class="mt-6 text-center">
          <a
              href="#"
              @click.prevent="toggleForm"
              class="text-sm text-gray-800 hover:text-gray-600 transition-colors duration-300 ease-in-out"
          >
            {{
              isLogin
                  ? "¿No tienes cuenta? Regístrate"
                  : "¿Ya tienes cuenta? Inicia sesión"
            }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, reactive, defineComponent} from "vue";
import apiClient from '@/axios';
import {useRouter} from "vue-router";

export default defineComponent({
  name: "LoginView",
  setup() {
    const isLogin = ref(true);
    const form = reactive({
      name: "",
      email: "",
      password: "",
    });
    const router = useRouter();

    function toggleForm() {
      isLogin.value = !isLogin.value;
      form.name = "";
      form.email = "";
      form.password = "";
    }

    async function handleSubmit() {
      try {
        const response = await apiClient.post('/login', {email: form.email, password: form.password,});
        const token = response.data.access_token;
        localStorage.setItem('access_token', token);
        router.push('/home');
      } catch (error) {
        console.error('Error en el login:', error.response?.data || error.message);
      }
    };

    return {isLogin, form, toggleForm, handleSubmit};
  },
});
</script>
