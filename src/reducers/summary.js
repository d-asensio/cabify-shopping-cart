export function updateGrandTotal (state, { payload }) {
  const { total } = payload

  state.grandTotal = total
}
