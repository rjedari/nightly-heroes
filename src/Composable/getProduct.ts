import { ref, onMounted } from 'vue';

export function useProducers() {
  const producers = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchProducers = async () => {
    loading.value = true;
    try {
      const response = await fetch('https://api.jikan.moe/v4/producers');
      if (!response.ok) {
        throw new Error('Failed to fetch producers');
      }
      const data = await response.json();
      producers.value = data.data; 
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchProducers);

  return { producers, loading, error, fetchProducers };
}
