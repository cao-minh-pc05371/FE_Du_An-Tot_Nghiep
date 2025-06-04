const AdminSidebar = () => {
    return (
        <aside className="w-64 h-screen bg-gray-900 text-white px-4 py-6">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <ul className="space-y-2">
                <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
                <li className="hover:text-blue-400 cursor-pointer">Users</li>
                <li className="hover:text-blue-400 cursor-pointer">Settings</li>
            </ul>
        </aside>
    );
};

export default AdminSidebar;
