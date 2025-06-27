import fetch from 'node-fetch';

async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
    throw err;
  }
}

(async () => {
  const todos = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
  console.log(todos);
})();
