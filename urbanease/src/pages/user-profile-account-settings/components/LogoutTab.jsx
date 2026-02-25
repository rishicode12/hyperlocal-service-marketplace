import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useNavigate } from 'react-router-dom';

const LogoutTab = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/user-registration-login');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Logout</h2>
          <p className="text-sm text-muted-foreground">Sign out of your account</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg bg-muted">
            <Icon name="User" size={18} />
          </div>
          <div>
            <div className="font-medium text-foreground">{user.name}</div>
            <div className="text-xs text-muted-foreground">{user.email}</div>
          </div>
        </div>

        <Button variant="destructive" iconName="LogOut" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default LogoutTab;
