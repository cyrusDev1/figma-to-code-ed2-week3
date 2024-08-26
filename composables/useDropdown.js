import { ref, onMounted, onUnmounted } from 'vue';
const dropdown = ref(null);

export function useDropdown() {
  const isDropdownVisible = ref(false);

  const toggleDropdown = () => {
    isDropdownVisible.value = !isDropdownVisible.value;
  };

  const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.$el.contains(event.target)) {
      isDropdownVisible.value = false;
    }
  };

  onMounted(() => document.addEventListener('click', handleClickOutside));
  onUnmounted(() => document.removeEventListener('click', handleClickOutside));

  return { isDropdownVisible, toggleDropdown };
}
