import * as ActionTypes from './ActionTypes'

export const postText = (text) => (dispatch) => {
    dispatch(textLoading(true));

    // setTimeout(() => {
    //     dispatch(addText("this is working"));
    // }, 2000)
    return fetch("http://localhost:3000/", {
        method: 'POST',
        body: text,
        headers: {
            'Content-Type': 'text/plain'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response
            } else {
                var error = new Error('Errror' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        },
            error => {
                var errmess = new Error(error.message)
                throw errmess
            })
        .then(response => response.text())
        .then(text => dispatch(addText(text)))
        .catch(error => {
            console.log('Post URL ', error.message)
            alert("Your url couldnt be scraped: " + error.message + "\nor URL is not supported")
        })
}

export const textLoading = () => ({
    type: ActionTypes.TEXT_LOADING
});

export const textFailed = (errmess) => ({
    type: ActionTypes.TEXT_FAILED,
    payload: errmess
});

export const addText = (text) => ({
    type: ActionTypes.ADD_TEXT,
    payload: text
})