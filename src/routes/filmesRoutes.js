import express from 'express';
import {
  getFilmes,
  getFilmeById,
  addFilme,
  updateFilme,
  deleteFilme
} from '../controllers/filmesController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(getFilmes());
});

router.get('/:id', (req, res) => {
  const filme = getFilmeById(parseInt(req.params.id));
  if (filme) {
    res.json(filme);
  } else {
    res.status(404).json({ message: 'Filme não encontrado' });
  }
});

router.post('/', (req, res) => {
  const novoFilme = addFilme(req.body);
  res.status(201).json(novoFilme);
});

router.put('/:id', (req, res) => {
  const filmeAtualizado = updateFilme(parseInt(req.params.id), req.body);
  if (filmeAtualizado) {
    res.json(filmeAtualizado);
  } else {
    res.status(404).json({ message: 'Filme não encontrado' });
  }
});

router.delete('/:id', (req, res) => {
  const filmeDeletado = deleteFilme(parseInt(req.params.id));
  if (filmeDeletado) {
    res.json(filmeDeletado);
  } else {
    res.status(404).json({ message: 'Filme não encontrado' });
  }
});

export default router;
