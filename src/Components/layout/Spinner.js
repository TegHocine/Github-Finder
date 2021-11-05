import React, {Fragment} from 'react'
import spinner from './spinner.gif'

export const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="loading..."  style={{margin:'auto', width:'200px', display:'block'}}/>
    </Fragment>
  )
}

export default Spinner;
