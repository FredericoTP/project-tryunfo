import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsCreated: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;

      const one = parseInt(cardAttr1, 10);
      const two = parseInt(cardAttr2, 10);
      const three = parseInt(cardAttr3, 10);
      const sum = one + two + three;
      const number = 210;
      const number2 = 90;

      const first = (
        cardName === '' || cardDescription === '' || cardImage === '' || cardRare === '');
      const second = sum > number;
      const third = (
        cardAttr1 < 0
        || cardAttr1 > number2
        || cardAttr2 < 0
        || cardAttr2 > number2
        || cardAttr3 < 0
        || cardAttr3 > number2
      );
      const newBtnState = first || second || third;

      this.setState({
        isSaveButtonDisabled: newBtnState,
      });
    });
  }

  onSaveButtonClick(event) {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    event.preventDefault();

    this.setState((prevState) => ({
      cardsCreated: [...prevState.cardsCreated, card],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    }));

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  deleteCard({ target }) {
    const { cardsCreated } = this.state;
    const { name } = target;
    const toNumber = parseInt(name, 10);

    this.setState({
      cardsCreated: cardsCreated.filter((card, index) => index !== toNumber),
    });

    cardsCreated.forEach((card) => {
      if (card.cardTrunfo) {
        this.setState({ hasTrunfo: false });
      }
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardsCreated,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>

        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <div>
          <ul>
            { cardsCreated.map((card, index) => {
              const {
                cardName: name,
                cardDescription: description,
                cardAttr1: attr1,
                cardAttr2: attr2,
                cardAttr3: attr3,
                cardImage: image,
                cardRare: rare,
                cardTrunfo: trunfo,
              } = card;

              return (
                <li key={ `${cardName}-${index}` }>
                  <Card
                    key={ name }
                    cardName={ name }
                    cardDescription={ description }
                    cardAttr1={ attr1 }
                    cardAttr2={ attr2 }
                    cardAttr3={ attr3 }
                    cardImage={ image }
                    cardRare={ rare }
                    cardTrunfo={ trunfo }
                  />
                  <button
                    name={ index }
                    data-testid="delete-button"
                    type="button"
                    onClick={ this.deleteCard }
                  >
                    Excluir
                  </button>
                </li>
              );
            }) }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
