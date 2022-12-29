# :construction: README em construção ! :construction:

# :computer: Trybe-09-Project-Tryunfo :computer:

Nesse projeto foi desenvolvido um editor de arte com pixels. A pessoa usuária pode escolher uma cor em uma paleta de cores e pode pintar o que quiser em um quadro branco.

# Acesse o projeto clicando [aqui]()! :green_heart:

<br />

<details>
<summary>
  
## 1- Requisitos
  
</summary>
 
### 1. Crie o formulário que será usado para adicionar cartas ao baralho
<details><summary>Crie um formulário que será utilizado para criar as cartas do seu baralho.</summary>

* Crie um componente chamado `Form` dentro da pasta `src/components`.

* Renderize o componente `Form` dentro do componente principal `App`. 

* <details><summary>Crie os seguintes itens dentro do component <code>Form</code>:</summary>

    - um campo do tipo `text` que contenha o atributo `data-testid="name-input"`. Este campo será usado para inserir o nome da carta.

    - um campo do tipo `textarea` que contenha o atributo `data-testid="description-input"`. Este campo será usado para inserir a descrição da carta.

    - um campo do tipo `number` que contenha o atributo `data-testid="attr1-input"`. Este campo será usado para inserir o primeiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

    - um campo do tipo `number` que contenha o atributo `data-testid="attr2-input"`. Este campo será usado para inserir o segundo atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

    - um campo do tipo `number` que contenha o atributo `data-testid="attr3-input"`. Este campo será usado para inserir o terceiro atributo da carta. Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

    - um campo do tipo `text` que contenha o atributo `data-testid="image-input"`. Este campo será usado para inserir o caminho para imagem da carta.

    - um campo do tipo `select` que contenha o atributo `data-testid="rare-input"`. Este campo será usado para inserir a raridade da carta e deverá ter as `options`: `normal`, `raro` e `muito raro` (é importante que as opções estejam nessa ordem).

    - um campo do tipo `checkbox` que contenha o atributo `data-testid="trunfo-input"`. Este campo será usado para inserir se a carta é o Super Trunfo.
    
    - um `button`que contenha o atributo  `data-testid="save-button"` e que tenha o texto "Salvar".
</details>
  
---

### 2. Adicione as props necessárias ao componente de formulário 

* <details><summary>O componente <code>Form</code> deverá receber as seguintes props:</summary>
  
    - `cardName`, uma string;
    - `cardDescription`, uma string;
    - `cardAttr1`, uma string;
    - `cardAttr2`, uma string;
    - `cardAttr3`, uma string;
    - `cardImage`, uma string;
    - `cardRare`, uma string;
    - `cardTrunfo`, um boolean;
    - `hasTrunfo`, um boolean;
    - `isSaveButtonDisabled`, um boolean;
    - `onInputChange`, uma callback;
    - `onSaveButtonClick`, uma callback;
  </details>


* <details><summary>As props do componente <code>Form</code> deverão ser utilizadas conforme o indicado abaixo:</summary>

    * Campo `name-input`: o atributo `value` deve receber o valor da prop `cardName` e o atributo `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `description-input`: o atributo `value` deve receber o valor da prop `cardDescription` e o atributo `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `attr1-input`: o atributo `value` deve receber o valor da prop `cardAttr1` e o atributo `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `attr2-input`: o atributo `value` deve receber o valor da prop `cardAttr2` e o atributo `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `attr3-input`: o atributo `value` deve receber o valor da prop `cardAttr3` e o atributo `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `image-input`: o atributo `value` deve receber o valor da prop `cardImage` e o atributo `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `rare-input`: o atributo `value` deve receber o valor da prop `cardRare` e o atributo `onChange` deve receber o valor da prop `onInputChange`.

    * Campo `trunfo-input`: o atributo `checked` deve receber o valor da prop `cardTrunfo` e o atributo `onChange` deve receber o valor da prop `onInputChange`.

    * Botão `save-button`: o atributo `disabled` deve receber o valor da prop `isSaveButtonDisabled` e o atributo `onClick` deve receber o valor da prop `onSaveButtonClick`.
  
  </details>
  
---

### 3. Crie e renderize o componente Card com as props necessárias

<details><summary>Crie um componente com o nome <code>Card</code> na pasta <code>src/components</code> e renderize-o  no componente principal <code>App</code>. O componente <code>Card</code> deve receber as seguintes props: </summary>
  
    - `cardName`, uma string;
    - `cardDescription`, uma string;
    - `cardAttr1`, uma string;
    - `cardAttr2`, uma string;
    - `cardAttr3`, uma string;
    - `cardImage`, uma string;
    - `cardRare`, uma string;
    - `cardTrunfo`, um boolean;
  </details>

 <details><summary>Renderize o componente <code>Card</code> dentro do componente principal <code>App</code>:</summary>

    * Exiba o valor da prop `cardName`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="name-card"`.

    * Exiba a imagem usando a tag HTML `img`, com o atributo `src` que tenha o valor da prop `cardImage` e o atributo `alt` com o valor da prop `cardName`. Essa imagem também deve ter o atributo `data-testid="image-card"`

    * Exiba o valor da prop `cardDescription`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="description-card"`.
    
    * Exiba o valor da prop `cardAttr1`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr1-card"`.

    * Exiba o valor da prop `cardAttr2`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr2-card"`
    * Exiba o valor da prop `cardAttr3`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="attr3-card"`.

    * Exiba o valor da prop `cardRare`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="rare-card"`.

    * Exiba o texto `Super Trunfo` somente quando o valor da prop `cardTrunfo` for `true`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="trunfo-card"`.

</details>

---

### 4. Crie o preview da carta que está sendo criada pelo formulário

Até o momento você criou dois componentes que recebem `props`, agora está na hora de criar o estado dos componentes.
Os componentes `Form` e `Card` irão compartilhar o mesmo estado para exibir as mesmas informações (isso já te dá uma dica de onde o estado deve estar, não é mesmo?).
Quando alguma informação é digitada em algum campo do formulário, o componente `Card` deve exibir a mesma informação em tempo real, criando um preview da carta antes de ela ser salva no baralho (a funcionalidade de salvar será feita nos próximos requisitos). 

Você deverá usar a prop `onInputChange` para passar uma callback para lidar com os eventos de `onChange` dos inputs do formulário. Não se esqueça que os valores dos inputs (que também são passados por props) também devem ser salvos em um estado.

<details><summary><strong>Informações técnicas:</strong></summary>

  * Ao digitar algo no campo com o `data-testid="name-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="name-card"`.
  
  * Ao digitar algo no campo com o `data-testid="description-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="description-card"`.

  * Ao digitar algo no campo com o `data-testid="image-input"` do formulário, o mesmo valor deverá ser passado para o componente `Card`, e ser usado no atributo `src` do elemento com o `data-testid="image-card"`.

  * Ao digitar algo no campo com o `data-testid="attr1-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr1-card"`.

  * Ao digitar algo no campo com o `data-testid="attr2-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr2-card"`.

  * Ao digitar algo no campo com o `data-testid="attr3-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="attr3-card"`.

  * Ao selecionar algum valor no `select` com o `data-testid="rare-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="rare-card"`.

  * Quando o campo do tipo `checkbox` que possui o `data-testid="trunfo-input"` estiver `checked`, deverá ser renderizado no componente `Card` o texto `Super Trunfo` dentro do elemento com o `data-testid="trunfo-card"`.

</details>

---  

### 5. Faça a validação do botão de Salvar no formulário

<details><summary>O botão que possui o atributo <code>data-testid="save-button"</code> só deve estar habilitado se todas as informações do formulário estiverem preenchidas corretamente, seguindo as seguintes regras:</summary>

  * Os campos `Nome`, `Descrição`, `Imagem` e `Raridade ` devem conter alguma informação (ou seja, os `inputs` não podem estar vazios).

  * A soma dos valores dos 3 atributos (`attr1-input`, `attr2-input` e `attr3-input`) não pode ultrapassar o valor **210**.

  * Cada um dos três atributos pode ter **no máximo 90 pontos cada**.
  
  * Os atributos não podem receber valores negativos.
</details>

---
  
### 6. Crie a função do botão salvar

<details><summary>Agora que o botão de salvar já está validado, você pode adicionar uma nova carta ao seu baralho. Isso significa que você precisará criar um novo estado na sua aplicação para salvar a lista de cartas existentes no seu baralho.</summary>

  * Ao clicar no botão que possui o atributo `data-testid="save-button"`, as informações que foram preenchidas no formulário deverão ser salvas no estado da sua aplicação.
  
  * Após salvar as informações, os `inputs` do formulário `Nome`, `Descrição` e `Imagem` e o conteúdo do preview da carta deverão ser limpos.

  * Após salvar as informações, os três campos de atributos devem ter valor 0.

  * Após salvar as informações, o campo `Raridade` deve conter o valor `normal`.
</details>

---

### 7. Crie a validação do Super Trunfo

<details><summary>Em um baralho de Super Trunfo pode existir apenas <strong>uma carta Super Trunfo</strong>. Por isso é necessário fazer uma validação para que somente 1 carta Super Trunfo seja salva no seu baralho:</summary>

  * Para que uma carta seja salva como Super Trunfo é preciso que o input com o `data-testid="trunfo-input"` esteja `checked` na hora de salvar a carta. Por isso, a validação será feita nesse campo. Para fazer essa validação, você deve usar o prop `hasTrunfo` do componente `Form`.

  * Caso já exista uma carta Super Trunfo em seu baralho, o formulário de criação de carta não deverá exibir o `checkbox` `data-testid="trunfo-input"`. No seu lugar deve ser renderizada a frase: "Você já tem um Super Trunfo em seu baralho".

</details>

---

### 8. Exiba a lista de cartas que estão salvas no estado

Você já tem várias cartas legais em seu baralho, agora é a hora de listá-las para que você possa ver toda sua coleção!

  * Renderize dentro do component `App` uma lista com todas as cartas que você tem no estado da aplicação.
  * Garanta que sempre que uma carta for adicionada, a lista é atualizada automaticamente.

---
  
### 9. Crie um botão para remover uma carta do baralho

* <details><summary>Criar em cada carta que está sendo renderizada do seu baralho um <code>button</code> com o texto <code>Excluir</code> e o atributo <code>data-testid="delete-button"</code>.</summary>
  
    * A carta de _preview_ **não pode ter esse botão**.
    
    * Ao clicar neste botão, a carta deve ser excluída do seu baralho, ou seja, não deverá mais ser renderizada na página.
    **Dica: Lembre-se que o baralho está sendo renderizado a partir do estado do seu componente!**
    
    * Se a carta excluída for uma carta Super Trunfo, o `checkbox` do formulário deverá aparecer novamente, tornando possível a criação de uma nova carta Super Trunfo.

  </details>

---
  
## Requisitos bônus
  
  Sua aplicação terá três filtros de listagem de cartas: filtro por **nome**, por **raridade** e por **Super Trunfo**. Os filtros **nome** e **raridade** são acumulativos. O filtro **Super Trunfo** funciona de forma independente.

### 10. Crie o filtro pelo nome da carta

  <details><summary>Para filtro do <strong>nome</strong>, você deverá criar um campo do tipo <code>text</code> e adicionar o atributo <code>data-testid="name-filter"</code>:</summary>
  
  * Este campo deve ser renderizado sempre, mesmo se não existirem cartas salvas no baralho.
  
  * Ao digitar neste campo, deve ser renderizado na página apenas as cartas que contenham no `nome` o texto digitado.

  </details>  

---

### 11. Crie o filtro por raridade da carta

<details><summary>Para filtrar por <strong>raridade</strong>, você deverá criar um campo do tipo <code>select</code> e adicionar o atributo <code>data-testid="rare-filter"</code>:</summary>
  
  * Este `select` deve possuir as seguintes `options`: 
    - `todas`
    - `normal`
    - `raro`
    - `muito raro`
  
  * Por padrão, a opção `todas` já estará selecionada;
  
  * Ao selecionar uma das opções, apenas as cartas que possuem a raridade especificada deverão ser renderizadas. Caso esteja selecionada `todas`, não deve ter filtro de raridade aplicado na lista.
  
  * Se o campo do filtro `Nome` estiver preenchido, os dois filtros (por nome e por raridade) devem funcionar em conjunto.

</details>

---
  
### 12. Crie o filtro de Super Trunfo

<details><summary>Para filtrar por <strong>Super Trunfo</strong>, você deverá criar um campo do tipo <code>checkbox</code> com a <code>label</code> Super Trunfo e o atributo <code>data-testid="trunfo-filter"</code>:</summary>
  
  * Ao selecionar este `checkbox`, apenas a carta **Super Trunfo** deverá ser renderizada.
  
  * Enquanto o `checkbox` estiver com o atributo `checked`, ou seja, se estiver selecionado, os `inputs` dos filtros por nome e por raridade deverão ficar com o atributo `disabled`.

  * Se o `checkbox` não estiver selecionado, as cartas devem ser renderizadas normalmente, seguindo apenas as regras dos filtros anteriores.

</details>

---
  
</details>
<br />

## 2- Nota do Projeto

## 100% :heavy_check_mark:

![Project-Tryunfo-Grade](https://github.com/FredericoTP/trybe-project-09-tryunfo/blob/main/images/tryunfo-grade.png?raw=true)

<br />

## 3- Preview
