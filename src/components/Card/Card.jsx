import { WithRuBalance } from '../helpers/hoc/withRuBalance';
import './style.css'

const Card = ({balance, setBalance, ruBalance}) => {
    return (
        <div className='card'>
            <div className='card-block'>
                <p>CRYPTO-FINANCE</p>
                <button onClick={setBalance}>Add money</button>
            </div>
            <div className='card-block'>
                <p>RUSTAM CHUNAEV</p>
                <p>{balance} $</p>
            </div>
        </div>
    );
};

/* HOC (хок) обернул компоненту Card, получил у этой компоненты props,
сделал преобразования над этими props, затем вернул все props в эту 
компоненту (Card) - и помимо тех пропсов, которые уже были у компоненты
Card, добавил ещё свои props. */
export default WithRuBalance(Card);