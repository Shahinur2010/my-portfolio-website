
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ActiveLink = ({to, children}) => {
    return (
            <NavLink
                to={to}
                style={({ isActive }) => {
                    return {
                    color: isActive ? "blue" : "",
                }}}
            >
                {children}
            </NavLink>
            
    );
};

export default ActiveLink;