import { useEffect, useState } from "react"

/* Кастомные хуки - это функции, которые используют другие хуки для создания
повторно используемой функциональности. Они нужны нам для переиспользования 
какой-либо логики, что ведёт к тому, что компоненты становятся чище.  */
export const useFilteredCoins = (setCoins, coins) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        const filteredCoins = coins.filter(coin => {
            return coin.name.toLowerCase().includes(value)
        })
        setCoins(filteredCoins)
    }, [value])

    return { setValue, value }
}