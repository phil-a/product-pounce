import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  login() {
    return (dispatch) => {
      var firebaseRef = new Firebase('https://productpounce.firebaseio.com');
      firebaseRef.authWithOAuthPopup("facebook", (error, user) => {
        if (error) {
          return;
        } else {
          dispatch(user);
        }
      });
    }
  }
}

export default alt.createActions(Actions);
