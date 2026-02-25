import React, { useMemo, useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProviderHero = () => {
  const [search, setSearch] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const ratingOptions = [
    { label: 'All ratings', value: '' },
    { label: '4.0+ stars', value: '4.0' },
    { label: '4.5+ stars', value: '4.5' },
    { label: '4.8+ stars', value: '4.8' },
  ];

  const sections = useMemo(() => ([
    {
      id: 'plumbing',
      title: 'Plumbing',
      providers: [
        { name: 'FlowFix Plumbing Co.', price: '₹150', rating: 4.6, experience: '8+ years', phone: '+91-93912-10001', summary: 'Specializing in residential plumbing and emergency leak repairs' },
        { name: 'PipePros Delhi', price: '₹120', rating: 4.2, experience: '6+ years', phone: '+91-93912-10002', summary: 'Bathroom and kitchen installations, drainage solutions' },
        { name: 'Metro Plumbers', price: '₹180', rating: 3.9, experience: '10+ years', phone: '+91-93912-10003', summary: 'Complex pipeline work and renovations'},
        { name: 'QuickLeak Fixers', price: '₹90', rating: 4.0, experience: '4+ years', phone: '+91-93912-10004', summary: 'Same-day leak repair and maintenance'},
      ],
    },
    {
      id: 'electrical',
      title: 'Electrical',
      providers: [
        { name: 'SparkRight Electric', price: '₹130', rating: 3.7, experience: '7+ years', phone: '+91-93912-20001', summary: 'Wiring, fixtures, and emergency power issues'},
        { name: 'VoltCare Services', price: '₹110', rating: 4.5, experience: '5+ years', phone: '+91-93912-20002', summary: 'Appliance installations and safety checks'},
        { name: 'City Electricians', price: '₹160', rating: 3.8, experience: '9+ years', phone: '+91-93912-20003', summary: 'Commercial and residential electrical solutions' },
        { name: 'BrightFix Electric', price: '₹95', rating: 4.2, experience: '3+ years', phone: '+91-93912-20004', summary: 'Lighting setup and minor repairs' },
      ],
    },
    {
      id: 'cleaning',
      title: 'Cleaning',
      providers: [
        { name: 'SparkleHome Cleaners', price: '₹140', rating: 3.6, experience: '6+ years', phone: '+91-93912-30001', summary: 'Deep cleaning and regular maintenance' },
        { name: 'FreshNest Services', price: '₹100', rating: 4.4, experience: '4+ years', phone: '+91-93912-30002', summary: 'Move-in/out cleaning, bathrooms, kitchens'},
        { name: 'PrimeClean Delhi', price: '₹170', rating: 4.8, experience: '8+ years', phone: '+91-93912-30003', summary: 'Premium deep clean and sanitization'},
        { name: 'DailyDust Off', price: '₹80', rating: 4.8, experience: '2+ years', phone: '+91-93912-30004', summary: 'Affordable quick cleaning sessions'  },
      ],
    },
    {
      id: 'beauty',
      title: 'Beauty',
      providers: [
        { name: 'GlamStudio At Home', price: '₹200', rating: 4.7, experience: '7+ years', phone: '+91-93912-40001', summary: 'Salon services at home, makeup, hair styling' },
        { name: 'BelleCare Pros', price: '₹150', rating: 4.5, experience: '5+ years', phone: '+91-93912-40002', summary: 'Facials, waxing, manicure services' },
        { name: 'Urban Glow Artists', price: '₹220', rating: 3.9, experience: '9+ years', phone: '+91-93912-40003', summary: 'Event makeup and premium beauty packages'},
        { name: 'QuickGlam Team', price: '₹120', rating: 4.3, experience: '4+ years', phone: '+91-93912-40004', summary: 'Express beauty services'},
      ],
    },
    {
      id: 'autocare',
      title: 'Autocare',
      providers: [
        { name: 'AutoFix Garage', price: '₹180', rating: 3.6, experience: '6+ years', phone: '+91-93912-50001', summary: 'Car servicing, oil change, minor repairs' },
        { name: 'WheelCare Delhi', price: '₹130', rating: 4.4, experience: '4+ years', phone: '+91-93912-50002', summary: 'Tyres, battery, wash & detailing' },
        { name: 'Metro Auto Clinic', price: '₹220', rating: 4.8, experience: '9+ years', phone: '+91-93912-50003', summary: 'All-round auto maintenance'},
        { name: 'QuickWash Auto', price: '₹90', rating: 4.2, experience: '3+ years', phone: '+91-93912-50004', summary: 'Affordable car wash packages'},
      ],
    },
    {
      id: 'carpenter',
      title: 'Carpenter',
      providers: [
        { name: 'WoodCraft Experts', price: '₹160', rating: 4.7, experience: '7+ years', phone: '+91-93912-60001', summary: 'Furniture repair, custom builds, fittings' },
        { name: 'FixWood Delhi', price: '₹120', rating: 3.4, experience: '5+ years', phone: '+91-93912-60002', summary: 'Door/window repairs and installations' },
        { name: 'Urban Joinery', price: '₹200', rating: 4.8, experience: '10+ years', phone: '+91-93912-60003', summary: 'Premium carpentry and remodeling'},
        { name: 'QuickCarpenter', price: '₹100', rating: 4.3, experience: '4+ years', phone: '+91-93912-60004', summary: 'Minor fixes and on-call help'},
      ],
    },
    {
      id: 'chef',
      title: 'Chef',
      providers: [
        { name: 'Home Feast Chefs', price: '₹250', rating: 4.8, experience: '8+ years', phone: '+91-93912-70001', summary: 'Private dining, events, regional cuisines' },
        { name: 'QuickCook Delhi', price: '₹160', rating: 3.5, experience: '5+ years', phone: '+91-93912-70002', summary: 'Meal prep and party menu planning' },
        { name: 'Gourmet at Home', price: '₹300', rating: 4.9, experience: '10+ years', phone: '+91-93912-70003', summary: 'Premium private chef experiences' },
        { name: 'DailyChef', price: '₹140', rating: 3.2, experience: '3+ years', phone: '+91-93912-70004', summary: 'Daily meals and custom diets' },
      ],
    },
    {
      id: 'garden',
      title: 'Garden Care',
      providers: [
        { name: 'GreenThumb Care', price: '₹120', rating: 3.6, experience: '6+ years', phone: '+91-93912-80001', summary: 'Lawn maintenance, pruning, plant health' },
        { name: 'Urban Gardeners', price: '₹100', rating: 4.4, experience: '4+ years', phone: '+91-93912-80002', summary: 'Balcony gardens and landscaping' },  
        { name: 'Metro Greens', price: '₹180', rating: 4.8, experience: '9+ years', phone: '+91-93912-80003', summary: 'Large garden maintenance and design' },
        { name: 'QuickPlant Care', price: '₹85', rating: 4.1, experience: '2+ years', phone: '+91-93912-80004', summary: 'Basic plant care visits' }, 
      ],
    },
  ]), []);

  const applyFilters = (providers) => {
    let list = providers;
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q));
    }
    if (ratingFilter) {
      const min = parseFloat(ratingFilter);
      list = list.filter(p => p.rating >= min);
    }
    return list;
  };

  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            Find Providers
          </h1>
          <div className="flex-1 sm:max-w-xl sm:ml-6">
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by provider name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select
                value={ratingFilter}
                onChange={(val) => setRatingFilter(val)}
                options={ratingOptions}
                placeholder="Filter / Ratings"
              />
              <Button variant="outline" className="hidden sm:flex">
                Filters
                <Icon name="Filter" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {sections.map((section) => {
          const filtered = applyFilters(section.providers);
          if (filtered.length === 0) return null;

          return (
            <div key={section.id} className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
                <span className="text-xs text-muted-foreground">{filtered.length} providers</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filtered.map((p, idx) => (
                  <div key={`${section.id}-${idx}`} className="group bg-background border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{p.name}</h3>
                        <p className="text-sm text-muted-foreground">{section.title}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">From</span>
                        <div className="text-base font-semibold text-foreground">{p.price}</div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <Icon name="Star" size={16} className="text-warning" />
                      <span className="font-medium text-foreground">{p.rating.toFixed(1)}</span>
                      <span className="text-muted-foreground">| {p.experience}</span>
                    </div>

                    <p className="mt-3 text-sm text-muted-foreground">
                      {p.summary}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <a href={`tel:${p.phone}`} className="text-sm text-primary hover:underline flex items-center">
                        <Icon name="Phone" size={14} className="mr-1" />
                        {p.phone}
                      </a>
                      <span className="px-2 py-1 text-xs rounded-full border border-border text-muted-foreground">
                        {p.callout}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProviderHero;
