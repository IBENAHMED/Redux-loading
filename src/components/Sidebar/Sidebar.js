import { useSelector } from 'react-redux';
import './Sidebar.css'

const Sidebar = () => {

    let { name } = useSelector(state => state.user.userData);

    return (
        <div className='Sidebar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Profile</li>
                <li>Reda {name}</li>
            </ul>
        </div>
    )
}

export default Sidebar
