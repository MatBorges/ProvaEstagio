var lerNumero = document.querySelector('#votacao input[id = numero]');
var lerCpf = document.querySelector('#votacao input[id = cpf]');
const $ = window.jQuery;

class Prova {
  constructor() {
    this.cpfs = [];
    this.ritalee = 0;
    this.cartola = 0;
    this.neyMatogrosso = 0;
    this.anitta = 0;
    this.nulo = 0;
  } //verifica se o cpf digitado ja esta cadastrado, caso ja esteja cadastrada nao armazena o cpf novamente e impede a votação    


  verficaCPF() {
    let cpf = lerCpf.value;

    if (this.cpfs.includes(cpf)) {
      return false;
    } else {
      return true;
    }
  } //caso o cpf nao esteja cadastrado, verifica o numero do candidato


  verificaNumero() {
    var numero = lerNumero.value;

    if (this.verficaCPF()) {
      switch (numero) {
        case '100':
          this.ritalee++;
          this.cpfs.push(lerCpf.value);
          alert('Você votou em Rita Lee');
          $('#vtsRitaLee').html(this.ritalee + " votos");
          break;

        case '101':
          this.cartola++;
          this.cpfs.push(lerCpf.value);
          alert('Você votou em Cartola');
          $('#vtsCartola').html(this.cartola + " votos");
          break;

        case '102':
          this.neyMatogrosso++;
          this.cpfs.push(lerCpf.value);
          alert('Você votou em Ney Matogrosso');
          $('#vtsNeyMatogrosso').html(this.neyMatogrosso + " votos");
          break;

        case '103':
          //impede o voto na candidata desclassificada
          alert('Anita está desqualificada, por favor escolha outro candidato');
          $('#vtsAnitta').html(this.anitta + " votos");
          break;
        //qualquer numero que não esteja cadastrado para algum candidato computa o voto como nulo       

        default:
          this.cpfs.push(lerCpf.value);
          this.nulo++;
          alert('Você votou Nulo');
          $('#vtsNulo').html(this.nulo + " votos");
          break;
      }
    } else alert('O cpf digitado já possui um voto computado');

    lerNumero.value = ''; //calcula a porcentagem dos votos

    var totalVotos = this.ritalee + this.cartola + this.neyMatogrosso + this.anitta + this.nulo;
    var ptgmRitaLee = (this.ritalee * 100 / totalVotos).toFixed(1);
    var ptgmCartola = (this.cartola * 100 / totalVotos).toFixed(1);
    var ptgmNeyMatogrosso = (this.neyMatogrosso * 100 / totalVotos).toFixed(1);
    var ptgmAnitta = (this.anitta * 100 / totalVotos).toFixed(1);
    var ptgmNulo = (this.nulo * 100 / totalVotos).toFixed(1);
    $('#ptgmRitaLee').html(ptgmRitaLee + "%");
    $('#ptgmCartola').html(ptgmCartola + "%");
    $('#ptgmNeyMatogrosso').html(ptgmNeyMatogrosso + "%");
    $('#ptgmAnitta').html(ptgmAnitta + "%");
    $('#ptgmNulo').html(ptgmNulo + "%");
  }

}

const Votacao = new Prova();

document.querySelector('button').onclick = function () {
  Votacao.verificaNumero();
};
