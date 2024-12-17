<template>
  <aside
      class="fixed left-0 top-16 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out transform"
      :class="{ '-translate-x-full': !isVisible, 'translate-x-0': isVisible }"
  >
    <nav class="p-4">
      <ul class="space-y-2">
        <li>
          <a
              href="#"
              class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <LayoutDashboardIcon
                class="h-5 w-5 text-gray-600 dark:text-gray-400"
            />
            <span class="ml-3 text-gray-700 dark:text-gray-200">Dashboard</span>
          </a>
        </li>
        <li>
          <a
              href="#"
              class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ChartBarIcon class="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span class="ml-3 text-gray-700 dark:text-gray-200">Analytics</span>
          </a>
        </li>
        <li>
          <a
              href="#"
              class="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <UsersIcon class="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span class="ml-3 text-gray-700 dark:text-gray-200">Users</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { LayoutDashboardIcon, ChartBarIcon, UsersIcon } from "lucide-vue-next";

defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
});
</script>