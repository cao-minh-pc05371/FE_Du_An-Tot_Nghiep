import React from 'react';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <AdminSidebar />
            <div style={{ flex: 1 }}>
                <AdminNavbar />
                <main style={{ padding: '1rem' }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
