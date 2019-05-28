const initialState = {
  opened: false,
  logged: false,
  loginText: 'Login',
  comments: [],
  images: [],
  error: false,
  loading: false,
  basket: [],
  imageToRedactId: null,
  editModalOpened: false,
  price: 'нет информации',
  count: 'нет информации',
  info: 'нет информации',
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'LOGOUT':
      return {
        ...state,
        logged: false,
        loginText: initialState.loginText,
      }

    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: action.payload,
        error: false,
        loading: false,
      }

    case 'AUTH_PENDING':
    case 'UPLOAD_IMAGES_PENDING':
    case 'FETCH_IMAGES_PENDING':
    case 'FETCH_COMMENTS_PENDING':
    case 'UPLOAD_COMMENT_PENDING':
    case 'LOAD_IMAGE_INFO_PENDING':
      return {
        ...state,
        loading: true,
        error: false,
      }

    case 'UPLOAD_COMMENT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
      }

    case 'SAVE_IMAGE_INFO_FAIL':
    case 'AUTH_FAIL':
    case 'UPLOAD_IMAGES_FAIL':
    case 'FETCH_IMAGES_FAIL':
    case 'FETCH_COMMENTS_FAIL':
    case 'UPLOAD_COMMENT_FAIL':
      return {
        ...state,
        loading: false,
        error: true,
      }

    case 'FETCH_IMAGES_SUCCESS':
      return {
        ...state,
        images: action.payload,
        loading: false,
        error: false,
      }

    case 'UPLOAD_IMAGES_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
      }

    case 'AUTH_SUCCESS':
      return {
        ...state,
        logged: true,
        loading: false,
        error: false,
        loginText: 'Выйти',
      }

    case 'HIDE_TOAST':
      return {
        ...state,
        error: false,
      }

    case 'BASKET_IMAGE':
      return {
        ...state,
        basket: [...state.basket, action.payload.id],
      }
    case 'UNBASKET_IMAGE':
      return {
        ...state,
        basket: state.basket.filter(item => item !== action.payload.id),
      }

    case 'OPEN_EDIT_MODAL':
      return {
        ...state,
        imageToRedactId: action.payload.imageId,
        editModalOpened: true,
      }

      case 'CLOSE_EDIT_MODAL':
        return {
          ...state,
          imageToRedactId: initialState.imageToRedactId,
          editModalOpened: initialState.editModalOpened,
        }

      case 'LOAD_IMAGE_INFO_SUCCESS':
        return {
          ...state,
          price: action.payload.price || initialState.price,
          info: action.payload.info || initialState.info,
          count: action.payload.count || initialState.count,
        }
      
      case 'BASKET_ALL_IMAGES':
        return {
          ...state,
          basket: action.payload.all.map(image => image.Id),
          allImagesActive: true,
        }

      case 'CLEAR_BASKET':
        return {
          ...state,
          basket: [],
        }

      case 'SAVE_IMAGE_INFO_SUCCESS':
        return {
          ...state,
          editModalOpened: false,
        }

    default:
      return state;
  }
};
