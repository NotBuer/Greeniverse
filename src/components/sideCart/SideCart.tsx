import React, { ChangeEvent } from 'react';
import { Drawer, Button, Divider, Badge, IconButton, Typography } from '@material-ui/core';
import { CartProduct, useCart } from '../../hooks/useCart';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DeleteIcon from '@material-ui/icons/Delete';
import "./SideCart.css";
import Product from '../statics/product/Product';
import CardProducts from '../cardProducts/CardProducts';
import { toast } from 'react-toastify';

type Anchor = 'right';

export default function SideCart() {

    const { cart, updateProductAmount, removeProduct } = useCart();

    function handleProductIncrement(product: CartProduct) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.productAmount + 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleProductDecrement(product: CartProduct) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.productAmount - 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleRemoveProduct(productId: number) {
        removeProduct(productId)
    }

    function handleClick () {
    toast.success('Compra Realizada com Sucesso!!', {
        theme:"colored"
    })
 }


    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        setState({ ...state, [anchor]: open });
    };

    /* Conteudo do carrinho Altera Aqui */

    const list = (anchor: Anchor) => (
        <>
            <div>
                <Divider />
                {cart.map(product => (
                    <div key={product.id} className="container-carrinho">
                        <h3>{product?.productName}</h3>
                        <img src={product?.productPhoto} alt={product?.productName} className='imgCart' />
                        <h4>{product.productAmount}x</h4>

                        <div >
                            <Button
                                className='botoes-carrinho'
                                type="button"
                                disabled={product.productAmount <= 1}
                                onClick={() => handleProductDecrement(product)}
                            >
                                <RemoveCircleOutlineIcon />
                            </Button>
                            <input
                                type="text"
                                readOnly
                                value={product.productAmount}
                            />
                            <Button
                                className='botoes-carrinho'
                                type="button"
                                data-testid="increment-product"
                                onClick={() => handleProductIncrement(product)}
                            >
                                <AddCircleOutlineIcon />
                            </Button>
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            className='btnDelete'
                            onClick={() => handleRemoveProduct(product.id)}
                            startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                        <hr />
                    </div>

                ))}
                <Divider />
            </div>
            <Button className='btn2' type='submit' value='submit' onClick={handleClick}>
                Finalizar Compra
            </Button>
        </>
    );

    return (
        /* BOTÃO DO CARRINHO */
        /* BOTÃO DO CARRINHO */
        <div>
            {(['right'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}