import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const UserManagementTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b5600450-1763294005133.png",
    avatarAlt: "Professional headshot of woman with blonde hair in white blouse smiling warmly at camera",
    registrationDate: "2026-01-15",
    status: "active",
    templatePurchased: "Romantic Garden",
    paymentAmount: "$299",
    weddingDate: "2026-06-20",
    guestCount: 150
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b96df5c7-1763298849215.png",
    avatarAlt: "Professional headshot of Asian man with black hair in navy suit with confident expression",
    registrationDate: "2026-01-18",
    status: "active",
    templatePurchased: "Modern Elegance",
    paymentAmount: "$349",
    weddingDate: "2026-08-15",
    guestCount: 200
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1af0d280a-1763293938157.png",
    avatarAlt: "Professional headshot of Hispanic woman with long brown hair in pink blazer smiling brightly",
    registrationDate: "2026-01-22",
    status: "pending",
    templatePurchased: "Classic Vintage",
    paymentAmount: "$279",
    weddingDate: "2026-07-10",
    guestCount: 120
  },
  {
    id: 4,
    name: "David Thompson",
    email: "david.thompson@email.com",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d90a96ad-1763299909299.png",
    avatarAlt: "Professional headshot of man with short brown hair in gray suit with friendly smile",
    registrationDate: "2026-01-25",
    status: "active",
    templatePurchased: "Beach Paradise",
    paymentAmount: "$329",
    weddingDate: "2026-09-05",
    guestCount: 180
  },
  {
    id: 5,
    name: "Jessica Williams",
    email: "jessica.williams@email.com",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1286caa32-1763296831150.png",
    avatarAlt: "Professional headshot of woman with red hair in blue dress with warm welcoming expression",
    registrationDate: "2026-01-28",
    status: "inactive",
    templatePurchased: "Rustic Charm",
    paymentAmount: "$299",
    weddingDate: "2026-05-30",
    guestCount: 100
  },
  {
    id: 6,
    name: "Robert Martinez",
    email: "robert.martinez@email.com",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_180980d34-1763296937968.png",
    avatarAlt: "Professional headshot of Hispanic man with mustache in black suit with serious professional look",
    registrationDate: "2026-02-01",
    status: "active",
    templatePurchased: "Royal Luxury",
    paymentAmount: "$399",
    weddingDate: "2026-10-12",
    guestCount: 250
  }];


  const statusOptions = [
  { value: 'all', label: 'All Status' },
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'inactive', label: 'Inactive' }];


  const filteredUsers = users?.filter((user) => {
    const matchesSearch = user?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    user?.email?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user?.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSelectUser = (userId) => {
    setSelectedUsers((prev) =>
    prev?.includes(userId) ?
    prev?.filter((id) => id !== userId) :
    [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers?.length === filteredUsers?.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers?.map((user) => user?.id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-success/10 text-success';
      case 'pending':
        return 'bg-warning/10 text-warning';
      case 'inactive':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">User Management</h2>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            Manage user accounts, payments, and template purchases
          </p>
        </div>
        <Button variant="default" iconName="UserPlus" iconPosition="left">
          Add User
        </Button>
      </div>
      <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)} />

          </div>
          <div className="w-full md:w-48">
            <Select
              options={statusOptions}
              value={statusFilter}
              onChange={setStatusFilter}
              placeholder="Filter by status" />

          </div>
        </div>

        {selectedUsers?.length > 0 &&
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-sm font-medium text-foreground">
              {selectedUsers?.length} user{selectedUsers?.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" iconName="Mail">
                Send Email
              </Button>
              <Button variant="outline" size="sm" iconName="Ban">
                Suspend
              </Button>
              <Button variant="destructive" size="sm" iconName="Trash2">
                Delete
              </Button>
            </div>
          </div>
        }

        <div className="overflow-x-auto -mx-4 md:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers?.length === filteredUsers?.length && filteredUsers?.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
                      aria-label="Select all users" />

                  </th>
                  <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                    Registration
                  </th>
                  <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Template
                  </th>
                  <th className="px-4 py-3 text-left text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider hidden xl:table-cell">
                    Payment
                  </th>
                  <th className="px-4 py-3 text-right text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {filteredUsers?.map((user) =>
                <tr key={user?.id} className="hover:bg-muted/30 transition-romantic">
                    <td className="px-4 py-4">
                      <input
                      type="checkbox"
                      checked={selectedUsers?.includes(user?.id)}
                      onChange={() => handleSelectUser(user?.id)}
                      className="w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
                      aria-label={`Select ${user?.name}`} />

                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                          src={user?.avatar}
                          alt={user?.avatarAlt}
                          className="w-full h-full object-cover" />

                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {user?.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <p className="text-sm text-foreground whitespace-nowrap">
                        {new Date(user.registrationDate)?.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(user?.status)}`}>
                        {user?.status?.charAt(0)?.toUpperCase() + user?.status?.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <p className="text-sm text-foreground">{user?.templatePurchased}</p>
                      <p className="text-xs text-muted-foreground">
                        {user?.guestCount} guests
                      </p>
                    </td>
                    <td className="px-4 py-4 hidden xl:table-cell">
                      <p className="text-sm font-medium text-foreground whitespace-nowrap">
                        {user?.paymentAmount}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                        variant="ghost"
                        size="icon"
                        iconName="Eye"
                        aria-label="View user details" />

                        <Button
                        variant="ghost"
                        size="icon"
                        iconName="Edit"
                        aria-label="Edit user" />

                        <Button
                        variant="ghost"
                        size="icon"
                        iconName="MoreVertical"
                        aria-label="More options" />

                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {filteredUsers?.length === 0 &&
        <div className="text-center py-12">
            <Icon name="Users" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
            <p className="text-muted-foreground">No users found matching your criteria</p>
          </div>
        }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Users" size={20} color="var(--color-primary)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Users</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">{users?.length}</p>
          <p className="text-xs text-success mt-1">+12% from last month</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <Icon name="CheckCircle" size={20} color="var(--color-success)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Active Users</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {users?.filter((u) => u?.status === 'active')?.length}
          </p>
          <p className="text-xs text-success mt-1">+8% from last month</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
              <Icon name="Clock" size={20} color="var(--color-warning)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Pending</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {users?.filter((u) => u?.status === 'pending')?.length}
          </p>
          <p className="text-xs text-muted-foreground mt-1">Awaiting approval</p>
        </div>
      </div>
    </div>);

};

export default UserManagementTab;