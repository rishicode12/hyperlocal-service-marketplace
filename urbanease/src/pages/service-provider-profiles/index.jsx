import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ProviderHero from './components/ProviderHero';

const ServiceProviderProfiles = () => {
  const { providerId } = useParams();
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock provider data
  const provider = {
    id: "provider-001",
    name: "Mayur Kumari",
    serviceCategory: "Professional Plumber",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviewCount: 247,
    isVerified: true,
    experience: 8,
    completedJobs: 1250,
    responseTime: "< 2 hours",
    phone: "(555) 123-4567",
    email: "mayur@plumbingpro.com", 
    location: {
      lat: 19.0760,
      lng: 72.8777
    },
    serviceRadius: 15,
    description: `Professional plumber with over 8 years of experience serving the Mumbai metropolitan area. Specializing in residential and commercial plumbing services, emergency repairs, and bathroom renovations.\n\nI take pride in delivering high-quality workmanship and excellent customer service. All work is guaranteed and I'm fully licensed and insured. Available for emergency calls 24/7.`,
    specialties: ["Emergency Repairs", "Bathroom Renovation", "Pipe Installation", "Water Heater Service", "Drain Cleaning"],
    badges: [
      { icon: "Shield", label: "Background Checked" },
      { icon: "Award", label: "Licensed & Insured" },
      { icon: "CheckCircle", label: "Verified Pro" }
    ],
    services: [
      {
        id: "service-001",
        name: "Emergency Plumbing Repair",
        description: "24/7 emergency plumbing services for urgent issues",
        shortDescription: "Urgent repairs available 24/7",
        fullDescription: `Emergency plumbing repair service available 24 hours a day, 7 days a week. Whether you have a burst pipe, severe leak, or complete blockage, I'll respond quickly to minimize damage and restore your plumbing system.\n\nThis service includes diagnostic assessment, temporary fixes to prevent further damage, and permanent repairs using high-quality materials. All emergency work comes with a 1-year warranty.`,
        price: 150,
        originalPrice: 200,
        duration: "1-2 hours",
        durationMinutes: 90,
        location: "On-site",
        isPrimary: true,
        isPopular: true,
        icon: "Wrench",
        color: "bg-destructive/10",
        iconColor: "text-destructive",
        includes: [
          "Emergency diagnostic assessment",
          "Temporary damage prevention",
          "Permanent repair with warranty",
          "Clean-up after work completion"
        ],
        requirements: [
          "Access to affected plumbing area",
          "Clear path for equipment",
          "Someone present during service"
        ],
        nextAvailable: "Today 6:00 PM",
        bookingNotice: "Same day",
        cancellationPolicy: "2 hours notice"
      },
      {
        id: "service-002",
        name: "Bathroom Renovation",
        description: "Complete bathroom renovation and remodeling",
        shortDescription: "Full bathroom makeover service",
        fullDescription: `Complete bathroom renovation service from design consultation to final installation. I handle all aspects including plumbing, fixture installation, and coordination with other trades.\n\nService includes removal of old fixtures, updating plumbing lines, installing new fixtures, and ensuring all work meets current building codes. Project timeline typically 5-7 days depending on scope.`,
        price: 2500,
        duration: "5-7 days",
        durationMinutes: 2400,
        location: "On-site",
        isPrimary: true,
        icon: "Home",
        color: "bg-primary/10",
        iconColor: "text-primary",
        pricingTiers: [
          {
            name: "Basic Package",
            description: "Standard fixtures and basic renovation",
            price: 2500
          },
          {
            name: "Premium Package",
            description: "High-end fixtures and custom work",
            price: 4500
          },
          {
            name: "Luxury Package",
            description: "Designer fixtures and complete remodel",
            price: 7500
          }
        ],
        includes: [
          "Design consultation",
          "Permit handling",
          "Fixture removal and installation",
          "Plumbing line updates",
          "Final inspection"
        ],
        requirements: [
          "Access to bathroom for 5-7 days",
          "Alternative bathroom available",
          "Permits may be required"
        ],
        nextAvailable: "Next Monday",
        bookingNotice: "1 week",
        cancellationPolicy: "48 hours notice"
      },
      {
        id: "service-003",
        name: "Drain Cleaning",
        description: "Professional drain cleaning and unclogging",
        shortDescription: "Clear blocked drains and pipes",
        fullDescription: `Professional drain cleaning service using advanced equipment to clear blockages and restore proper drainage. Includes video inspection to identify issues and preventive maintenance recommendations.`,
        price: 120,
        duration: "1 hour",
        durationMinutes: 60,
        location: "On-site",
        isPrimary: false,
        icon: "Droplets",
        color: "bg-secondary/10",
        iconColor: "text-secondary",
        includes: [
          "Video drain inspection",
          "Professional drain cleaning",
          "Blockage removal",
          "Preventive maintenance tips"
        ],
        nextAvailable: "Tomorrow 10:00 AM",
        bookingNotice: "24 hours",
        cancellationPolicy: "4 hours notice"
      }
    ],
    servicePackages: [
      {
        name: "Home Maintenance Package",
        description: "Annual plumbing maintenance and inspection",
        price: 299,
        originalPrice: 450,
        services: [
          "Annual plumbing inspection",
          "Drain cleaning (2 drains)",
          "Water heater maintenance",
          "Emergency service discount"
        ]
      },
      {
        name: "New Home Package",
        description: "Complete plumbing setup for new homes",
        price: 1899,
        originalPrice: 2400,
        services: [
          "Full plumbing installation",
          "Fixture installation",
          "Water line connection",
          "Final inspection and testing"
        ]
      }
    ],
    weeklyAvailability: [
      { day: "Mon", date: "24", available: true, slots: 6 },
      { day: "Tue", date: "25", available: true, slots: 4 },
      { day: "Wed", date: "26", available: true, slots: 8 },
      { day: "Thu", date: "27", available: false, slots: 0 },
      { day: "Fri", date: "28", available: true, slots: 5 },
      { day: "Sat", date: "29", available: true, slots: 3 },
      { day: "Sun", date: "30", available: false, slots: 0 }
    ],
    reviews: [
      {
        id: 1,
        customerName: "Aditi Patel",
        customerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        date: "2024-07-20",
        serviceType: "Emergency Repair",
        comment: `Rohit was absolutely fantastic! Had a burst pipe at 11 PM and he was at my house within 45 minutes. Professional, efficient, and cleaned up everything perfectly. The repair has held up great and his pricing was very fair. Highly recommend!`,
        verified: true,
        photos: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=200&fit=crop"
        ],
        helpfulCount: 12,
        providerResponse: "Thank you Rohit! I'm glad I could help resolve the emergency quickly. Don't hesitate to call if you need anything else."
      },
      {
        id: 2,
        customerName: "Dharmendra Kumar",
        customerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        date: "2024-07-18",
        serviceType: "Bathroom Renovation",
        comment: `Outstanding work on our bathroom renovation! Rohit transformed our outdated bathroom into a modern, beautiful space. His attention to detail is impressive and he completed the project on time and within budget. The quality of workmanship is excellent.`,
        verified: true,
        photos: [
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=200&h=200&fit=crop"
        ],
        helpfulCount: 8
      },
      {
        id: 3,
        customerName: "Esha Sharma",
        customerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        rating: 4,
        date: "2024-07-15",
        serviceType: "Drain Cleaning",
        comment: `Great service! Rohit arrived on time and quickly diagnosed the issue with our kitchen drain. He explained everything clearly and the drain has been working perfectly since. Professional and reasonably priced.`,  
        verified: true,
        helpfulCount: 5
      },
      {
        id: 4,
        customerName: "Ritik Singh",
        customerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        date: "2024-07-12",
        serviceType: "Water Heater Installation",
        comment: `Rohit installed our new water heater and did an excellent job. He was punctual, professional, and cleaned up thoroughly after the work. The installation was done perfectly and he explained how to maintain the unit. Will definitely use his services again.`,  
        verified: true,
        helpfulCount: 7
      }
    ],
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=400&fit=crop",
        title: "Modern Bathroom Renovation",
        description: "Complete bathroom makeover with modern fixtures",
        category: "completed",
        date: "July 2024",
        location: "Mumbai, Maharashtra"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
        title: "Kitchen Plumbing Installation",
        description: "New kitchen sink and dishwasher installation",
        category: "completed",
        date: "June 2024",
        location: "Mumbai, Maharashtra"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        title: "Before: Old Bathroom",
        description: "Bathroom before renovation work",
        category: "before-after",
        date: "June 2024",
        location: "Mumbai, Maharashtra"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop",
        title: "Pipe Installation Work",
        description: "Professional pipe installation in progress",
        category: "process",
        date: "July 2024",
        location: "Mumbai, Maharashtra"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=400&fit=crop",
        title: "Water Heater Installation",
        description: "New energy-efficient water heater installation",
        category: "completed",
        date: "July 2024",
        location: "Mumbai, Maharashtra"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=400&h=400&fit=crop",
        title: "Emergency Pipe Repair",
        description: "Quick emergency repair of burst pipe",
        category: "completed",
        date: "July 2024",
        location: "Mumbai, Maharashtra" 
      }
    ]
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${provider.name} - ${provider.serviceCategory}`,
          text: `Check out ${provider.name}'s profile on UrbanEase`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Profile link copied to clipboard!');
    }
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    // Here you would typically save to user's favorites
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading provider profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        {/* Provider Hero Section */}
        <ProviderHero
          provider={provider}
          onShare={handleShare}
          onFavorite={handleFavorite}
          isFavorited={isFavorited}
        />

        {/* Booking section removed */}

        {/* Mobile booking bar removed */}
      </div>
    </div>
  );
};

export default ServiceProviderProfiles;
