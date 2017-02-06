export default function reducer(
  state={
    image: '',
    imagename: ''
  }, action) {

    switch (action.type) {
      case 'GRAB_IMAGE':
      //filler for future image GRAB_IMAGE
        return {...state, image: state.inputName, imagename: ''}
      case 'CHANGE_INPUT_NAME':
        return {...state, inputName: action.payload}
      default:
        return state;
    }
}
