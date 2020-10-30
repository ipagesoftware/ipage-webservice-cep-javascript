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
    There are 6 functions in this file.
    Function with the largest signature take 2 arguments, while the median is 1.
    Largest function has 5 statements in it, while the median is 3.5.
    The most complex function has a cyclomatic complexity value of 3 while the median is 1.
 * 
*/
function IpageCep() {
    this.getCep = getCep;
    this.validaCep = validaCep;
    /**
     * IpageCep::validaCep()
     *
     * @param mixed cep
     * @return boolean
     */
    function validaCep(cep) {
      if(typeof(cep)=='undefined')return false;
      var v = cep.replace(/\D/g, "");
      //
      if (v.length != 8) {
        return false;
      }
      return true;
    }
    /**
     * IpageCep::getCep()
     *
     * @param mixed cep
     * @param mixed callback
     * @return JSON
     */
    function getCep(cep, callback) {
      // Chave de acesso ao Webservice---------------------------------------------+
      // Formato -------------------------------------------------+                |
      // Número do CEP ----------------------------------+        |                |
      // Versão do Webservice ---------------+           |        |                |
      // Url do Webservice ---+              |           |        |                |
      //                      |              |           |        |                |
      //                      |              |           |        |                |
      //                      v              v           v        v                v
      //         --------------------------- -- ---  ---------  ---- ---------------------------------
      var link = "https://www.ipage.com.br/ws/v1/cep/" + cep + "/json/API-KEY/";

      //
      fetch(link, { headers: { "Content-Type": "application/json; charset=utf-8" }})
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(data => {
          index.wait(false);
          for(const k in data) {
             data[k] = unescape(data[k]);//(item.toUpperCase()).addClass("ipage-result-cep");
          }

          return callback?callback(data):null;
        }
      )
      .catch(err => {
          console.log(err);
      });

      index.wait(false);
    }
}