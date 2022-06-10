
# Cadastro de carro

  **RF**
  - [X] Deve ser possível cadastrar um novo carro.

  **RN**
  - [X] Não deve ser possível cadastrar um carro com uma placa já existente.
  - [X] O carro deve ser cadastrado com disponibilidade por padrão.
  - [X] O usuário responsável pelo cadastro deve ter perfil administrador.

# Listagem de carros

  **RF**
  - [X] Deve ser possível listar todos os carros disponíveis.
  - [X] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
  - [X] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
  - [X] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

  **RN**
  - [X] O usuário não precisa estar logado no sitema para listar os carros.

# Cadastro de especificação no carro

  **RF**
  - [X] Deve ser possível listar todas as especificações.

  **RN**
  - [X] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
  - [X] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
  - [X] O usuário responsável pelo cadastro deve ter perfil administrador.

# Cadastro de imagens do carro

  **RF**
  - [X] Deve ser possível cadastrar a imagem do carro.
  - [X] Deve ser possível listar todos os carros.

  **RNF**
  - [X] Utilizar multer para upload de arquivos.

  **RN**
  - [X] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
  - [X] O usuário responsável pelo cadastro deve ter perfil de administrador.

# Aluguel de carros

  **RF**
  - [X] Deve ser possível cadastrar um aluguel.
  - [X] Deve ser possível listar todos os carros.

  **RN**
  - [X] O aluguel deve ter duração de pelo menos 24h.
  - [X] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
  - [X] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
  - [X] O usuário deve estar logado na aplicação

# Devolução de carro

  **RF**
  - [ ] Deve ser possível realizar a devolução de um carro

  **RN**
  - [ ] Se o carro for devolvido com menos de 24h, deverá ser cobrada diária completa
  - [ ] Ao realizar devolução, o carro deve ser liberado para outro aluguel
  - [ ] Ao realizar devolução, o usuário dever ser liberado para outro aluguel
  - [ ] Ao realizar devolução, deverá ser calculado o total do aluguel
  - [ ] Caso o carro seja entregue num horário superior ao previsto para a entrega, deve ser cobrada uma multa no valor proporcional ao atraso
  - [ ] Caso haja multa, deverá ser somada ao total do aluguel

  # Listagem de Aluguéis para usuário

  **RF**
  - [ ] Deve ser possível realizar a busca de todos os aluguéis para o usuário

  **RN**
  - [ ] O usuário deve estar logado na aplicação

# Recuperar Senha

  **RF**
  - [ ] Deve ser possível o usuário recuperar a senha informando o e-mail
  - [ ] O usuário deve receber um e-mail com o passo a passo para a recuperação de senha
  - [ ] O usuário deve conseguir inserir uma nova senha

  **RN**
  - [ ] O usuário precisa informar uma nova senha
  - [ ] O link enviado para a recuperação de senha deve expirar em 3 horas


# Legenda
  **RF** => Requisitos funcionais
  **RNF** => Requisitos não funcionais
  **RN** => Regra de negócio
