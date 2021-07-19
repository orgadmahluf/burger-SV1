
import React ,{Fragment} from 'react'
import { withRouter } from 'react-router-dom';
 
const Parent = (props) => {
    const URL =
'https://cdn.pixabay.com/photo/2017/01/26/18/37/burger-2011303_960_720.jpg'
    return (
    <Fragment>
        <div style={{
            // backgroundImage: `url(${URL})`,
            // backgroundSize:'1300px 982px',
            // backgroundPosition:'center',
            // backgroundRepeat:'no-repeat',
            //  backgroundColor:'lightblue'
            
        }}>
            {props.children}
        </div>
        </Fragment>
    )
}
 
export default withRouter(Parent);