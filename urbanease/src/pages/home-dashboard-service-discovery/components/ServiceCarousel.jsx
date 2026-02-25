import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCarousel = ({ title, services, onServiceSelect }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer h-full flex flex-col"
            onClick={() => onServiceSelect(service)}
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              {service.isEmergency && (
                <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-medium">
                  24/7
                </div>
              )}
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-foreground mb-1 truncate">{service.name}</h3>
              <p className="text-sm text-muted-foreground mb-2 truncate">{service.category}</p>
              
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-warning fill-current" />
                  <span className="text-sm font-medium text-foreground">{service.rating}</span>
                  <span className="text-sm text-muted-foreground">({service.reviewCount})</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={14} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{service.distance}</span>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div>
                  <span className="text-lg font-semibold text-foreground">₹{service.startingPrice}</span>
                  <span className="text-sm text-muted-foreground ml-1">starting</span>
                </div>
                <Button variant="default" className="text-sm px-4 py-2">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
