function Calculadora () {
  this.display = document.querySelector('.display');
    
  this.inicia = function() {
    this.cliqueBotoes();
    this.pressionaEnter();
    this.pressionaBackspace();
  };

  this.pressionaEnter = function () {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
      this.realizaConta();
      }
    });
  };

  this.pressionaBackspace = function() {
    this.display.addEventListener('keydown', e => {
      if (e.keycode === 8) {
        e.preventDefault;
        this.apagaUm();
      }
    });
  };

  this.realizaConta = function() {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if(!conta) {
        alert('Conta inváldia');
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert('Conta inválida');
      return;
    }
  };
    
  this.clearDisplay = function(){
    this.display.value = '';
  };

  this.apagaUm = function() {
    this.display.value = this.display.value.slice(0, -1);
  };


  this.cliqueBotoes = function() {
    document.addEventListener('click', e => {
      const el = e.target;

      if(el.classList.contains('btn-num')) {
        this.btnParaDisplay(el.innerText);
      }

      if(el.classList.contains('btn-clear')) {
        this.clearDisplay();
      }

      if(el.classList.contains('btn-del')) {
        this.apagaUm();
      }

      if(el.classList.contains('btn-eq')) {
        this.realizaConta();
      }

      this.display.focus();
    });//ARROW FUNCTION n muda comportamento do this comand.bind(this)
  };

  this.btnParaDisplay = function(valor) {
    this.display.value += valor;
  }
  
  
};


const calculadora = new Calculadora
calculadora.inicia()