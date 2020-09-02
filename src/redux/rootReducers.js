import {combineReducers} from 'redux'

import countryReducer from './reducers/countriesReducer'

const rootReducers = combineReducers({
    countryReducer
})

export default rootReducers