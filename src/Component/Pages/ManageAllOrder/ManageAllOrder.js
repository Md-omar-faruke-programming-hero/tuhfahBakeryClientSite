import React from 'react';
import ManageUsersOrderTable from '../ManageUsersOrderTable/ManageUsersOrderTable';

const ManageAllOrder = () => {
    return (
        <div className="text-center container ">

        
        <div className="">
            <h3 className="my-5">Manage All Users Order</h3>
            <ManageUsersOrderTable></ManageUsersOrderTable>
            
        </div>
        </div>
    );
};

export default ManageAllOrder;