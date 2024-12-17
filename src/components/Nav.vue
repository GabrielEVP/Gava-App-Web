<template>
  <header
    class="bg-white dark:bg-gray-800 shadow-sm h-16 fixed w-full top-0 z-20 transition-colors duration-300"
  >
    <div class="flex items-center justify-between px-4 h-full">
      <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
        Gava App
      </h1>

      <div class="flex items-center space-x-4">
        <button @click="toggleDarkMode" class="btn btn-ghost btn-circle">
          <SunIcon v-if="isDarkMode" class="h-5 w-5 text-gray-200" />
          <MoonIcon v-else class="h-5 w-5 text-gray-600" />
        </button>

        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placehold.co/100x100" alt="User avatar" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white dark:bg-gray-700 rounded-box w-52"
          >
            <li><a class="text-gray-700 dark:text-gray-200">Profile</a></li>
            <li><a class="text-gray-700 dark:text-gray-200">Settings</a></li>
            <li><a class="text-gray-700 dark:text-gray-200">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  SunIcon,
  MoonIcon,
  LayoutDashboardIcon,
  ChartBarIcon,
  UsersIcon,
  SettingsIcon,
  MenuIcon,
  XIcon,
} from "lucide-vue-next";

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
