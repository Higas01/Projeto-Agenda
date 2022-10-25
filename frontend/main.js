import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/Login';
import CadastroContato from './modules/CadastroContato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

const cadastroContato = new CadastroContato('.form-contato-register');
cadastroContato.init();