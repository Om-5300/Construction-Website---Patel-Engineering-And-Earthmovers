export function addStructuredData(id: string, data: Record<string, any>) {
  // Remove existing script with this ID if it exists
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function addOrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Patel Engineering & Earthmovers",
    "image": "https://res.cloudinary.com/dl976v88p/image/upload/w_900,f_auto,q_auto/patel_engineering__earthmovers_logo.png",
    "description": "Professional earthmoving equipment rental and heavy machinery services in Morbi, Gujarat. Offering Hanomag dozers, excavators, vibratory rollers and other heavy equipment for rent since 1998.",
    "url": "https://patelengineeringandearthmovers.in",
    "telephone": "+91-98257-35300",
    "email": "hemantbarasara@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Morbi",
      "addressLocality": "Morbi",
      "addressRegion": "Gujarat",
      "postalCode": "363642",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.7704",
      "longitude": "70.8745"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Morbi"
      },
      {
        "@type": "State",
        "name": "Gujarat"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "priceRange": "₹",
    "sameAs": [
      "https://www.facebook.com/people/Hemant-Barasara/pfbid02vhar5tPY9MPX73KtEFfHYaMWkWhn9qtF47kTsrsyoaNFPcsuntwn4gGrhQE9H5SNl/?mibextid=ZbWKwL",
      "https://www.instagram.com/patelengineeringandearthmovers?igsh=MWZ2MWg5bGJieTZvMw==",
      "https://www.youtube.com/@hemantbarasara924"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  addStructuredData('org-schema', organizationSchema);
}

export function addBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  addStructuredData('breadcrumb-schema', breadcrumbSchema);
}

export function addServiceSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Patel Engineering & Earthmovers",
    "hasOfferingDetails": [
      {
        "@type": "Service",
        "name": "Hanomag K7 Dozer Rental",
        "description": "High-performance Hanomag K7 dozer rental for earthmoving and site preparation projects"
      },
      {
        "@type": "Service",
        "name": "Heavy Excavator Rental",
        "description": "Professional heavy-duty excavator rental services for construction projects"
      },
      {
        "@type": "Service",
        "name": "Vibratory Roller Rental",
        "description": "Vibratory roller equipment rental for road construction and compaction"
      },
      {
        "@type": "Service",
        "name": "Earthmoving Solutions",
        "description": "Complete earthmoving and site preparation services with skilled operators"
      }
    ]
  };

  addStructuredData('service-schema', serviceSchema);
}
