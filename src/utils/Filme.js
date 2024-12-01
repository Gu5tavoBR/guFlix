export function getList(size, filmes) {
  let filme = [];

  for (let i = 0, l = size; i < l; i++) {
    filme.push(filmes[i]);
  }
  return filme;
}
