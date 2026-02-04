import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const TemplateManagementTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const templates = [
  {
    id: 1,
    name: "Romantic Garden",
    category: "Romantic",
    preview: "https://images.unsplash.com/photo-1647470226289-64744f141022",
    previewAlt: "Elegant wedding invitation design with pink roses and gold calligraphy on cream background in romantic garden setting",
    price: "$299",
    sales: 45,
    revenue: "$13,455",
    rating: 4.8,
    status: "active",
    uploadDate: "2025-12-15"
  },
  {
    id: 2,
    name: "Modern Elegance",
    category: "Modern",
    preview: "https://img.rocket.new/generatedImages/rocket_gen_img_12d843f97-1764655131620.png",
    previewAlt: "Minimalist wedding invitation with clean geometric lines and contemporary typography on white marble background",
    price: "$349",
    sales: 38,
    revenue: "$13,262",
    rating: 4.9,
    status: "active",
    uploadDate: "2025-12-20"
  },
  {
    id: 3,
    name: "Classic Vintage",
    category: "Vintage",
    preview: "https://img.rocket.new/generatedImages/rocket_gen_img_1b8cfe782-1768356321933.png",
    previewAlt: "Vintage style wedding invitation with ornate borders and classic serif fonts on aged parchment paper texture",
    price: "$279",
    sales: 52,
    revenue: "$14,508",
    rating: 4.7,
    status: "active",
    uploadDate: "2026-01-05"
  },
  {
    id: 4,
    name: "Beach Paradise",
    category: "Beach",
    preview: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2be67eb-1767431926417.png",
    previewAlt: "Tropical beach wedding invitation with watercolor palm leaves and ocean blue accents on sandy beige background",
    price: "$329",
    sales: 29,
    revenue: "$9,541",
    rating: 4.6,
    status: "active",
    uploadDate: "2026-01-10"
  },
  {
    id: 5,
    name: "Rustic Charm",
    category: "Rustic",
    preview: "https://img.rocket.new/generatedImages/rocket_gen_img_1b288b3f6-1765203928804.png",
    previewAlt: "Rustic wedding invitation with wooden texture background and wildflower illustrations in earthy brown tones",
    price: "$299",
    sales: 41,
    revenue: "$12,259",
    rating: 4.8,
    status: "pending",
    uploadDate: "2026-01-18"
  },
  {
    id: 6,
    name: "Royal Luxury",
    category: "Luxury",
    preview: "https://img.rocket.new/generatedImages/rocket_gen_img_1efacd76d-1766812485799.png",
    previewAlt: "Luxurious wedding invitation with gold foil embossing and royal purple velvet texture with diamond accents",
    price: "$399",
    sales: 33,
    revenue: "$13,167",
    rating: 4.9,
    status: "active",
    uploadDate: "2026-01-25"
  }];


  const categoryOptions = [
  { value: 'all', label: 'All Categories' },
  { value: 'Romantic', label: 'Romantic' },
  { value: 'Modern', label: 'Modern' },
  { value: 'Vintage', label: 'Vintage' },
  { value: 'Beach', label: 'Beach' },
  { value: 'Rustic', label: 'Rustic' },
  { value: 'Luxury', label: 'Luxury' }];


  const filteredTemplates = templates?.filter((template) => {
    const matchesSearch = template?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || template?.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalRevenue = templates?.reduce((sum, t) => {
    return sum + parseFloat(t?.revenue?.replace(/[$,]/g, ''));
  }, 0);

  const totalSales = templates?.reduce((sum, t) => sum + t?.sales, 0);

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning';
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Template Management</h2>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            Manage wedding invitation templates and track sales performance
          </p>
        </div>
        <Button variant="default" iconName="Upload" iconPosition="left">
          Upload Template
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Layout" size={20} color="var(--color-primary)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Templates</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">{templates?.length}</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <Icon name="ShoppingCart" size={20} color="var(--color-success)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Sales</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">{totalSales}</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Icon name="DollarSign" size={20} color="var(--color-accent)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            ${totalRevenue?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
              <Icon name="TrendingUp" size={20} color="var(--color-warning)" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">Avg. Rating</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">4.8</p>
        </div>
      </div>
      <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-romantic-sm">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)} />

          </div>
          <div className="w-full md:w-48">
            <Select
              options={categoryOptions}
              value={categoryFilter}
              onChange={setCategoryFilter}
              placeholder="Filter by category" />

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredTemplates?.map((template) =>
          <div
            key={template?.id}
            className="bg-background rounded-lg border border-border overflow-hidden hover-lift transition-romantic">

              <div className="aspect-[4/3] overflow-hidden">
                <Image
                src={template?.preview}
                alt={template?.previewAlt}
                className="w-full h-full object-cover" />

              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-foreground truncate">
                      {template?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{template?.category}</p>
                  </div>
                  <span className={`ml-2 px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ${getStatusColor(template?.status)}`}>
                    {template?.status?.charAt(0)?.toUpperCase() + template?.status?.slice(1)}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <Icon name="Star" size={16} color="var(--color-warning)" strokeWidth={0} fill="var(--color-warning)" />
                  <span className="text-sm font-medium text-foreground">{template?.rating}</span>
                  <span className="text-sm text-muted-foreground">({template?.sales} sales)</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Price</p>
                    <p className="text-lg font-bold text-foreground">{template?.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Revenue</p>
                    <p className="text-lg font-bold text-success">{template?.revenue}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" fullWidth iconName="Eye">
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" fullWidth iconName="Edit">
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {filteredTemplates?.length === 0 &&
        <div className="text-center py-12">
            <Icon name="Layout" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
            <p className="text-muted-foreground">No templates found matching your criteria</p>
          </div>
        }
      </div>
    </div>);

};

export default TemplateManagementTab;