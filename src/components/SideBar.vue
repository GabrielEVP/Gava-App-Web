<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <aside class="fixed left-0 h-full w-20 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out">
      <div class="p-3">
        <img class="w-14 h-14 m-auto rounded-xl shadow-md" src="../../public/Gava.jpg" alt="Icon"/>
      </div>
      <hr class="border-gray-200 dark:border-gray-700 mx-3"/>
      <nav class="py-4">
        <ul class="space-y-4 flex flex-col items-center">
          <li v-for="(item, index) in navigationItems" :key="index">
            <div class="relative group">
              <router-link :to="item.route">
                <div class="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group">
                  <component
                      :is="item.icon"
                      class="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400"
                  />
                </div>
              </router-link>
              <div class="absolute left-full ml-2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-md
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200
            whitespace-nowrap z-1000">
                {{ item.title }}
                <div class="absolute top-1/2 -left-1 -mt-1 border-4 border-transparent border-r-gray-900 dark:border-r-gray-700"></div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div class="absolute bottom-0 w-full pb-4">
        <hr class="border-gray-200 dark:border-gray-700 mx-3 mb-4"/>
        <div class="flex justify-center mb-4">
          <button
              @click="toggleDarkMode"
              class="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <SunIcon v-if="isDarkMode" class="w-6 h-6 text-gray-400"/>
            <MoonIcon v-else class="w-6 h-6 text-gray-600"/>
          </button>
        </div>
        <hr class="border-gray-200 dark:border-gray-700 mx-3 mb-4"/>
        <div class="relative px-3">
          <button
              @click="isProfileMenuOpen = !isProfileMenuOpen"
              class="w-14 h-14 rounded-full ring-2 ring-primary-500 p-0.5 transition-transform hover:scale-105"
          >
            <img
                class="w-full h-full rounded-full object-cover"
                src="../../public/profile.jpeg"
                alt="User avatar"
            />
          </button>
          <div
              v-if="isProfileMenuOpen"
              v-click-outside="closeProfileMenu"
              class="absolute left-full bottom-0 mb-0 ml-2 w-40 rounded-lg bg-white dark:bg-gray-800 shadow-lg py-1
                   transform transition-all duration-200 z-50"
          >
            <div class="relative">
              <!-- Arrow -->
              <div class="absolute top-4 -left-2 border-8 border-transparent border-r-white dark:border-r-gray-800"></div>
              <button
                  v-for="(item, index) in profileMenuItems"
                  :key="index"
                  @click="item.action"
                  class="w-full px-4 py-2.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700
                       flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-150"
              >
                <component :is="item.icon" class="w-4 h-4"/>
                {{ item.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <main class="ml-20 p-6">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {
  SunIcon,
  MoonIcon,
  HomeIcon,
  UsersIcon,
  FileTextIcon,
  ClipboardIcon,
  WalletIcon,
  BriefcaseIcon,
  ShoppingCartIcon,
  UserIcon,
  LogOutIcon
} from "lucide-vue-next";

const isDarkMode = ref(false);
const isProfileMenuOpen = ref(false);

const navigationItems = [
  {route: '/home', title: 'Inicio', icon: HomeIcon},
  {route: '/clients', title: 'Clientes', icon: UsersIcon},
  {route: '/invoice', title: 'Facturas', icon: FileTextIcon},
  {route: '/order', title: 'Presupuestos', icon: ClipboardIcon},
  {route: '/purchase', title: 'Gastos', icon: WalletIcon},
  {route: '/supplier', title: 'Proveedores', icon: BriefcaseIcon},
  {route: '/product', title: 'Productos', icon: ShoppingCartIcon},
];

const profileMenuItems = [
  {
    label: 'Mi Perfil',
    icon: UserIcon,
    action: () => {
      console.log('Profile clicked');
      isProfileMenuOpen.value = false;
    }
  },
  {
    label: 'Cerrar Sesión',
    icon: LogOutIcon,
    action: () => {
      console.log('Logout clicked');
      isProfileMenuOpen.value = false;
    }
  },
];

const closeProfileMenu = () => {
  isProfileMenuOpen.value = false;
};

const vClickOutside = {
  mounted(el: HTMLElement, binding: any) {
    el._clickOutside = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event);
      }
    };
    document.addEventListener('click', el._clickOutside);
  },
  unmounted(el: HTMLElement) {
    document.removeEventListener('click', el._clickOutside);
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
</script>
