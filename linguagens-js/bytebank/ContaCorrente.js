import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    static numeroDeContas = 0;
    _cliente;
    _saldo = 0;

    get cliente() {
        return this._cliente;
    }

    set cliente(x) {
        if(x instanceof Cliente){
            this._cliente = x;
        }
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(x) {
        if(this._saldo >= x){
            this._saldo -= x;
            return x;
        }
    }

    depositar(x) {
        if(x <= 0) return;
        this._saldo += valor;
    }

    tranferir(x, y) {
        const z = this.sacar(x);
        y.depositar(x);
    }
}