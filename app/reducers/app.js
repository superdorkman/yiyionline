const initialSetting = {
  session: {},
  isLoggedIn: false,
  showDialog: false,
  toast: '',
  myAllInfo: {},
  showToTop: false,
  message: '',
  contextMenu: {
    show: false,
    type: 'text',
    top: 20,
    left: 20,
  }
}

const session = sessionStorage.session && JSON.parse(sessionStorage.session);
if (session) {
  initialSetting.isLoggedIn = true;
  initialSetting.session = session;
}


const app = (state = initialSetting, action) => {
  // console.log(action)
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        session: action.session
      }
    case 'OPEN_SNACK':
      return {
        ...state,
        snack: action.text
      }
    case 'SET_MSG':
      return {
        ...state,
        message: action.msg
      }
    case 'TOGGLE_DIALOG':
      return {
        ...state,
        showDialog: !state.showDialog,
        dialog: action.text
      }
    case 'SET_CHATSN':
      return {
        ...state,
        memberSN: action.sn
      }
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      }
    case 'SET_PERSONAL_INFO':
      return {
        ...state,
        myAllInfo: action.info
      }
    case 'TOGGLE_TOTOP':
      return {
        ...state,
        showToTop: action.status
      }
    case 'UPDATE_TOKEN':
      return {
        ...state,
        session: {
          ...state.session,
          id: action.id
        }
      }
    default:
      return state
  }
}

export default app;