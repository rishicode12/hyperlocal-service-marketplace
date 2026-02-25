import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import { IMG_PLUMBING, IMG_ELECTRIC, IMG_KITCHEN, IMG_CLEAN, IMG_PAINT, IMG_SPA, IMG_NAIL } from '../../../assets/localImages';

const ServiceSelectionStep = ({ onNext, selectedService, setSelectedService }) => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [serviceQuantity, setServiceQuantity] = useState(1);

  const beautySalonImg = "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop";
  const gardenImg = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop";

  const services = [
    // Emergency Services
    {
      id: 1,
      name: "Plumbing Service",
      description: "Professional plumbing for repairs and emergencies",
      price: 89,
      duration: "1-2 hours",
      image: IMG_PLUMBING,
      options: [
        { id: 1, name: "Leak Repair", price: 0 },
        { id: 2, name: "Pipe Replacement", price: 50 }
      ]
    },
    {
      id: 2,
      name: "Electric Service",
      description: "Licensed electricians for installation and repair",
      price: 75,
      duration: "1-2 hours",
      image: IMG_ELECTRIC,
      options: [
        { id: 1, name: "Wiring Fix", price: 0 },
        { id: 2, name: "Appliance Install", price: 40 }
      ]
    },
    {
      id: 3,
      name: "Kitchen Service",
      description: "Appliance repair and kitchen maintenance",
      price: 65,
      duration: "1-2 hours",
      image: IMG_KITCHEN,
      options: [
        { id: 1, name: "Appliance Repair", price: 0 },
        { id: 2, name: "Maintenance", price: 30 }
      ]
    },
    // Beauty & Wellness
    {
      id: 4,
      name: "Beauty Salon",
      description: "Salon services for hair and beauty",
      price: 45,
      duration: "1-2 hours",
      image: beautySalonImg,
      options: [
        { id: 1, name: "Hair Styling", price: 0 },
        { id: 2, name: "Makeup", price: 60 }
      ]
    },
    {
      id: 5,
      name: "Spa & Massage",
      description: "Relaxing spa and massage at home",
      price: 80,
      duration: "1-2 hours",
      image: IMG_SPA,
      options: [
        { id: 1, name: "Head Massage", price: 0 },
        { id: 2, name: "Full Body", price: 100 }
      ]
    },
    {
      id: 6,
      name: "Nails Studio",
      description: "Manicure and pedicure services",
      price: 35,
      duration: "1 hour",
      image: IMG_NAIL,
      options: [
        { id: 1, name: "Manicure", price: 0 },
        { id: 2, name: "Pedicure", price: 0 }
      ]
    },
    // Home Maintenance
    {
      id: 7,
      name: "Clean Services",
      description: "Professional house cleaning",
      price: 120,
      duration: "2-4 hours",
      image: IMG_CLEAN,
      options: [
        { id: 1, name: "Standard Clean", price: 0 },
        { id: 2, name: "Deep Clean", price: 40 }
      ]
    },
    {
      id: 8,
      name: "Home Painting Services",
      description: "Interior and exterior painting",
      price: 85,
      duration: "4-6 hours",
      image: IMG_PAINT,
      options: [
        { id: 1, name: "Single Room", price: 0 },
        { id: 2, name: "Full House", price: 200 }
      ]
    },
    {
      id: 9,
      name: "Garden Care",
      description: "Gardening, trimming and lawn care",
      price: 95,
      duration: "2-3 hours",
      image: gardenImg,
      options: [
        { id: 1, name: "Basic Care", price: 0 },
        { id: 2, name: "Landscaping", price: 150 }
      ]
    }
  ];

  const addOns = [
    { id: 1, name: "Inside Oven Cleaning", price: 25, description: "Deep clean inside your oven" },
    { id: 2, name: "Inside Refrigerator", price: 20, description: "Clean inside of refrigerator" },
    { id: 3, name: "Window Cleaning (Interior)", price: 30, description: "Clean all interior windows" },
    { id: 4, name: "Garage Cleaning", price: 40, description: "Clean and organize garage space" },
    { id: 5, name: "Basement Cleaning", price: 35, description: "Clean basement area" }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService({
      ...service,
      selectedOption: service.options[0],
      quantity: serviceQuantity,
      addOns: selectedAddOns
    });
  };

  const handleAddOnToggle = (addOn) => {
    setSelectedAddOns(prev => {
      const exists = prev.find(item => item.id === addOn.id);
      if (exists) {
        return prev.filter(item => item.id !== addOn.id);
      } else {
        return [...prev, addOn];
      }
    });
  };

  const handleOptionChange = (option) => {
    if (selectedService) {
      setSelectedService({
        ...selectedService,
        selectedOption: option
      });
    }
  };

  const calculateTotal = () => {
    if (!selectedService) return 0;
    const basePrice = selectedService.price * serviceQuantity;
    const optionPrice = selectedService.selectedOption?.price || 0;
    const addOnPrice = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
    return basePrice + optionPrice + addOnPrice;
  };

  const handleNext = () => {
    if (selectedService) {
      onNext({
        ...selectedService,
        quantity: serviceQuantity,
        addOns: selectedAddOns,
        total: calculateTotal()
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Service Selection */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Choose Your Service</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                selectedService?.id === service.id
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }`}
              onClick={() => handleServiceSelect(service)}
            >
              {service.popular && (
                <div className="absolute -top-2 left-4 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                  Popular
                </div>
              )}
              
              <div className="aspect-video mb-3 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-primary">₹{service.price}</span>
                <span className="text-sm text-muted-foreground flex items-center">
                  <Icon name="Clock" size={14} className="mr-1" />
                  {service.duration}
                </span>
              </div>
              
              {selectedService?.id === service.id && (
                <div className="mt-3 pt-3 border-t border-border">
                  <Icon name="Check" size={16} className="text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Service Options */}
      {selectedService && (
        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="font-semibold text-foreground mb-3">Service Options</h3>
          <div className="space-y-2">
            {selectedService.options.map((option) => (
              <label
                key={option.id}
                className="flex items-center justify-between p-3 border border-border rounded-lg cursor-pointer hover:bg-background transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="serviceOption"
                    checked={selectedService.selectedOption?.id === option.id}
                    onChange={() => handleOptionChange(option)}
                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                  />
                  <span className="font-medium text-foreground">{option.name}</span>
                </div>
                <span className="text-primary font-semibold">
                  {option.price > 0 ? `+₹${option.price}` : 'Included'}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      {selectedService && (
        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setServiceQuantity(Math.max(1, serviceQuantity - 1))}
              disabled={serviceQuantity <= 1}
              className="w-10 h-10 p-0"
            >
              <Icon name="Minus" size={16} />
            </Button>
            <span className="text-lg font-semibold text-foreground min-w-[2rem] text-center">
              {serviceQuantity}
            </span>
            <Button
              variant="outline"
              onClick={() => setServiceQuantity(serviceQuantity + 1)}
              className="w-10 h-10 p-0"
            >
              <Icon name="Plus" size={16} />
            </Button>
          </div>
        </div>
      )}

      {/* Add-ons */}
      {selectedService && (
        <div>
          <h3 className="font-semibold text-foreground mb-4">Add-on Services</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {addOns.map((addOn) => (
              <label
                key={addOn.id}
                className="flex items-start space-x-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors duration-200"
              >
                <input
                  type="checkbox"
                  checked={selectedAddOns.some(item => item.id === addOn.id)}
                  onChange={() => handleAddOnToggle(addOn)}
                  className="w-4 h-4 text-primary border-border focus:ring-primary mt-0.5"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground">{addOn.name}</span>
                    <span className="text-primary font-semibold">+₹{addOn.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{addOn.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Total and Continue */}
      {selectedService && (
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-foreground">Total</span>
            <span className="text-2xl font-bold text-primary">₹{calculateTotal()}</span>
          </div>
          <Button
            onClick={handleNext}
            className="w-full"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Continue to Schedule
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceSelectionStep;
