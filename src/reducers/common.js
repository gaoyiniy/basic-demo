const initState = {
  collapsed: false
}
const commons = (state = initState, action) => {
  switch (action.type) {
    case 'global/collapsed':
      return { ...state, collapsed: !state.collapsed }
    default:
      return state
  }
}

export default commons
