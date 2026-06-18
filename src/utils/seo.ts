// SEO utility functions for managing meta tags

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function updateSEO(config: SEOConfig) {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  const updateMeta = (name: string, content: string, isProperty = false) => {
    const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(isProperty ? 'property' : 'name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  updateMeta('description', config.description);
  if (config.keywords) updateMeta('keywords', config.keywords);
  
  // Open Graph
  updateMeta('og:title', config.ogTitle || config.title, true);
  updateMeta('og:description', config.ogDescription || config.description, true);
  if (config.ogImage) updateMeta('og:image', config.ogImage, true);
  
  // Update canonical URL
  if (config.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonicalUrl);
  }
}

export function addStructuredData(data: Record<string, any>) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
