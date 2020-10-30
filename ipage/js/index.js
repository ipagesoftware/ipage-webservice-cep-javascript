/**
 *
 * @version    1.0
 * @package    Ipage Webservice CEP
 * @subpackage js
 * @author     Diógenes Dias <diogenesdias@hotmail.com>
 * @copyright  Copyright (c) 1995-2019 Ipage Software Ltd. (https://www.ipage.com.br)
 * @license    https://www.ipagesoftware.com.br/license_key/www/examples/license/
 *
   Metrics
    There are 16 functions in this file.
    Function with the largest signature take 2 arguments, while the median is 0.
    Largest function has 7 statements in it, while the median is 4.5.
    The most complex function has a cyclomatic complexity value of 4 while the median is 2.
 *
 * 
*/
/**
 *
 * @version    1.0
 * @package    Ipage Webservice CEP
 * @subpackage js
 * @author     Diógenes Dias <diogenesdias@hotmail.com>
 * @copyright  Copyright (c) 1995-2019 Ipage Software Ltd. (https://www.ipage.com.br)
 * @license    https://www.ipagesoftware.com.br/license_key/www/examples/license/
*/
document.addEventListener("DOMContentLoaded",function(){
  index.wait(false, function(result){
    index.init();// INICIALIZO A CLASSE
    document.querySelector("#txt_cep").focus();
  });
});
// CLASS INDEX
var index = function(){
    /**
     * index::handleForm()
     * Método responsável pelo tratamento do cep
     */
    var handleForm = function(){
      // Adiciona o ano na mensagem de copyright do rodapé
      let now = new Date();
      let year = document.querySelector("#year");
      //
      year.innerHTML = now.getFullYear();
      //
      // Adiciona evento blur a todas as caixas de texto
      for (const input of document.querySelectorAll("input")) {
          input.addEventListener("blur",inputBlur);
      }

      function inputBlur(_this) {
        let id = "#" + _this.path[0].id;
        let input = document.querySelector(id);
        let classes = input.className.split(" ");
        let newClass = "ipage-result-cep";
        // verifica se a classe .ipage-result-cep 
        // está atribuída ao objeto
        if (classes.indexOf(newClass) !== -1) {
          // Remove a classe ao perder o foco
          input.classList.remove(newClass);
        }
      }      
    };

    /**
     * index::handleCep()
     *
     */
    var handleCep = function () {
      let classCep = new IpageCep();
      let btn_cep = document.querySelector("#btn_cep");

      // Evento click do botão
      btn_cep.addEventListener("click",btnCepClick);

      function btnCepClick(){
        let cep = document.querySelector("#txt_cep");;
        //var cep = $("#txt_cep").val();// PEGO O VALOR DO CEP
        // CHAMO O MÉTODO DA CLASSE CEP EM: ipage-wscep.js
        // PARA VALIDAR O CEP
        if (classCep.validaCep(cep.value) === false) {
            alert('Número do CEP inválido ou inexistente, verifique!');
            cep.focus();
            cep.select();
            return false;
        }
        // ATIVO A ANIMAÇÃO DE AGUADE E ESPERO O MÉTODO DA CLASSE CEP
        // TERMINAR A REQUISIÇÃO AO WEBSERVICE
        index.wait(true, function(ret){
          if(classCep.getCep(cep.value, function(result){
              if(result['error']){
                alert(result['msg']);
                cep.focus();
                cep.select();
                index.removeClass();
              }else{
               index.addItens(result);
              }
            })
          );
        });
      }
    };
    return{
        //Função principal inicializada na carga da página
        init: function (par){
          handleForm();
          handleCep();
          index.wait(false);
        },
        removeClass: function(){
          let newClass = "ipage-result-cep";
          let classes;

          for (const input of document.querySelectorAll("input")) {
            classes = input.className.split(" ");
            // está atribuída ao objeto
            if (classes.indexOf(newClass) !== -1) {
              // Remove a classe ao perder o foco
              input.classList.remove(newClass);
            }      
          }
        },
        addClass: function(){
          let newClass = "ipage-result-cep";
          let classes;

          for (const input of document.querySelectorAll("input")) {
            if(input.id!=='txt_cep'){
              classes = input.className.split(" ");
              // está atribuída ao objeto
              if (classes.indexOf(newClass) == -1) {
                // Adiciona a classe ao perder o foco
                input.classList.add(newClass);
              }
            }
          }
        },
        addItens: function(dados){
          for(const k in dados) {
             let input = document.querySelector("#" + k);
             if(input !== null){
                input.value = dados[k];//(item.toUpperCase()).addClass("ipage-result-cep");
             }
          }      
          index.addClass();
        },
        wait: function(value, callback) {
          let loader = document.querySelector("#loader");
          // está atribuída ao objeto
          //
          if (value==true){
            loader.classList.remove("loader-hide");
            setTimeout(function() {
              loader.classList.add("loader-show");
                  return callback?callback(1):null;
              }, 500);
          }else{
            loader.classList.remove("loader-show");
            setTimeout(function() {
              loader.classList.add("loader-hide");
                  return callback?callback(1):null;
              }, 500);
          }
      }
    };
}();
//
//  _______   _                ______               _
// |__   __| | |              |  ____|             | |
//    | |    | |__     ___    | |__     _ __     __| |
//    | |    | '_ \   / _ \   |  __|   | '_ \   / _` |
//    | |    | | | | |  __/   | |____  | | | | | (_| |
//    |_|    |_| |_|  \___|   |______| |_| |_|  \__,_|
//