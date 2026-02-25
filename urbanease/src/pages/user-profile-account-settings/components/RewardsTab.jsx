import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RewardsTab = ({ user }) => {
  const tier = user.loyaltyPoints >= 2000 ? 'Gold' : user.loyaltyPoints >= 1000 ? 'Silver' : 'Bronze';
  const progress = Math.min(100, Math.round((user.loyaltyPoints % 1000) / 10));

  const benefits = [
    { icon: 'BadgeCheck', label: 'Priority Support' },
    { icon: 'Percent', label: 'Exclusive Discounts' },
    { icon: 'Gift', label: 'Birthday Rewards' },
    { icon: 'Crown', label: 'Premium Badge' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Memberships & Rewards</h2>
          <p className="text-sm text-muted-foreground">Track your tier, points, and earned benefits</p>
        </div>
        <Button variant="outline" iconName="Gift" iconPosition="left">
          Redeem Rewards
        </Button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Icon name="Crown" size={20} />
            </div>
            <div>
              <div className="font-medium text-foreground">Current Tier</div>
              <div className="text-2xl font-bold text-primary">{tier}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Points</div>
            <div className="text-2xl font-bold text-foreground">{user.loyaltyPoints}</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-muted-foreground">Progress to next tier</span>
            <span className="text-sm font-medium text-foreground">{progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full">
            <div className="h-2 bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-medium text-foreground mb-4">Benefits</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center space-x-3 p-3 border border-border rounded-lg">
              <div className="p-2 rounded-lg bg-muted text-foreground">
                <Icon name={b.icon} size={18} />
              </div>
              <span className="text-sm font-medium text-foreground">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsTab;
