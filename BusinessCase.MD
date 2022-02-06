# **Business Case**

## **Users**

### **Create User**
**RF** -> Requisitos funcionais
* [x] - Deve ser capaz de criar um novo usuário

**RN** -> Regra de negócio
* [x] Não deve ser possível cadastrar um usuário com um cpf já existente.

### **List Users**
**RF** -> Requisitos funcionais
* [x] - Deve ser capaz de listar os usuários

### **Update User**
**RF** -> Requisitos funcionais
* [x] - Deve ser capaz de atualizar o telefone de um usuário

**RN** -> Regra de negócio
* [x] Não deve ser possível alterar o cpf de um usuário.
* [x] Não deve ser possível alterar o nome de um usuário.
* [x] O updated_at deve ser alterado para a data em que a alteração ocorreu.

### **Delete User**
**RF** -> Requisitos funcionais
* [x] - Deve ser capaz de deletar um usuário

**RN** -> Regra de negócio
* [x] Não deve ser possível deletar um usuário inexistente.

----------------------------------------------------------------

## **Orders**

### **Create Order**
**RF** -> Requisitos funcionais
* [x] - Deve ser capaz de criar uma nova order

**RN** -> Regra de negócio
* [x] Não deve ser possível criar uma order para um usuário inexistente.
* [x] Não deve ser possível criar uma order sem informar a quantidade ou com quantidade 0.
* [x] Não deve ser possível criar uma order sem informar a descrição.


### **List Orders**
**RF** -> Requisitos funcionais
* [x] - Deve ser capaz de listar todas as orders


### **List Orders By User**
**RF** -> Requisitos funcionais
* [x] - Deve ser capaz de listar todas as orders do usuário

### **Update Order**
**RF** -> Requisitos funcionais
* [x] - Deve ser capaz de atualizar a order

**RN** -> Regra de negócio
* [x] Não deve ser possível alterar o user_id.
* [x] O updated_at deve ser alterado para a data em que a alteração ocorreu.

### **Delete Order**
**RF** -> Requisitos funcionais
* [x] - Deve ser capaz de deletar uma order

**RN** -> Regra de negócio
* [x] Não deve ser possível deletar uma order inexistente.