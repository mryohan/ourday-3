import React from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AnalyticsTab = () => {
  const revenueData = [
    { month: 'Aug', revenue: 8500 },
    { month: 'Sep', revenue: 12300 },
    { month: 'Oct', revenue: 15600 },
    { month: 'Nov', revenue: 18900 },
    { month: 'Dec', revenue: 22400 },
    { month: 'Jan', revenue: 28700 },
    { month: 'Feb', revenue: 31200 }
  ];

  const userGrowthData = [
    { month: 'Aug', users: 45 },
    { month: 'Sep', users: 68 },
    { month: 'Oct', users: 92 },
    { month: 'Nov', users: 125 },
    { month: 'Dec', users: 158 },
    { month: 'Jan', users: 203 },
    { month: 'Feb', users: 238 }
  ];

  const templateDistribution = [
    { name: 'Romantic', value: 35, color: '#E91E63' },
    { name: 'Modern', value: 28, color: '#FF6B9D' },
    { name: 'Vintage', value: 18, color: '#F8BBD9' },
    { name: 'Beach', value: 12, color: '#10B981' },
    { name: 'Luxury', value: 7, color: '#F59E0B' }
  ];

  const topTemplates = [
    { name: "Classic Vintage", sales: 52, revenue: "$14,508", trend: "+15%" },
    { name: "Romantic Garden", sales: 45, revenue: "$13,455", trend: "+12%" },
    { name: "Modern Elegance", sales: 38, revenue: "$13,262", trend: "+8%" },
    { name: "Royal Luxury", sales: 33, revenue: "$13,167", trend: "+18%" },
    { name: "Beach Paradise", sales: 29, revenue: "$9,541", trend: "+5%" }
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Sarah Johnson",
      action: "Purchased Romantic Garden template",
      time: "2 hours ago",
      icon: "ShoppingCart",
      color: "success"
    },
    {
      id: 2,
      user: "Michael Chen",
      action: "Completed wedding invitation setup",
      time: "4 hours ago",
      icon: "CheckCircle",
      color: "primary"
    },
    {
      id: 3,
      user: "Emily Rodriguez",
      action: "Submitted content for review",
      time: "6 hours ago",
      icon: "FileText",
      color: "warning"
    },
    {
      id: 4,
      user: "David Thompson",
      action: "Received 45 RSVP responses",
      time: "8 hours ago",
      icon: "Users",
      color: "accent"
    },
    {
      id: 5,
      user: "Jessica Williams",
      action: "Updated gallery with 20 photos",
      time: "10 hours ago",
      icon: "Image",
      color: "primary"
    }
  ];

  const getActivityColor = (color) => {
    const colors = {
      success: 'bg-success/10 text-success',
      primary: 'bg-primary/10 text-primary',
      warning: 'bg-warning/10 text-warning',
      accent: 'bg-accent/10 text-accent'
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Analytics Dashboard</h2>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Track platform performance and user engagement metrics
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="DollarSign" size={20} color="var(--color-primary)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">$137,650</p>
          <p className="text-xs text-success mt-1 flex items-center gap-1">
            <Icon name="TrendingUp" size={14} />
            +24% from last month
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <Icon name="Users" size={20} color="var(--color-success)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Active Users</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">238</p>
          <p className="text-xs text-success mt-1 flex items-center gap-1">
            <Icon name="TrendingUp" size={14} />
            +17% from last month
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Icon name="ShoppingCart" size={20} color="var(--color-accent)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Template Sales</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">197</p>
          <p className="text-xs text-success mt-1 flex items-center gap-1">
            <Icon name="TrendingUp" size={14} />
            +12% from last month
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
              <Icon name="Star" size={20} color="var(--color-warning)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Avg. Rating</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">4.8</p>
          <p className="text-xs text-success mt-1 flex items-center gap-1">
            <Icon name="TrendingUp" size={14} />
            +0.3 from last month
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">Revenue Trend</h3>
          <div className="w-full h-64 md:h-80" aria-label="Revenue trend chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.5rem'
                  }}
                />
                <Bar dataKey="revenue" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">User Growth</h3>
          <div className="w-full h-64 md:h-80" aria-label="User growth chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.5rem'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="var(--color-success)"
                  strokeWidth={3}
                  dot={{ fill: 'var(--color-success)', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">Template Distribution</h3>
          <div className="w-full h-64" aria-label="Template distribution pie chart">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={templateDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100)?.toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {templateDistribution?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2 bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">Top Performing Templates</h3>
          <div className="space-y-3">
            {topTemplates?.map((template, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-background rounded-lg border border-border"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-medium text-foreground truncate">
                      {template?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{template?.sales} sales</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <p className="text-sm md:text-base font-bold text-foreground whitespace-nowrap">
                    {template?.revenue}
                  </p>
                  <span className="text-xs font-medium text-success whitespace-nowrap">
                    {template?.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity?.map((activity) => (
            <div
              key={activity?.id}
              className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getActivityColor(activity?.color)}`}>
                <Icon name={activity?.icon} size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base text-foreground">
                  <span className="font-medium">{activity?.user}</span> {activity?.action}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{activity?.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;