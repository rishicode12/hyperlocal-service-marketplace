import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const mockOrders = [
  { id: 'ORD-1024', service: 'House Cleaning', date: '2026-02-24', time: '10:00 AM', price: 500, status: 'Completed' },
  { id: 'ORD-1025', service: 'Plumbing Repair', date: '2026-02-25', time: '2:30 PM', price: 750, status: 'Scheduled' },
  { id: 'ORD-1026', service: 'Electrical Check', date: '2026-02-26', time: '5:00 PM', price: 350, status: 'Pending' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Completed': return 'bg-success/10 text-success border-success/20';
    case 'Scheduled': return 'bg-primary/10 text-primary border-primary/20';
    case 'Pending': return 'bg-warning/10 text-warning border-warning/20';
    default: return 'bg-muted text-muted-foreground border-border';
  }
};

const OrdersTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Orders</h2>
          <p className="text-sm text-muted-foreground">View your recent bookings and order history</p>
        </div>
        <Button variant="outline" iconName="Download" iconPosition="left">
          Export Orders
        </Button>
      </div>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-muted">
                  <Icon name="Receipt" size={18} />
                </div>
                <div>
                  <div className="font-medium text-foreground">{order.service}</div>
                  <div className="text-xs text-muted-foreground">Order ID: {order.id}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-foreground">₹{order.price}</div>
                <div className="text-xs text-muted-foreground">{order.date} • {order.time}</div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className={`px-3 py-1 rounded-full text-xs border ${getStatusBadge(order.status)}`}>
                {order.status}
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" iconName="Eye">
                  View Details
                </Button>
                <Button variant="default" size="sm" iconName="RotateCcw">
                  Rebook
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersTab;
