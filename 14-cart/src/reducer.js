
export const reducer = (state, action) => {
    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    };

    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            },
            {
                total: 0,
                amount: 0,
            }
        )
        total = parseFloat(total.toFixed(2))

        return { ...state, total, amount }
    }
}
