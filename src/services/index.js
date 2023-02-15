export const $_getPosts = () => {
  const endpoint = "https://dummyjson.com/posts";

  return fetch(endpoint).then((response) => response.json());
};
