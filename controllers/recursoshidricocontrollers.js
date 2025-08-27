const RecursosHidricos = require('../models/RecursosHidricos');

let recursos = [];
let idCounter = 1;

const getAll = (req, res) => {
  res.json(recursos);
};

const getById = (req, res) => {
  const recurso = recursos.find(r => r.id === parseInt(req.params.id));
  recurso ? res.json(recurso) : res.status(404).json({ message: "Recurso não encontrado" });
};

const create = (req, res) => {
  const { nome, descricao } = req.body;
  const novoRecurso = new RecursosHidricos(idCounter++, nome, descricao);
  recursos.push(novoRecurso);
  res.status(201).json(novoRecurso);
};

const update = (req, res) => {
  const recurso = recursos.find(r => r.id === parseInt(req.params.id));
  if (recurso) {
    recurso.nome = req.body.nome || recurso.nome;
    recurso.descricao = req.body.descricao || recurso.descricao;
    res.json(recurso);
  } else {
    res.status(404).json({ message: "Recurso não encontrado" });
  }
};

