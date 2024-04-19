import { ref, onMounted } from 'vue'

export function useFetch (url: string): any {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducers = async (): Promise<any> => {
    loading.value = true
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch producers')
      }
      const data = await response.json()
      products.value = data.data
    } catch (err: unknown) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchProducers)

  return { products, loading, error, fetchProducers }
}
