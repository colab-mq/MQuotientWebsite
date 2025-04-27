import React from 'react';
import { useLocation } from 'wouter';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  image?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "mQuotient - Hyperautomation and Digital Solutions",
  description = "mQuotient delivers enterprise-grade hyperautomation and digital transformation services with expertise in AI-powered document processing, RPA, Microsoft Power Platform, and custom solutions.",
  keywords = "hyperautomation, digital transformation, AI document processing, RPA solutions, Power Platform, workflow automation, automated data entry, intelligent document processing, business process automation",
  canonicalUrl,
  image = "https://www.mquotient.net/logo.png",
  type = "website",
}) => {
  const [location] = useLocation();
  const baseUrl = "https://www.mquotient.net";
  const currentUrl = canonicalUrl || `${baseUrl}${location}`;
  
  // Get page path for specific schema enhancements
  const pagePath = location.split('/')[1];
  
  // Dynamically create and insert the JSON-LD schema
  React.useEffect(() => {
    // Create JSON-LD for organization
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "mQuotient",
      "url": "https://www.mquotient.net",
      "logo": "https://www.mquotient.net/logo.png",
      "description": "mQuotient delivers enterprise-grade hyperautomation and digital transformation services.",
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
        "name": "mQuotient"
      },
      "areaServed": "Worldwide",
      "description": "Enterprise-grade hyperautomation and digital transformation services including AI-powered document processing, RPA, Microsoft Power Platform, and custom solutions.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    };
    
    // Create breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.mquotient.net/"
        }
      ]
    };
    
    // Add additional breadcrumb items based on current page
    if (pagePath && pagePath !== '') {
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": pagePath.charAt(0).toUpperCase() + pagePath.slice(1).replace(/-/g, ' '),
        "item": `https://www.mquotient.net/${pagePath}`
      });
    }

    // Add page-specific schema
    let pageSpecificSchema = null;
    
    // For services page
    if (pagePath === 'services') {
      pageSpecificSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "AI-Powered Data Entry Workforce",
            "description": "Intelligent document processing and automated data extraction",
            "url": "https://www.mquotient.net/services#ai-data-entry"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Robotic Process Automation",
            "description": "Automate repetitive business processes with RPA solutions",
            "url": "https://www.mquotient.net/services#rpa"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Microsoft Power Platform",
            "description": "Custom Power Platform solutions for business processes",
            "url": "https://www.mquotient.net/services#power-platform"
          }
        ]
      };
    }
    
    // For the careers page
    if (pagePath === 'careers') {
      pageSpecificSchema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Join Our Team at mQuotient",
        "description": "Explore career opportunities in automation, AI, and digital transformation",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "mQuotient"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "addressCountry": "India"
          }
        }
      };
    }

    // Add the schemas to the document head
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(organizationSchema);
    
    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(serviceSchema);
    
    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(breadcrumbSchema);
    
    document.head.appendChild(script1);
    document.head.appendChild(script2);
    document.head.appendChild(script3);
    
    // Add page-specific schema if available
    if (pageSpecificSchema) {
      const scriptPageSpecific = document.createElement('script');
      scriptPageSpecific.type = 'application/ld+json';
      scriptPageSpecific.text = JSON.stringify(pageSpecificSchema);
      document.head.appendChild(scriptPageSpecific);
    }
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
      
      if (pageSpecificSchema) {
        const scriptElement = document.querySelector('script[data-page-specific="true"]');
        if (scriptElement) document.head.removeChild(scriptElement);
      }
    };
  }, [pagePath]);

  // Update document title and meta tags
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Ensure all meta tags exist
    const ensureMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    
    const ensurePropertyTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Basic meta tags
    ensureMetaTag('description', description);
    ensureMetaTag('keywords', keywords);
    ensureMetaTag('author', 'mQuotient');
    ensureMetaTag('robots', 'index, follow');
    ensureMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', currentUrl);
    
    // Open Graph meta tags
    ensurePropertyTag('og:title', title);
    ensurePropertyTag('og:description', description);
    ensurePropertyTag('og:url', currentUrl);
    ensurePropertyTag('og:type', type);
    ensurePropertyTag('og:image', image);
    ensurePropertyTag('og:site_name', 'mQuotient');
    ensurePropertyTag('og:locale', 'en_US');
    
    // Twitter Card meta tags
    ensureMetaTag('twitter:card', 'summary_large_image');
    ensureMetaTag('twitter:title', title);
    ensureMetaTag('twitter:description', description);
    ensureMetaTag('twitter:image', image);
    
    // Mobile specific
    ensureMetaTag('theme-color', '#E4338E');
    ensureMetaTag('apple-mobile-web-app-capable', 'yes');
    ensureMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    
  }, [title, description, keywords, currentUrl, image, type]);

  return null; // This component doesn't render anything
};

export default SEOHead;