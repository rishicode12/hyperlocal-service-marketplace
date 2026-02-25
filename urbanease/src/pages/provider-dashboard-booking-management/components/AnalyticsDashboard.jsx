import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const COLORS = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#14b8a6', '#e11d48', '#3b82f6'];

const bookingsByDate = [
  { date: 'Feb 20', bookings: 6 },
  { date: 'Feb 21', bookings: 8 },
  { date: 'Feb 22', bookings: 5 },
  { date: 'Feb 23', bookings: 9 },
  { date: 'Feb 24', bookings: 7 },
  { date: 'Feb 25', bookings: 11 },
  { date: 'Feb 26', bookings: 10 }
];

const revenueByDate = [
  { date: 'Feb 20', revenue: 3200 },
  { date: 'Feb 21', revenue: 4200 },
  { date: 'Feb 22', revenue: 2800 },
  { date: 'Feb 23', revenue: 5100 },
  { date: 'Feb 24', revenue: 3900 },
  { date: 'Feb 25', revenue: 6400 },
  { date: 'Feb 26', revenue: 6000 }
];

const demandByCategory = [
  { name: 'Cleaning', value: 28 },
  { name: 'Plumbing', value: 22 },
  { name: 'Electrical', value: 18 },
  { name: 'Beauty', value: 12 },
  { name: 'Carpenter', value: 10 },
  { name: 'Autocare', value: 6 },
  { name: 'Chef', value: 4 }
];

const hourlyDemand = [
  { hour: '08:00', count: 2 },
  { hour: '10:00', count: 5 },
  { hour: '12:00', count: 7 },
  { hour: '14:00', count: 9 },
  { hour: '16:00', count: 11 },
  { hour: '18:00', count: 8 },
  { hour: '20:00', count: 3 }
];

const priceDistribution = [
  { price: '₹50', freq: 2 },
  { price: '₹100', freq: 6 },
  { price: '₹150', freq: 10 },
  { price: '₹200', freq: 8 },
  { price: '₹250', freq: 4 },
  { price: '₹300', freq: 3 }
];

const AnalyticsDashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Bookings by Date</h3>
          <span className="text-xs text-muted-foreground">Last 7 days</span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bookingsByDate}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bookings" stroke="#0ea5e9" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Revenue by Date</h3>
          <span className="text-xs text-muted-foreground">₹</span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueByDate}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#22c55e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Demand by Category</h3>
          <span className="text-xs text-muted-foreground">Share</span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie data={demandByCategory} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100}>
                {demandByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Peak Times & Price</h3>
          <span className="text-xs text-muted-foreground">Hours vs demand</span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hourlyDemand}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="hour" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#f59e0b" radius={[6, 6, 0, 0]} name="Demand" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-64 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={priceDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="price" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="freq" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} name="Price freq" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
