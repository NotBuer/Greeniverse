import './Finishing.css';

function Finishing() {
    return (
        <>
            <main id='container2'>

                <article id='delivery'>
                    <h2>Entrega</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <form>
                        <input type="address" id='cep' placeholder='00000-000' />
                        <button type="submit" value="Calcular" className="btn">Calcular</button>
                    </form>
                    <a href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" target='_blank' id='linkCep'>
                        <h4>Não sei meu CEP</h4>
                    </a>
                </article>
                <article id='finishing'>
                    <div id='coupon'>
                        <label htmlFor="cupom">Cupom</label>
                        <input type="text" id="labelCoupon" placeholder='CupomGreeniverse' />
                        <button type="submit" value="Aplicar" className="btn">Aplicar</button>
                    </div>
                    <p>Produtos</p>
                    <p>Descontos</p>
                    <p>Entrega</p>
                    <p>Total</p>
                    <button type="submit" value="Finishing" className="btn">Finalizar Pedido</button>
                </article>

            </main>
        </>
    );
}

export default Finishing;