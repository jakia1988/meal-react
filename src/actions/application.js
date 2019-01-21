import axios from 'axios';
import {API} from '../constents/secretApi';

export const REQUEST_INIT_APPLICATION = "REQUEST_INIT_APPLICATION";
export const REQUEST_INIT_APPLICATION_COMPLETE = "REQUEST_INIT_APPLICATION_COMPLETE";

export function initApplicationRequest(){
	return {
		type:REQUEST_INIT_APPLICATION,
		datetime:""
	}
}

export function initApplication() {
    return async function (dispatch) {
      dispatch(initApplicationRequest());
   
      let endpoint = API('categories.php');
      console.log("initApplication:endpoint",endpoint);
      console.log("initApplication.request payload");
      await axios.get(endpoint, {})
        .then(function (response) {
          dispatch(initApplicationRequestComplete(response.status, response.data.categories));
        })
        .catch(function (error) {
             console.log("initApplicationRequestComplete", error);
             dispatch(initApplicationRequestComplete(error));
        });
        // In a real world app, you also want to
        // catch any error in the network call.
    }
  }
  export function initApplicationRequestComplete(status, data){
	return {
		type:REQUEST_INIT_APPLICATION_COMPLETE,
		status:status,
		data:data
	}
}