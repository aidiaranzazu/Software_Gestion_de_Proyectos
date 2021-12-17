import React from 'react';
//import Sidebar from 'components/Sidebar';
//import SidebarResponsive from 'components/SidebarResponsive';
import PrivateRoute from '../components/PrivateRoute';


const PrivateLayout = ({ children }) => {
    return(
        <PrivateRoute>
            <div className= "private">
                <div className= "layoutP">
                   {/* <Sidebar/>
                    <SidebarResponsive/>*/}
                    <main className="mainPrivate">
                        {children}
                    </main>
                </div>
            </div>
        </PrivateRoute>

    );
};

export default PrivateLayout;