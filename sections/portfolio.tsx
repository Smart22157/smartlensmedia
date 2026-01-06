import { useState } from "react";

interface ImageItem {
  src: string;
  alt: string;
  category: string;
  subcategory?: string;
}

interface StreamItem {
  title: string;
  url: string;
  thumbnail: string;
}

// Your images
const images: ImageItem[] = [
  // Wedding examples

  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767535807/portrait12_uefhtr.jpg", alt: "Portrait 1", category: "Portraits", subcategory: "Studio" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait3_rd0ess.jpg", alt: "Portrait 3", category: "Portraits", subcategory: "Outdoor" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait4_lyckwo.jpg", alt: "Portrait 4", category: "Portraits", subcategory: "Studio" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait5_gocest.jpg", alt: "Portrait 5", category: "Portraits", subcategory: "Outdoor" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait8_yofvhw.jpg", alt: "Portrait 8", category: "Portraits", subcategory: "Studio" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait9_rgpyax.jpg", alt: "Portrait 9", category: "Portraits", subcategory: "Outdoor" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait10_ie8m23.jpg", alt: "Portrait 10", category: "Portraits", subcategory: "Studio" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait11_iwkqq7.jpg", alt: "Portrait 11", category: "Portraits", subcategory: "Outdoor" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait12_uefhtr.jpg", alt: "Portrait 12", category: "Portraits", subcategory: "Studio" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait13_b8kpa5.jpg", alt: "Portrait 13", category: "Portraits", subcategory: "Outdoor" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait14_cwbwer.jpg", alt: "Portrait 14", category: "Portraits", subcategory: "Studio" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait15_dhlo0k.jpg", alt: "Portrait 15", category: "Portraits", subcategory: "Outdoor" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait16_ueqk2r.jpg", alt: "Portrait 16", category: "Portraits", subcategory: "Studio" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/portrait17_vyqq72.jpg", alt: "Portrait 17", category: "Portraits", subcategory: "Outdoor" },

  // Drone
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/d1_xykpot.jpg", alt: "Drone 1", category: "Drone", subcategory: "Aerial" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/d2_xql3kh.jpg", alt: "Drone 2", category: "Drone", subcategory: "Real Estate" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/d3_b1gnxf.jpg", alt: "Drone 3", category: "Drone", subcategory: "Aerial" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/d4_xwy2wi.jpg", alt: "Drone 4", category: "Drone", subcategory: "Real Estate" },

  // Graduations
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/grad1_dj8vue.jpg", alt: "Grad 1", category: "Graduations", subcategory: "University" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/grad2_rdrdcx.jpg", alt: "Grad 2", category: "Graduations", subcategory: "High School" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/grad6_vceum4.jpg", alt: "Grad 6", category: "Graduations", subcategory: "University" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/grad7_kdml2y.jpg", alt: "Grad 7", category: "Graduations", subcategory: "High School" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/grad8_e7mq5a.jpg", alt: "Grad 8", category: "Graduations", subcategory: "University" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/grad9_ccvysb.jpg", alt: "Grad 9", category: "Graduations", subcategory: "High School" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/grad4_gc3km6.jpg", alt: "Grad 4", category: "Graduations", subcategory: "University" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/grad15_crixds.jpg", alt: "Grad 15", category: "Graduations", subcategory: "High School" },

  // Ordinations
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od1_rzozef.jpg", alt: "OD 1", category: "Ordinations", subcategory: "Church" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od2_navbvd.jpg", alt: "OD 2", category: "Ordinations", subcategory: "Community" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od3_fmnvvh.jpg", alt: "OD 3", category: "Ordinations", subcategory: "Church" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od4_vdhhk5.jpg", alt: "OD 4", category: "Ordinations", subcategory: "Community" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od5_suzwm0.jpg", alt: "OD 5", category: "Ordinations", subcategory: "Church" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od6_rby7s1.jpg", alt: "OD 6", category: "Ordinations", subcategory: "Community" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od7_tuurbe.jpg", alt: "OD 7", category: "Ordinations", subcategory: "Church" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od8_q9pi8p.jpg", alt: "OD 8", category: "Ordinations", subcategory: "Community" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od9_jmslrd.jpg", alt: "OD 9", category: "Ordinations", subcategory: "Church" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od10_ejqdrh.jpg", alt: "OD 10", category: "Ordinations", subcategory: "Community" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/od11_lleqpq.jpg", alt: "OD 11", category: "Ordinations", subcategory: "Church" },

  // Corporate
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate1_bn3u6d.jpg", alt: "Corporate 1", category: "Corporate", subcategory: "Events" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate2_lunshf.jpg", alt: "Corporate 2", category: "Corporate", subcategory: "Headshots" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate3_cjjw4z.jpg", alt: "Corporate 3", category: "Corporate", subcategory: "Events" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate4_cupp2z.jpg", alt: "Corporate 4", category: "Corporate", subcategory: "Headshots" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate6_l2xjcw.jpg", alt: "Corporate 6", category: "Corporate", subcategory: "Events" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate7_nqh3s1.jpg", alt: "Corporate 7", category: "Corporate", subcategory: "Headshots" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate8_ufwsv7.jpg", alt: "Corporate 8", category: "Corporate", subcategory: "Events" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate9_u76mlf.jpg", alt: "Corporate 9", category: "Corporate", subcategory: "Headshots" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate10_fcu5q7.jpg", alt: "Corporate 10", category: "Corporate", subcategory: "Events" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate11_wsuunl.jpg", alt: "Corporate 11", category: "Corporate", subcategory: "Headshots" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate12_u9di3r.jpg", alt: "Corporate 12", category: "Corporate", subcategory: "Events" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate13_fzhuri.jpg", alt: "Corporate 13", category: "Corporate", subcategory: "Headshots" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/corporate14_shqkkh.jpg", alt: "Corporate 14", category: "Corporate", subcategory: "Events" },

  // Weddings

  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding2_difiqe.jpg", alt: "Wedding 2", category: "Wedding", subcategory: "Classic" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding3_vs0gbh.jpg", alt: "Wedding 3", category: "Wedding", subcategory: "AI Wedding" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding4_oefxmz.jpg", alt: "Wedding 4", category: "Wedding", subcategory: "AI Wedding" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding5_l61vq6.jpg", alt: "Wedding 5", category: "Wedding", subcategory: "Classic" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding6_s4onah.jpg", alt: "Wedding 6", category: "Wedding", subcategory: "Classic" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding7_geatny.jpg", alt: "Wedding 7", category: "Wedding", subcategory: "AI Wedding" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding8_udbljx.jpg", alt: "Wedding 8", category: "Wedding", subcategory: "AI Wedding" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding9_e3ubr2.jpg", alt: "Wedding 9", category: "Wedding", subcategory: "Classic" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding10_bdvns.jpg", alt: "Wedding 10", category: "Wedding", subcategory: "AI Wedding" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding11_afordj.jpg", alt: "Wedding 11", category: "Wedding", subcategory: "Classic" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding12_mv2cya.jpg", alt: "Wedding 12", category: "Wedding", subcategory: "AI Wedding" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding13_ategdf.jpg", alt: "Wedding 13", category: "Wedding", subcategory: "Classic" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding14_huzac6.jpg", alt: "Wedding 14", category: "Wedding", subcategory: "AI Wedding" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding15_qj9od9.jpg", alt: "Wedding 15", category: "Wedding", subcategory: "Classic" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/wedding18_x3vkws.jpg", alt: "Wedding 18", category: "Wedding", subcategory: "AI Wedding" },

  // Landscape
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/p1_rvk1tm.jpg", alt: "Landscape 1", category: "Landscape", subcategory: "Nature" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/p2_xyaebq.jpg", alt: "Landscape 2", category: "Landscape", subcategory: "Urban" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/p3_trpzyl.jpg", alt: "Landscape 3", category: "Landscape", subcategory: "Nature" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/p4_keiaca.jpg", alt: "Landscape 4", category: "Landscape", subcategory: "Urban" },
  { src: "https://res.cloudinary.com/dqt3j0uif/image/upload/f_auto,q_auto/p5_pgcor3.jpg", alt: "Landscape 5", category: "Landscape", subcategory: "Nature" },
];

// Streams
const streams: StreamItem[] = [
  
  {
    title: "CHRM COLLEGE - October 2025",
    url: "https://www.youtube.com/embed/TgrNub3kYaI",
    thumbnail: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536023/thumb1_ejylrs.jpg",
  },
  {
    title: "JKUAT GRRADUATION - JUNE 2025",
    url: "https://www.youtube.com/embed/tS2S0FmqVUc",
    thumbnail: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536024/thumb2_qs24jk.jpg",
  },
  {
    title: "Burial livestream- October 2025",
    url: "https://www.youtube.com/embed/Ojd-UebXDNs",
    thumbnail: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536024/thumb3_jnn9bd.jpg",
  },
    {
    title: "HTCA DIOCESE livestream- October 2025",
    url: "https://www.youtube.com/embed/m_qYgCRmLGQ",
    thumbnail: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536025/thumb4_pgyrxg.jpg",
  },
    {
    title: "Burial livestream- May 2025",
    url: "https://www.youtube.com/embed/AMrUEzEY5MQ",
    thumbnail: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536026/thumb5_z55gdd.jpg",
  },
   {
    title: "Burial livestream- May 2025",
    url: "https://www.youtube.com/embed/n6vQyGRREnM",
    thumbnail: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536028/thumb6_ey4udo.jpg",
  },
     {
    title: "Ordination livestream- May 2025",
    url: "https://www.youtube.com/embed/e-hj0ffEg0k",
    thumbnail: "https://res.cloudinary.com/dqt3j0uif/image/upload/v1767536029/thumb7_azdljr.jpg",
  },
  
];


// Main categories
const categories = ["Corporate", "Wedding", "Portraits", "Drone", "Livestreaming","Ordinations","Landscape","Graduations"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Filter images by category and subcategory
  const filteredImages = images.filter(
    img => (activeCategory ? img.category === activeCategory : true) &&
           (activeSubcategory ? img.subcategory === activeSubcategory : true)
  );

  const filteredStreams = activeCategory === "Livestreaming" ? streams : [];

  // Subcategories dynamically
  const subcategories = Array.from(
    new Set(
      images
        .filter(img => img.category === activeCategory && img.subcategory)
        .map(img => img.subcategory!)
    )
  );

  const nextItem = () => {
    if (selectedIndex !== null) {
      const length = activeCategory === "Livestreaming" ? filteredStreams.length : filteredImages.length;
      setSelectedIndex((selectedIndex + 1) % length);
    }
  };

  const prevItem = () => {
    if (selectedIndex !== null) {
      const length = activeCategory === "Livestreaming" ? filteredStreams.length : filteredImages.length;
      setSelectedIndex((selectedIndex - 1 + length) % length);
    }
  };

  const selectedImage = selectedIndex !== null && activeCategory !== "Livestreaming"
    ? filteredImages[selectedIndex]
    : null;

  const selectedStream = selectedIndex !== null && activeCategory === "Livestreaming"
    ? filteredStreams[selectedIndex]
    : null;

  return (
    <section className="min-h-screen w-full bg-gray-900 text-white px-4 sm:px-8 py-16">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>

   {/* Category Cards */}
{!activeCategory && (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
    {categories.map(cat => {
      // Use first image from images OR first thumbnail from streams
const preview = cat === "Livestreaming"
  ? streams[0] // StreamItem
  : images.find(img => img.category === cat); // ImageItem

const previewSrc = cat === "Livestreaming"
  ? (preview as StreamItem).thumbnail
  : (preview as ImageItem)?.src;

      return (
        <div
          key={cat}
          className="cursor-pointer group rounded overflow-hidden shadow-lg relative"
          onClick={() => { setActiveCategory(cat); setActiveSubcategory(null); setSelectedIndex(null); }}
        >
          <img
  src={previewSrc}
  alt={cat}
  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
/>

          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-white font-bold text-lg">{cat}</h3>
          </div>
        </div>
      );
    })}
  </div>
)}

{/* Back Button */}
{activeCategory && (
  <div className="mb-6">
    {activeSubcategory ? (
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded"
        onClick={() => setActiveSubcategory(null)}
      >
        ← Back to {activeCategory}
      </button>
    ) : (
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded"
        onClick={() => setActiveCategory(null)}
      >
        ← Back to Categories
      </button>
    )}
  </div>
)}

        {/* Subcategory Cards */}
        {activeCategory && subcategories.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {subcategories.map(sub => {
              const preview = images.find(img => img.subcategory === sub);
              return (
                <div
                  key={sub}
                  className="cursor-pointer group rounded overflow-hidden shadow-md relative"
                  onClick={() => { setActiveSubcategory(sub); setSelectedIndex(null); }}
                >
                  <img
                    src={preview?.src}
                    alt={sub}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <h4 className="text-white font-medium">{sub}</h4>
                  </div>
                </div>
              );
            })}
           
          </div>
        )}

        {/* Grid */}
        {activeCategory && activeCategory !== "Livestreaming" ? (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mx-auto w-full px-2 sm:px-4 md:px-0">
            {filteredImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="w-full mb-4 rounded shadow-md cursor-pointer break-inside-avoid hover:scale-105 transition-transform duration-300 object-cover"
                onClick={() => setSelectedIndex(idx)}
              />
            ))}
          </div>
        ) : activeCategory === "Livestreaming" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto w-full px-2 sm:px-4 md:px-0">
            {filteredStreams.map((stream, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedIndex(idx)}
              >
                <img src={stream.thumbnail} alt={stream.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{stream.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* Lightbox Modal */}
      {(selectedImage || selectedStream) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative w-full max-w-4xl">
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] rounded shadow-lg"
              />
            )}
            {selectedStream && (
              <iframe
                src={selectedStream.url}
                title={selectedStream.title}
                className="w-full h-[60vh] rounded shadow-lg"
                allowFullScreen
              ></iframe>
            )}

            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-r"
              onClick={(e) => { e.stopPropagation(); prevItem(); }}
            >
              Prev
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-l"
              onClick={(e) => { e.stopPropagation(); nextItem(); }}
            >
              Next
            </button>
            
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
