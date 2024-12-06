import React, { useCallback, useEffect, useState } from "react"
import Header from "./components/Header/Header"
import Main from "./pages/Main/Main"
import { getCoins } from "./api/api"
import { CoinsContext } from "./components/context/coinsContext"

function App() {
  const [balance, setBalance] = useState(50000)
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])

  /* Внутри useEffect мы создали дополнительную обёртку - fetchData - для
  того, чтобы дожидаться ответа от getCoins(), так как сам хук useEffect
  мы не можем сделать асинхронным. */
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins()
      setCoins(data.coins)
      setFilteredCoins(data.coins)
    }
    fetchData()
  }, []);

  /* Хук useCallback позволяет мемоизировать функции. Когда компонента 
  перерисовывается, то функция пересоздаётся, и если функция пересоздаётся,
  то следовательно она меняется, и какие-либо дочерние компоненты также
  из-за этого меняются, так как старая функция исчезает и появляется новая.
  С помощью useCallback мы можем обернуть функцию setBalance, и каждый раз,
  когда компонента будет перерисовываться - наше функция будет оставаться 
  неизменной. */
  const addBalance = useCallback(() => {
    setBalance(prev => prev + 1000)
  }, [])
  /* В случае как с хуком useMemo хук useMemo мы должны использовать только, 
  когда это действительно нужно, например, когда у нас есть какая-то
  ресурсозатратная функция - в таком случае есть смысл кэшировать 
  эту функцию. Ради каких-то мелочей, как в данном примере, useCallback 
  использовать не нужно, так как в таком случае мы не оптимизируем приложение, 
  а наоборот его загружаем, так как мемоизация - это не лёгкий процесс. */

  return (
    <>
      <CoinsContext.Provider value={{coins, filteredCoins}}>
        <Header />
        <Main 
          setCoins={setFilteredCoins} 
          balance={balance} 
          setBalance={addBalance} 
          coins={coins}
          filteredCoins={filteredCoins}
        />
      </CoinsContext.Provider>
    </>
  )
}

export default App