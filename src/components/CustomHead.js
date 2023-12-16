import React, { useEffect } from "react"

export const CustomHead = ({
  canonical,
  description,
  title,
  image,
  schemaData,
}) => {
  useEffect(() => {
    // Beállítja a dokumentum címét
    document.title = title
  }, [title]) // A cím frissítése minden alkalommal, amikor a title prop megváltozik

  return (
    <>
      <html lang="hu" />
      {/* A HTML title tag itt redundáns lehet, de meghagyható a konszisztencia érdekében */}
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      {schemaData && (
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      )}
    </>
  )
}
