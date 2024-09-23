import db from '../db.json' assert { type: 'json' };
import Filme from '../models/filme.js';

function getFilmes() {
  return db.filmes;
}

function getFilmeById(id) {
  return db.filmes.find(filme => filme.id === id);
}

function addFilme(filme) {
  const newId = db.filmes.length ? Math.max(...db.filmes.map(f => f.id)) + 1 : 1;
  const newFilme = new Filme(newId, filme.titulo, filme.diretor, filme.ano);
  db.filmes.push(newFilme);
  return newFilme;
}

function updateFilme(id, filmeAtualizado) {
  const index = db.filmes.findIndex(filme => filme.id === id);
  if (index !== -1) {
    db.filmes[index] = { id, ...filmeAtualizado };
    return db.filmes[index];
  }
  return null;
}

function deleteFilme(id) {
  const index = db.filmes.findIndex(filme => filme.id === id);
  if (index !== -1) {
    const deletedFilme = db.filmes.splice(index, 1);
    return deletedFilme[0];
  }
  return null;
}

export {
  getFilmes,
  getFilmeById,
  addFilme,
  updateFilme,
  deleteFilme
};