<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <Nav />

    <Aside :isVisible="isSidebarVisible" />

    <button
        @click="toggleSidebar"
        :class="[
        'fixed top-20 z-30 p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-150',
        isSidebarVisible ? 'left-72' : 'left-4'
      ]"
    >
      <MenuIcon
          v-if="!isSidebarVisible"
          class="h-6 w-6 text-gray-600 dark:text-gray-300"
      />
      <XIcon v-else class="h-6 w-6 text-gray-600 dark:text-gray-300"/>
    </button>

    <main :class="{'ml-64': isSidebarVisible}" class="pt-16 transition-all duration-300">
      <div class="max-w-7xl mx-auto">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Nav from "@/components/Nav.vue";
import Aside from "@/components/Aside.vue";
import { MenuIcon, XIcon } from "lucide-vue-next";

const isSidebarVisible = ref(false);

function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value;
}
</script>