import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProfileHeader = ({ user, onImageUpload, onEditProfile }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  const getVerificationStatus = () => {
    const verifications = [
      { type: 'email', verified: user.emailVerified, label: 'Email' },
      { type: 'phone', verified: user.phoneVerified, label: 'Phone' },
      { type: 'identity', verified: user.identityVerified, label: 'Identity' }
    ];
    
    const verifiedCount = verifications.filter(v => v.verified).length;
    return { verifications, verifiedCount, total: verifications.length };
  };

  const { verifications, verifiedCount, total } = getVerificationStatus();

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Profile Image */}
        <div 
          className="relative"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src={user.profileImage}
              alt={`${user.name}'s profile`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Image Upload Overlay */}
          <div className={`absolute inset-0 bg-black/50 rounded-full flex items-center justify-center transition-opacity duration-200 cursor-pointer ${
            isImageHovered ? 'opacity-100' : 'opacity-0'
          }`} onClick={onImageUpload}>
            <Icon name="Camera" size={20} color="white" />
          </div>
          
          
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">{user.name}</h1>
              <p className="text-muted-foreground mb-2">{user.email}</p>
              
              {/* Member Since */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                <Icon name="Calendar" size={16} />
                <span>Member since {user.memberSince}</span>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={onEditProfile}
              iconName="Edit"
              iconPosition="left"
              className="self-start sm:self-auto"
            >
              Edit Profile
            </Button>
          </div>

          
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">{user.totalBookings}</div>
          <div className="text-xs text-muted-foreground">Total Bookings</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-success mb-1">{user.favoriteProviders}</div>
          <div className="text-xs text-muted-foreground">Favorite Providers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent mb-1">{user.loyaltyPoints}</div>
          <div className="text-xs text-muted-foreground">Loyalty Points</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
