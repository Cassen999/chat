import React from 'react'
import Sidebar from './Sidebar';
import { iUser } from '../interfaces/interfaces';

export default function Dashboard(user: iUser) {
  
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar id={user.id} />
    </div>
  );
};
