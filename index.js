import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Thiago B.", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Thiago A.", 5000, 12345678911);
gerente.cadastrarSenha("123");

const cliente = new Cliente ("Thi", 98765432100, "456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);