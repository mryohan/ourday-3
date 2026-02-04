import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContentManagementTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "Sarah & Michael\'s Wedding Story",
      type: "Story Section",
      author: "Sarah Johnson",
      lastModified: "2026-02-01",
      status: "published",
      wordCount: 450,
      sections: 20
    },
    {
      id: 2,
      title: "Beach Wedding Gallery",
      type: "Photo Gallery",
      author: "Emily Rodriguez",
      lastModified: "2026-02-02",
      status: "pending",
      wordCount: 0,
      sections: 15
    },
    {
      id: 3,
      title: "Wedding Day Schedule",
      type: "Schedule",
      author: "David Thompson",
      lastModified: "2026-02-01",
      status: "published",
      wordCount: 320,
      sections: 8
    },
    {
      id: 4,
      title: "RSVP Form Content",
      type: "Form",
      author: "Jessica Williams",
      lastModified: "2026-01-30",
      status: "draft",
      wordCount: 180,
      sections: 5
    },
    {
      id: 5,
      title: "Venue Information",
      type: "Info Section",
      author: "Robert Martinez",
      lastModified: "2026-02-03",
      status: "published",
      wordCount: 280,
      sections: 6
    },
    {
      id: 6,
      title: "Guest Welcome Message",
      type: "Text Content",
      author: "Michael Chen",
      lastModified: "2026-02-02",
      status: "pending",
      wordCount: 150,
      sections: 3
    }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'published', label: 'Published' },
    { value: 'pending', label: 'Pending Review' },
    { value: 'draft', label: 'Draft' }
  ];

  const filteredContent = contentItems?.filter(item => {
    const matchesSearch = item?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         item?.author?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item?.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-success/10 text-success';
      case 'pending':
        return 'bg-warning/10 text-warning';
      case 'draft':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Story Section':
        return 'BookOpen';
      case 'Photo Gallery':
        return 'Image';
      case 'Schedule':
        return 'Calendar';
      case 'Form':
        return 'FileText';
      case 'Info Section':
        return 'Info';
      case 'Text Content':
        return 'Type';
      default:
        return 'File';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Content Management</h2>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            Review and manage user-generated wedding invitation content
          </p>
        </div>
        <Button variant="default" iconName="Plus" iconPosition="left">
          Create Content
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="FileText" size={20} color="var(--color-primary)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Content</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">{contentItems?.length}</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <Icon name="CheckCircle" size={20} color="var(--color-success)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Published</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {contentItems?.filter(c => c?.status === 'published')?.length}
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
              <Icon name="Clock" size={20} color="var(--color-warning)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Pending Review</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {contentItems?.filter(c => c?.status === 'pending')?.length}
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <Icon name="Edit" size={20} color="var(--color-muted-foreground)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Drafts</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {contentItems?.filter(c => c?.status === 'draft')?.length}
          </p>
        </div>
      </div>
      <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Search content by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
            />
          </div>
          <div className="w-full md:w-48">
            <Select
              options={statusOptions}
              value={statusFilter}
              onChange={setStatusFilter}
              placeholder="Filter by status"
            />
          </div>
        </div>

        <div className="space-y-3">
          {filteredContent?.map((item) => (
            <div
              key={item?.id}
              className="bg-background rounded-lg border border-border p-4 hover:shadow-romantic-sm transition-romantic"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={getTypeIcon(item?.type)} size={20} color="var(--color-primary)" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 truncate">
                      {item?.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={14} />
                        {item?.author}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {new Date(item.lastModified)?.toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span>•</span>
                      <span>{item?.type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <div className="flex items-center gap-4 text-sm">
                    {item?.wordCount > 0 && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Icon name="FileText" size={16} />
                        <span className="whitespace-nowrap">{item?.wordCount} words</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="Layers" size={16} />
                      <span className="whitespace-nowrap">{item?.sections} sections</span>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(item?.status)}`}>
                    {item?.status?.charAt(0)?.toUpperCase() + item?.status?.slice(1)}
                  </span>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" iconName="Eye" aria-label="Preview content" />
                    <Button variant="outline" size="sm" iconName="Edit" aria-label="Edit content" />
                    {item?.status === 'pending' && (
                      <>
                        <Button variant="success" size="sm" iconName="Check" aria-label="Approve content" />
                        <Button variant="destructive" size="sm" iconName="X" aria-label="Reject content" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredContent?.length === 0 && (
          <div className="text-center py-12">
            <Icon name="FileText" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
            <p className="text-muted-foreground">No content found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManagementTab;