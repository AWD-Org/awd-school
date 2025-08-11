// Analytics utilities for Plausible and GA4
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
    gtag?: (...args: any[]) => void;
  }
}

export interface AnalyticsEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  props?: Record<string, any>;
}

// Plausible Analytics (default)
export const trackPlausible = (event: string, props?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(event, { props });
  }
};

// Google Analytics 4 (commented out by default)
export const trackGA4 = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.props,
    });
  }
};

// Main tracking function - use Plausible by default
export const track = (event: string, data?: Record<string, any>) => {
  // Use Plausible by default
  trackPlausible(event, data);
  
  // Uncomment to also send to GA4
  // trackGA4({
  //   action: event,
  //   category: data?.category || 'general',
  //   label: data?.label,
  //   value: data?.value,
  //   props: data,
  // });
};

// Common events
export const trackPageView = (page: string) => {
  track('pageview', { page });
};

export const trackContact = (method: string) => {
  track('contact', { method });
};

export const trackDownload = (file: string) => {
  track('download', { file });
};

export const trackScroll = (percentage: number) => {
  track('scroll', { percentage });
};

export const trackSection = (section: string) => {
  track('section_view', { section });
};

// Initialize analytics
export const initAnalytics = () => {
  // Plausible is loaded automatically via script tag
  
  // GA4 initialization (commented out)
  /*
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);
    
    window.gtag = function() {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', 'GA_MEASUREMENT_ID');
  }
  */
};
