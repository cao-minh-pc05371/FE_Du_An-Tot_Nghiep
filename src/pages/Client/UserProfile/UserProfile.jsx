import React, { useState } from 'react';
import SidebarMenu from '../../../components/UserProfile/SidebarMenu';
import AddressList from '../../../components/UserProfile/AddressList';
import OrderHistory from '../../../components/UserProfile/OrderHistory';
import UserInfoForm from '../../../components/UserProfile/UserInfoForm';
import ChangePasswordForm from '../../../components/UserProfile/ChangePasswordForm';

const UserProfile = () => {
  const [tab, setTab] = useState('info');

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        
        {/* Sidebar */}
        <SidebarMenu tab={tab} setTab={setTab} />

        {/* Main Content */}
        <div className="flex-1 bg-white shadow-md rounded-xl p-4 sm:p-6 text-xs sm:text-sm">
          {tab === 'address' && <AddressList />}
          {tab === 'history' && <OrderHistory />}
          {tab === 'info' && <UserInfoForm />}
          {tab === 'password' && <ChangePasswordForm />}
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
