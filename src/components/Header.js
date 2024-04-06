// import Button from './Button'

// const Header =({title}) =>{

//     const clicked = (e) =>{
//         console.log('SATE SATE')
//     }
//     return(
//         <header className='header'>
//             <h1>{title}</h1>
//             <Button  color='white' text='Include' onclick= 'clicked'/>
//             <Button color='yellow' text='hold off'/>
//             <Button color='red' text='Delete'/>
//         </header>
//     )
// }
// Header.defaultProps ={
//     title: 'tasks',
//   }

// export default Header

import Button from "./Button";
import Addtask from "./Addtask";

const Header = ({ title , onAdd , showAdd }) => {

    const clicked = (e) => {
        console.log('SATE SATE')
    }

    return (
        <header className='header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <h1>{title}</h1>
            <div>
                <Button color='white' text={showAdd ? 'exit' : 'include' } onClick={onAdd} />
            </div>
        </header>

    
    );
}

Header.defaultProps = {
    title: 'tasks',
}

export default Header;
