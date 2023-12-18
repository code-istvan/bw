import React from "react"

export const CustomHead = ({
  canonical,
  description,
  title,
  image,
  schemaData,
  lang = "hu", // Alapértelmezett nyelv
}) => {
  return (
    <>
      <html lang={lang} />
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", ...schemaData })}
        </script>
      )}
    </>
  )
}
