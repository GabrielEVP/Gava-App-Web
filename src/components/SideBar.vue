<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <!-- Navbar -->
    <header class="bg-white dark:bg-gray-800 shadow-sm h-16 fixed w-full top-0 z-20 transition-colors duration-300">
      <div class="flex items-center justify-between px-4 h-full">
        <div class="flex items-center space-x-4">
          <button @click="toggleSidebar"
                  class="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-150">
            <MenuIcon v-if="!isSidebarVisible" class="h-6 w-6 text-gray-600 dark:text-gray-300"/>
            <XIcon v-else class="h-6 w-6 text-gray-600 dark:text-gray-300"/>
          </button>
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
            Gava App
          </h1>
        </div>
        <div class="flex items-center space-x-4">
          <button @click="toggleDarkMode" class="btn btn-ghost btn-circle">
            <SunIcon v-if="isDarkMode" class="h-5 w-5 text-gray-200"/>
            <MoonIcon v-else class="h-5 w-5 text-gray-600"/>
          </button>

          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://placehold.co/100x100" alt="User avatar"/>
              </div>
            </label>
            <ul tabindex="0"
                class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white dark:bg-gray-700 rounded-box w-52">
              <li><a class="text-gray-700 dark:text-gray-200">Profile</a></li>
              <li><a class="text-gray-700 dark:text-gray-200">Settings</a></li>
              <li><a class="text-gray-700 dark:text-gray-200">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <!-- Sidebar -->
    <aside
        class="fixed left-0 top-16 h-full w-52 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out transform"
        :class="{
        '-translate-x-full': !isSidebarVisible,
        'translate-x-0': isSidebarVisible,
      }">
      <nav class="p-4">
        <ul class="space-y-2">
          <li>
            <a href="#"
               class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <i class="pi pi-home h-5 w-5 text-gray-600 dark:text-gray-400"></i>
              <span class="ml-3 text-gray-700 dark:text-gray-200">Inicio</span>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <i class="pi pi-receipt h-5 w-5 text-gray-600 dark:text-gray-400"></i>
              <span class="ml-3 text-gray-700 dark:text-gray-200">Clientes</span>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <i class="pi pi-address-book h-5 w-5 text-gray-600 dark:text-gray-400"></i>
              <span class="ml-3 text-gray-700 dark:text-gray-200">Facturas</span>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <i class="pi pi-clipboard h-5 w-5 text-gray-600 dark:text-gray-400"></i>
              <span class="ml-3 text-gray-700 dark:text-gray-200">Presupuestos</span>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <i class="pi pi-file-check h-5 w-5 text-gray-600 dark:text-gray-400"></i>
              <span class="ml-3 text-gray-700 dark:text-gray-200">Gastos</span>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <i class="pi pi-briefcase h-5 w-5 text-gray-600 dark:text-gray-400"></i>
              <span class="ml-3 text-gray-700 dark:text-gray-200">Proveedores</span>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <i class="pi pi-cart-minus h-5 w-5 text-gray-600 dark:text-gray-400"></i>
              <span class="ml-3 text-gray-700 dark:text-gray-200">Productos</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main content -->
    <main :class="{
      'ml-6': !isSidebarVisible,
      'ml-64': isSidebarVisible,
    }" class="pt-16 transition-all duration-300">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {SunIcon, MoonIcon, LayoutDashboardIcon, ChartBarIcon, UsersIcon, MenuIcon, XIcon} from "lucide-vue-next";

const isSidebarVisible = ref(false);
const isDarkMode = ref(false);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

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
