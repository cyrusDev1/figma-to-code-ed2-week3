import { ref, onMounted, onUnmounted } from 'vue';

export function useDropdown() {
  const isDropdownVisible = ref(false);

  const toggleDropdown = () => {
    isDropdownVisible.value = !isDropdownVisible.value;
  };

  const handleClickOutside = () => {
    isDropdownVisible.value = false;
  };

  onMounted(() => document.addEventListener('click', handleClickOutside));
  onUnmounted(() => document.removeEventListener('click', handleClickOutside));

  return { isDropdownVisible, toggleDropdown };
}
