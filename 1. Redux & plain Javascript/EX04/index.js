
// step 1.2
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk))
// ~end step 1.2
// step 1.3
function render() {
  var state = store.getState();
    document.getElementById('value').innerHTML = state.count.result;
    document.getElementById('value2').innerHTML = state.sum;

    if(state.count.loading){
        document.getElementById('status').innerHTML = "is loading...";
    }else{
         document.getElementById('status').innerHTML = "loaded";
    }

    if(state.images.loading){
        document.getElementById('imagesStatus').innerHTML = "is loading...";
    }else{
         document.getElementById('imagesStatus').innerHTML = "loaded";
    }

    var imagesList = document.getElementById('imagesList');

    for (var i = 0 ; i < state.images.imageLinks.length ; i++) {
        var imgLink = state.images.imageLinks[i];
        $(imagesList).append($('<img>', {src: imgLink}));
    }
};
store.subscribe(render);
// ~end step 1.3
render();
