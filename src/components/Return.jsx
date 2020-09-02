import React from 'react'
import { withRouter } from "react-router-dom";

const Return = ({history}) => {
    const handleReturn = () => {
        return history.push('/')
    }
    return(
        <button onClick={handleReturn}> <i className="fa fa-long-arrow-left"></i> Back</button>
    )
}

export default withRouter(Return)