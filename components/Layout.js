// Components
import SideBar from '../components/sidebar';

const Layout = ({ children }) => {
    return (
        <SideBar>
          {children}
        </SideBar>
    )
}

export default Layout;
