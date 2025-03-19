import { Helmet } from 'react-helmet-async';

/**
 * Reusable SEO component for consistent SEO implementation across pages
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Page keywords
 * @param {string} props.path - Page path (without domain)
 * @param {string} props.imageUrl - OG image URL (optional)
 * @param {string} props.imageAlt - OG image alt text (optional)
 * @param {Object} props.schema - JSON-LD schema object (optional)
 */
const SEO = ({ 
  title = "Gatwick Tuning | Professional ECU Remapping & Performance Tuning Surrey",
  description = "Expert ECU remapping and vehicle performance tuning in Surrey. Optimise your vehicle's power, torque, and fuel efficiency with our professional tuning services.",
  keywords = "ECU remapping, car tuning Surrey, vehicle performance tuning, engine remapping Gatwick",
  path = "",
  imageUrl = "/og-image.jpg",
  imageAlt = "Gatwick Tuning - Professional ECU Remapping Services",
  schema = null
}) => {
  const domain = "https://www.gatwicktuning.co.uk";
  const url = `${domain}${path}`;
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${domain}${imageUrl}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 