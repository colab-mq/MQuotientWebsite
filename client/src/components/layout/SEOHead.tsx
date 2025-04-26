import React from 'react';
import { useLocation } from 'wouter';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "mquotient - Hyperautomation and Digital Solutions",
  description = "mquotient delivers enterprise-grade hyperautomation and digital transformation services with expertise in AI-powered document processing, RPA, Microsoft Power Platform, and custom solutions.",
  keywords = "hyperautomation, digital transformation, AI document processing, RPA solutions, Power Platform, workflow automation",
  canonicalUrl,
}) => {
  const [location] = useLocation();
  const baseUrl = "https://www.mquotient.net";
  const currentUrl = canonicalUrl || `${baseUrl}${location}`;
  
  // Dynamically create and insert the JSON-LD schema
  React.useEffect(() => {
    // Create JSON-LD for organization
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "mquotient",
      "url": "https://www.mquotient.net",
      "logo": "https://www.mquotient.net/logo.png",
      "description": "mquotient delivers enterprise-grade hyperautomation and digital transformation services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C-61/3, Okhla Industrial Area, Phase II",
        "addressLocality": "New Delhi",
        "postalCode": "110020",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "hi@mquotient.net"
      },
      "sameAs": [
        "https://www.linkedin.com/company/mquotient/"
      ]
    };

    // Create service schema for main services
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Digital Transformation Services",
      "provider": {
        "@type": "Organization",
        "name": "mquotient"
      },
      "areaServed": "Worldwide",
      "description": "Enterprise-grade hyperautomation and digital transformation services.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    };

    // Add the schemas to the document head
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(organizationSchema);
    
    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(serviceSchema);
    
    document.head.appendChild(script1);
    document.head.appendChild(script2);
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  // Update document title and meta tags
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', currentUrl);
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);
    
    // Update Twitter Card meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    
  }, [title, description, keywords, currentUrl]);

  return null; // This component doesn't render anything
};

export default SEOHead;