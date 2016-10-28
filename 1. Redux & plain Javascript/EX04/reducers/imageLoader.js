function imageLoader(currentState, action){
    var DEFAULT_STATE = {loading: false, imageLinks: []};
    var nextState = Object.assign({}, currentState);
    if (currentState === undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }
    switch (action.type) {

      case 'IMAGES_LOADING':
        nextState.loading = true;
        return nextState;
      case 'IMAGES':
        nextState.loading = false;

        var imageLinks = [];
        for (var i = 0 ; i < action.images.length ; i++) {
            imageLinks.push(action.images[i].link);
        }
        nextState.imageLinks = imageLinks;
        return nextState;
      default:
        nextState = currentState;
        return nextState;
    }
}

function funcWithError(){
    throw Error('an error from sum')
}