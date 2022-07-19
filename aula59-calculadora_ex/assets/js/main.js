const display = document.querySelector('.display')
display.focus()

function Calculadora () {
  this.display = document.querySelector('.display');
  
  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
    this.capturaBackspace();
  };

  this.capturaEnter = () => {
    document.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  }

  this.capturaBackspace = () => {
    this.display.addEventListener('keypress', e => {
      if (e.keyCode === 8) {
        this.del();
      }
    });
  }
  
  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if(el.classList.contains('btn-num')) this.addNumDisplay(el);
      if(el.classList.contains('btn-clear')) this.clear(el);
      if(el.classList.contains('btn-del')) this.del(el);
      if(el.classList.contains('btn-eq')) this.realizaConta(el);
    });
  };
  
  this.addNumDisplay = el => {
    this.display.value += el.innerText
    this.display.focus();
  };

  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if(!conta) {
        alert('Conta inválida')
        return 
      }

      this.display.value = conta
      
    } catch(e) {
      alert('conta inválida')
      return;
    }
  }



}









const calculadora = new Calculadora;
calculadora.inicia()
//"Olha Js usa o meu molde que é a factory function pra criar um novo objeto
//de calculadora. A função neste caso faz o papel de molde e na linha a cima
//"