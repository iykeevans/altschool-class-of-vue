import { ref, onMounted } from "vue";
import axios from "axios";

const usePokemon = () => {
  let pokemons = ref([]);

  const fetchPokemons = async () => {
    try {
      const endpoint = "https://pokeapi.co/api/v2/pokemon";
      const { data } = await axios.get(endpoint);

      pokemons.value = data.results;
    } catch (error) {
      throw new Error(error);
    }
  };

  onMounted(() => {
    fetchPokemons();
  });

  return { fetchPokemons, pokemons };
};

export default usePokemon;
