const EconomiaVerde = require('../models/EconomiaVerde');

let iniciativas = [];
let idCounter = 1;

const getAll = (req, res) => {
  res.json(iniciativas);
};

const getById = (req, res) => {
  const iniciativa = iniciativas.find(i => i.id === parseInt(req.params.id));
  iniciativa ? res.json(iniciativa) : res.status(404).json({ message: "Iniciativa não encontrada" });
};

const create = (req, res) => {
  const { iniciativa, impacto } = req.body;
  const novaIniciativa = new EconomiaVerde(idCounter++, iniciativa, impacto);
  iniciativas.push(novaIniciativa);
  res.status(201).json(novaIniciativa);
};

const update = (req, res) => {
  const iniciativa = iniciativas.find(i => i.id === parseInt(req.params.id));
  if (iniciativa) {
    iniciativa.iniciativa = req.body.iniciativa || iniciativa.iniciativa;
    iniciativa.impacto = req.body.impacto || iniciativa.impacto;
    res.json(iniciativa);
  } else {
    res.status(404).json({ message: "Iniciativa não encontrada" });
  }
};

const remove = (req, res) => {
  const index = iniciativas.findIndex(i => i.id === parseInt(req.params.id));
  if (index !== -1) {
    iniciativas.splice(index, 1);
    res.json({ message: "Iniciativa removida com sucesso" });
  } else {
    res.status(404).json({ message: "Iniciativa não encontrada" });
  }
};

module.exports = { getAll, getById, create, update, remove };