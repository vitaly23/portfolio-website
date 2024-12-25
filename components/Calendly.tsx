'use client'

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const CalendlyPopupButton = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Button variant="gradient" size="lg" className="shadow-lg" asChild>
      <PopupButton
        url="https://calendly.com/d/cqpx-rwy-cck?hide_gdpr_banner=1"
        rootElement={document.body}
        text={
          <span className="flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-white" />
            Schedule a meeting
          </span>
        }
      />
    </Button>
  );
};

export default CalendlyPopupButton;

