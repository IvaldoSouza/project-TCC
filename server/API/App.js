const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require("../models/teste");
const Cadastro = mongoose.model('cadastro');
require("../models/cadastroLojista");
const Lojista = mongoose.model('lojista');
require("../models/cadastroMarca");
const Marca = mongoose.model('marca');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  // console.log('acessou o middleware')
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); 
  app.use(cors());
  next();
})

mongoose.connect('mongodb://localhost/tcc', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão com MongoDB realizada com sucesso!');
}).catch((erro) => {
  console.log('Erro: Conexão com MongoDB não foi realizada com sucesso!');
});

app.get("/cadastro", (req, res) => {
  Cadastro.find({}).then((item) => {
    return res.json(item);
  }).catch((erro) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum dado encontrado!"
    })
  })
});

app.get("/cadastro/:id", (req, res) => {
  Cadastro.findOne({ _id: req.params.id }).then((item) => {
    return res.json(item);
  }).catch((erro) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum dado encontrado!"
    })
  })
});

app.put("/cadastro/:id", (req, res) => {
  const cadastro = Cadastro.updateOne({ _id: req.params.id }, req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Error: Não foi possível editar com sucesso!"
    });

    return res.json({
      error: false,
      message: "Editado com sucesso!"
    });
  });
});

app.delete("/cadastro/:id", (req, res) => {
  const cadastro = Cadastro.deleteOne({ _id: req.params.id }, req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Error: Não foi possível apagar com sucesso!"
    });

    return res.json({
      error: false,
      message: "Apagado com sucesso!"
    });
  });
});

app.post("/cadastro", (req, res) => {
  const cadastro = Cadastro.create(req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Error: Não foi cadastrado com sucesso!"
    });

    return res.status(200).json({
      error: false,
      message: "Cadastrado com sucesso!"
    });
  });
});

app.get("/lojista", (req, res) => {
  Lojista.find({}).then((item) => {
    return res.json(item);
  }).catch((erro) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum dado encontrado!"
    })
  })
});

app.get("/lojista/:id", (req, res) => {
  Lojista.findOne({ _id: req.params.id }).then((item) => {
    return res.json(item);
  }).catch((erro) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum dado encontrado!"
    })
  })
});

app.put("/lojista/:id", (req, res) => {
  const lojista = Lojista.updateOne({ _id: req.params.id }, req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Error: Não foi possível editar com sucesso!"
    });

    return res.json({
      error: false,
      message: "Editado com sucesso!"
    });
  });
});

app.delete("/lojista/:id", (req, res) => {
  const lojista = Lojista.deleteOne({ _id: req.params.id }, req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Error: Não foi possível apagar com sucesso!"
    });

    return res.json({
      error: false,
      message: "Apagado com sucesso!"
    });
  });
});

app.post("/lojista", (req, res) => {
  const lojista = Lojista.create(req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Error: Não foi cadastrado com sucesso!"
    });

    return res.status(200).json({
      error: false,
      message: "Cadastrado com sucesso!"
    });
  });
});

app.get("/cadastro-marca", (req, res) => {
  Marca.find({}).then((item) => {
    return res.json(item);
  }).catch((erro) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum dado encontrado!"
    })
  })
});

app.post("/cadastro-marca", (req, res) => {
  const marca = Marca.create(req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Error: Não foi cadastrado com sucesso!"
    });

    return res.status(200).json({
      error: false,
      message: "Cadastrado com sucesso!"
    });
  });
});

app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});
