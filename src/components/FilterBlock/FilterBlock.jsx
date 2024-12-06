import React, { useContext } from 'react';
import './style.css'
import { CoinsContext } from '../context/coinsContext';
import { useFilteredCoins } from '../helpers/hooks/useFilterCoins';

const FilterBlock = ({setCoins}) => {
    const coinsContext = useContext(CoinsContext)
    const {coins} = coinsContext

    const {setValue, value} = useFilteredCoins(setCoins, coins)

    /* С помощью хука useRef мы получаем наш элемент DOM-дерева.
    У этого элемента мы можем смотреть, какое значение (свойство value) 
    он имеет, и в целом можем с ним взаимодействовать как в JavaScript при
    помощи различных методов DOM-дерева. Обычно это используется в формах, 
    где есть кнопки, так как таким образом мы можем в input вводить огромный
    текст, и если мы не будем делать состояние, а будем пользоваться useRef,
    то в этом ref у нас будет храниться элемент, к которому он применён, с
    его значением (value) - с текстом, который мы ввели. И при нажатии на 
    кнопку мы зафиксируем это значение - получим этот элемент, в котором 
    значение уже будет обновлено тем текстом, который мы ввели. */
    // const inputRef = useRef(null)

    return (
        <div className='filter-block'>
            <input
                // ref={inputRef}
                onChange={(e) => setValue(e.target.value)} 
                value={value} 
                className='input' 
                type='text' 
                placeholder='bitcoin' 
            />
        </div>
    );
};

/* React.memo - это HOC. Если с помощью него обернуть компоненту, то наша 
компонента будет перерисовываться только в том случае, если входные данные -
пропсы (в данном случае - coins, setCoins) изменятся. */
export default React.memo(FilterBlock);