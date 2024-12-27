<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <!-- Sidebar -->
    <aside class="fixed left-0 h-full w-16 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out transform flex flex-col justify-between">
      <div class="p-2">
        <img class="m-auto rounded-lg " src="../../public/Gava.jpg" alt="Icon"/>
      </div>
      <hr class="border-gray-300 dark:border-gray-700"/>
      <nav class="p-2">
        <ul class="space-y-3 flex flex-col items-center">
          <li>
            <router-link to="/home" title="Inicio">
              <i class="pi pi-home text-gray-600 dark:text-gray-400 text-3xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/client" title="Clientes">
              <i class="pi pi-receipt text-gray-600 dark:text-gray-400 text-3xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/invoice" title="Facturas">
              <i class="pi pi-address-book text-gray-600 dark:text-gray-400 text-3xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/order" title="Presupuestos">
              <i class="pi pi-clipboard text-gray-600 dark:text-gray-400 text-3xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/purchase" title="Gastos">
              <i class="pi pi-file-check text-gray-600 dark:text-gray-400 text-3xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/supplier" title="Proveedores">
              <i class="pi pi-briefcase text-gray-600 dark:text-gray-400 text-3xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/product" title="Productos">
              <i class="pi pi-cart-minus text-gray-600 dark:text-gray-400 text-3xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"></i>
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="mt-auto">
        <hr class="border-gray-300 dark:border-gray-700 my-1"/>
        <div class="flex justify-center p-1">
          <button @click="toggleDarkMode" class="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <SunIcon v-if="isDarkMode" class="h-8 w-8 text-gray-200"/>
            <MoonIcon v-else class="h-8 w-8 text-gray-600"/>
          </button>
        </div>
        <hr class="border-gray-300 dark:border-gray-700 my-1"/>
        <div class="pl-1 pt-2 pb-2">
          <img class="rounded-full w-14 h-14" src="../../public/profile.jpeg" alt="User avatar"/>
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <main class="ml-16 m-auto p-6">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {SunIcon, MoonIcon} from "lucide-vue-next";

const isSidebarVisible = ref(true);
const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  updateDarkMode();
};

const updateDarkMode = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  }
};

onMounted(() => {
  const storedMode = localStorage.getItem("darkMode");
  if (storedMode === "true") {
    isDarkMode.value = true;
  } else if (storedMode === "false") {
    isDarkMode.value = false;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    isDarkMode.value = true;
  }
  updateDarkMode();
});
</script>