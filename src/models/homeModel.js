const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({ // Schema => São os "Métodos", as "Propiedades" do objeto que esta sendo criado.
    titulo: {type: String, required: true},
    descricao: String,
});

const HomeModel = mongoose.model('Home', HomeSchema); // Model => Cria novos documentos através do modelo definido pelo esquema;

class Home {

}

module.exports = Home;