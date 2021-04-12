import React, { useContext } from 'react'
import AppStoreContext from '../../contexts/AppStore'


const Dashboard = () => {

    const { state } = useContext(AppStoreContext)

    return (
        <h2 className="page-heading">
            Dillons Jewellers' DashBoard
            <p className="subheading">{`Signed In AS : ${state.auth.currentUser}`}</p>
        </h2>
    )
};

export default Dashboard