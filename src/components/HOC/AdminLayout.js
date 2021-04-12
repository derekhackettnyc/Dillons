import React from 'react';
import Header from '../Header';

import { adminNavMenu } from '../../menus'

const AdminLayout = (props) => {
    return (
            <div className="admin">
                <div className="admin__menu">
                    <Header nav={adminNavMenu} />
                </div>
                <div className="admin__dashboard">
                    {props.children}
                </div>
            </div>
    );
};

export default AdminLayout;