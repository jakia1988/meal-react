import { Map } from 'immutable';
import * as Actions from '../actions/application';
import * as GlobalConstants from '../constents/global';

function ApplicationReducer(state, action) {
	// default initlization of the reducer. 
	 if (typeof state === 'undefined') { 
	 	return new Map().withMutations(m => {
	 		m.set(GlobalConstants.PROP_INITIALIZED,false);
	 		m.set(GlobalConstants.PROP_FETCHING, false);
	 	});
	 }

	switch(action.type) {
		/* Take the immutable object from action.data and deep-merge it into the reducer */
        
        case Actions.REQUEST_INIT_APPLICATION :
            return state;
		case Actions.REQUEST_INIT_APPLICATION_COMPLETE:
		return state

		default:
			console.log("default application reducer");
			return state;
	}
}

export default ApplicationReducer;