import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const RSVPForm = ({ guestData, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    guestName: guestData?.guestName || '',
    email: '',
    phone: '',
    attendingCeremony: false,
    attendingReception: false,
    mealPreference: '',
    dietaryRestrictions: '',
    plusOneAttending: false,
    plusOneName: '',
    plusOneMeal: '',
    specialRequests: '',
    numberOfGuests: 1
  });

  const [errors, setErrors] = useState({});

  const mealOptions = [
    { value: '', label: 'Select meal preference' },
    { value: 'chicken', label: 'Herb-Roasted Chicken with Seasonal Vegetables' },
    { value: 'beef', label: 'Prime Beef Tenderloin with Garlic Mashed Potatoes' },
    { value: 'fish', label: 'Pan-Seared Salmon with Lemon Butter Sauce' },
    { value: 'vegetarian', label: 'Vegetarian Pasta Primavera' },
    { value: 'vegan', label: 'Vegan Mediterranean Bowl' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.guestName?.trim()) {
      newErrors.guestName = 'Guest name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.attendingCeremony && !formData?.attendingReception) {
      newErrors.attendance = 'Please select at least one event to attend';
    }

    if ((formData?.attendingCeremony || formData?.attendingReception) && !formData?.mealPreference) {
      newErrors.mealPreference = 'Please select your meal preference';
    }

    if (formData?.plusOneAttending && !formData?.plusOneName?.trim()) {
      newErrors.plusOneName = 'Please enter your plus one\'s name';
    }

    if (formData?.plusOneAttending && !formData?.plusOneMeal) {
      newErrors.plusOneMeal = 'Please select meal preference for your plus one';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      const totalGuests = formData?.plusOneAttending ? 2 : 1;
      onSubmit({ ...formData, numberOfGuests: totalGuests });
    }
  };

  const showPlusOneFields = guestData?.invitationType === 'couple' || guestData?.invitationType === 'family';

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      <div className="bg-card rounded-xl p-4 md:p-6 lg:p-8 shadow-romantic-md border border-border">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="User" size={20} color="var(--color-primary)" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
            Guest Information
          </h2>
        </div>

        <div className="space-y-4 md:space-y-5">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.guestName}
            onChange={(e) => handleInputChange('guestName', e?.target?.value)}
            error={errors?.guestName}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              error={errors?.phone}
              required
            />
          </div>
        </div>
      </div>
      <div className="bg-card rounded-xl p-4 md:p-6 lg:p-8 shadow-romantic-md border border-border">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="Calendar" size={20} color="var(--color-primary)" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
            Attendance Confirmation
          </h2>
        </div>

        <div className="space-y-4">
          <Checkbox
            label="I will attend the Wedding Ceremony"
            description="Saturday, June 14, 2026 at 3:00 PM"
            checked={formData?.attendingCeremony}
            onChange={(e) => handleInputChange('attendingCeremony', e?.target?.checked)}
          />

          <Checkbox
            label="I will attend the Reception"
            description="Saturday, June 14, 2026 at 6:00 PM"
            checked={formData?.attendingReception}
            onChange={(e) => handleInputChange('attendingReception', e?.target?.checked)}
          />

          {errors?.attendance && (
            <p className="text-sm text-error flex items-center gap-2 mt-2">
              <Icon name="AlertCircle" size={16} />
              {errors?.attendance}
            </p>
          )}
        </div>
      </div>
      {(formData?.attendingCeremony || formData?.attendingReception) && (
        <div className="bg-card rounded-xl p-4 md:p-6 lg:p-8 shadow-romantic-md border border-border">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="UtensilsCrossed" size={20} color="var(--color-primary)" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
              Meal Preferences
            </h2>
          </div>

          <div className="space-y-4 md:space-y-5">
            <Select
              label="Your Meal Preference"
              options={mealOptions}
              value={formData?.mealPreference}
              onChange={(value) => handleInputChange('mealPreference', value)}
              error={errors?.mealPreference}
              required
            />

            <Input
              label="Dietary Restrictions or Allergies"
              type="text"
              placeholder="e.g., Gluten-free, Nut allergy, Lactose intolerant"
              value={formData?.dietaryRestrictions}
              onChange={(e) => handleInputChange('dietaryRestrictions', e?.target?.value)}
              description="Please let us know about any dietary restrictions or food allergies"
            />
          </div>
        </div>
      )}
      {showPlusOneFields && (
        <div className="bg-card rounded-xl p-4 md:p-6 lg:p-8 shadow-romantic-md border border-border">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Users" size={20} color="var(--color-primary)" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
              Plus One Information
            </h2>
          </div>

          <div className="space-y-4 md:space-y-5">
            <Checkbox
              label="I will be bringing a plus one"
              description="Your invitation includes a guest"
              checked={formData?.plusOneAttending}
              onChange={(e) => handleInputChange('plusOneAttending', e?.target?.checked)}
            />

            {formData?.plusOneAttending && (
              <>
                <Input
                  label="Plus One's Full Name"
                  type="text"
                  placeholder="Enter guest's full name"
                  value={formData?.plusOneName}
                  onChange={(e) => handleInputChange('plusOneName', e?.target?.value)}
                  error={errors?.plusOneName}
                  required
                />

                <Select
                  label="Plus One's Meal Preference"
                  options={mealOptions}
                  value={formData?.plusOneMeal}
                  onChange={(value) => handleInputChange('plusOneMeal', value)}
                  error={errors?.plusOneMeal}
                  required
                />
              </>
            )}
          </div>
        </div>
      )}
      <div className="bg-card rounded-xl p-4 md:p-6 lg:p-8 shadow-romantic-md border border-border">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="MessageSquare" size={20} color="var(--color-primary)" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
            Special Requests
          </h2>
        </div>

        <Input
          label="Additional Comments or Special Requests"
          type="text"
          placeholder="Any special accommodations or messages for the couple"
          value={formData?.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e?.target?.value)}
          description="Optional: Let us know if you have any special requirements"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
        >
          Submit RSVP
        </Button>
      </div>
    </form>
  );
};

export default RSVPForm;