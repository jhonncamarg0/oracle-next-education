import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 123);
const cliente2 = new Cliente("Alice", 456);

const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);