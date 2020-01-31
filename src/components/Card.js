import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'lightblue',
            counter: 1,
            adopted: false
        }
    }
    onClickButton = () => {
        this.setState({
            color: 'coral',
            counter: this.state.counter + 1,
            // adopted: true
        })
    }

    render() {
        const { image, card } = this.props;
        console.log(image);

        const style = {
            card: {
                // display: this.state.adopted ? "none" : "flex",
                backgroundColor: this.state.color
            },
            cardImage: {
                backgroundImage: `url(${this.props.image})`
            }
        }

        return (
            <div className="card" style={style.card}>
                <h1 className="card-tite">{this.props.title}</h1>
                <h1>{this.state.counter}</h1>
                <div className="card-img" style={style.cardImage} />
                <button onClick={this.onClickButton} className="card-btn">Adopt {this.props.title}</button>
            </div>
        )
    }
}

export default Card;