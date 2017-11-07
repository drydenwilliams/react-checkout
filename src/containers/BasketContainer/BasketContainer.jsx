import React from 'react'
import './BasketContainer.css'

class BasketContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            products: [
                { id: 0, name: "Mountain Dew", unitPrice: 1.50, units: 0 },
                { id: 1, name: "Desperados", unitPrice: 2, units: 1 },
                { id: 2, name: "Jack Daniels", unitPrice: 1.25, units: 1 }
            ]
        }
    }

    handleUnitsChange(event, product) {
        const changeValue = event.target.value
        const productId = product.id
        const updatedProducts = this.state.products.map((product, index) => 
            productId === product.id ? 
            ({ ...product, units: changeValue }) :
            product
        )
        this.setState({ products: updatedProducts })
    }

    handleClearBasket() {
        console.log('handleClearBasket')
        const updatedProducts = this.state.products.map((product, index) => ({ ...product, units: 0 }))
        this.setState({ products: updatedProducts })
    }

    render() {
        const totalAmount = this.state.products.reduce((acc, product) => acc + (product.unitPrice * product.units), 0)
        return (
            <div className="basket">
                <div className="basket__inner">
                    <div className="basket__list">
                        {this.state.products.map((product, index) => {
                            return (
                                <div className="basket__list__item">
                                    <span className="name">{product.name}</span>
                                    <input className="input" id="number" type="number" onChange={(event) => this.handleUnitsChange(event, product)} value={product.units} min="0" max="10" />
                                    <span className="price">£ {product.unitPrice * product.units}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="basket__controls">
                        <div className="total">Total: £{totalAmount} </div>
                        <div className="buttons">
                            <button className="btn btn--default" onClick={() => this.handleClearBasket()}>Clear</button>
                            <button className="btn btn--lrg btn--cta">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasketContainer
