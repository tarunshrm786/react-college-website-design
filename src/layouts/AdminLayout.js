// src/layouts/AdminLayout.js
import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="AdminLayout">
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
