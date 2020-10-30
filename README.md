# ipage-webservice-cep-javascript
Busca por CEP em JavaScript utilizando Web Service da Ipage Software

Como funciona um Web Service? Web Service é uma solução utilizada na integração de sistemas e na comunicação entre aplicações diferentes. Com esta tecnologia é possível que novas aplicações possam interagir com aquelas que já existem e que sistemas desenvolvidos em plataformas diferentes sejam compatíveis.

A que se destina este Web Service? Este Web Service tem por finalidade consultar Códigos de endereçamento Postal (CEP) de todo o Brasil de forma simples e descomplicada. As informações retornadas após a consulta ao Web Service possui diversos formatos, são eles: XML, JSON, JavaScript, formato texto PIPED, formato texto Querty. Definição dos parâmetros. O CEP informado deve conter apenas números com até 08 (oito caracateres), em caso de valores inválidos passados ao Web Service o mesmo realizará automaticamente um filtro, deixando passar apenas números. Se mesmo assim o valor do CEP informado não satisfazer o critério uma mensagem de erro será reportada.

O formato a ser retornado pela consulta deve ser passado na URL junto com o CEP e deve ser compatível com o esperado pelo Web Service. Os valores válidos são: XML, JSON, JavaScript, formato texto PIPED, formato texto Querty.

A chave de acesso ao Web Service é obrigatória e deve ser passada na URL junto com o CEP, formato de retorno e deve ser compatível com o esperado pelo Web Service. Caso não possua uma chave de acesso, solicite no nosso web site: https://rapidapi.com/diogenes/api/ipage_cep/details

Os principais formatos de retorno são: PIPED, JSON, Querty, XML, Javascript

Veja no site o exemplo antes de realizar o download: https://www.ipage.com.br/ws/exemplos/jquery/cep/
