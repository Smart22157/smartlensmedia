import { useState } from "react";

interface ImageItem {
  src: string;
  alt: string;
  category: string;
}

interface StreamItem {
  title: string;
  url: string; // YouTube embed URL
  thumbnail: string;
}

const images: ImageItem[] = [
{ src: "/images/portfolio/corporate1.jpg", alt: "Corporate 1", category: "Corporate" },
  { src: "/images/portfolio/corporate2.jpg", alt: "Corporate 2", category: "Corporate" },
  { src: "/images/portfolio/corporate3.jpg", alt: "Corporate 3", category: "Corporate" },
  { src: "/images/portfolio/corporate4.jpg", alt: "Corporate 4", category: "Corporate" },
  { src: "/images/portfolio/corporate5.jpg", alt: "Corporate 5", category: "Corporate" },
  { src: "/images/portfolio/corporate6.jpg", alt: "Corporate 6", category: "Corporate" },
  { src: "/images/portfolio/corporate7.jpg", alt: "Corporate 7", category: "Corporate" },
  { src: "/images/portfolio/corporate8.jpg", alt: "Corporate 8", category: "Corporate" },
  { src: "/images/portfolio/corporate9.jpg", alt: "Corporate 9", category: "Corporate" },
  { src: "/images/portfolio/corporate10.jpg", alt: "Corporate 10", category: "Corporate" },
  { src: "/images/portfolio/corporate11.jpg", alt: "Corporate 11", category: "Corporate" },
  { src: "/images/portfolio/corporate12.jpg", alt: "Corporate 12", category: "Corporate" },
  { src: "/images/portfolio/corporate13.jpg", alt: "Corporate 13", category: "Corporate" },
{ src: "/images/portfolio/corporate14.jpg", alt: "Corporate 14", category: "Corporate" },
{ src: "/images/portfolio/wedding1.jpg", alt: "Wedding 1", category: "Wedding" },
{ src: "/images/portfolio/wedding2.jpg", alt: "Wedding 2", category: "Wedding" },
{ src: "/images/portfolio/wedding3.jpg", alt: "Wedding 3", category: "Wedding" },
 { src: "/images/portfolio/wedding4.jpg", alt: "Wedding 4", category: "Wedding" },
 { src: "/images/portfolio/wedding5.jpg", alt: "Wedding 5", category: "Wedding" },
 { src: "/images/portfolio/wedding6.jpg", alt: "Wedding 6", category: "Wedding" },   
 { src: "/images/portfolio/wedding7.jpg", alt: "Wedding 7", category: "Wedding" },
 { src: "/images/portfolio/wedding8.jpg", alt: "Wedding 8", category: "Wedding" },
 { src: "/images/portfolio/wedding9.jpg", alt: "Wedding 9", category: "Wedding" },   
 { src: "/images/portfolio/wedding10.jpg", alt: "Wedding 10", category: "Wedding" },
{ src: "/images/portfolio/wedding11.jpg", alt: "Wedding 11", category: "Wedding" },
{ src: "/images/portfolio/wedding12.jpg", alt: "Wedding 12", category: "Wedding" },
{ src: "/images/portfolio/wedding13.jpg", alt: "Wedding 13", category: "Wedding" }, 
 { src: "/images/portfolio/wedding14.jpg", alt: "Wedding 14", category: "Wedding" },
 { src: "/images/portfolio/wedding15.jpg", alt: "Wedding 15", category: "Wedding" },
 { src: "/images/portfolio/wedding16.jpg", alt: "Wedding 16", category: "Wedding" },      
 { src: "/images/portfolio/wedding17.jpg", alt: "Wedding 17", category: "Wedding" },     



  { src: "/images/portfolio/portrait1.jpg", alt: "Portrait 1", category: "Portraits" },
  { src: "/images/portfolio/portrait2.jpg", alt: "Portrait 2", category: "Portraits" },
    { src: "/images/portfolio/portrait3.jpg", alt: "Portrait 3", category: "Portraits" },
      { src: "/images/portfolio/portrait4.jpg", alt: "Portrait 4", category: "Portraits" },
        { src: "/images/portfolio/portrait5.jpg", alt: "Portrait 5", category: "Portraits" },
          { src: "/images/portfolio/portrait6.jpg", alt: "Portrait 6", category: "Portraits" },
            { src: "/images/portfolio/portrait7.jpg", alt: "Portrait 7", category: "Portraits" },
{ src: "/images/portfolio/portrait8.jpg", alt: "Portrait 8", category: "Portraits" },
{ src: "/images/portfolio/portrait9.jpg", alt: "Portrait 9", category: "Portraits" },
{ src: "/images/portfolio/portrait10.jpg", alt: "Portrait 10", category: "Portraits" },
{ src: "/images/portfolio/portrait11.jpg", alt: "Portrait 11", category: "Portraits" },
{ src: "/images/portfolio/portrait12.jpg", alt: "Portrait 12", category: "Portraits" },
{ src: "/images/portfolio/portrait13.jpg", alt: "Portrait 13", category: "Portraits" },







        
        { src: "/images/portfolio/d1.jpg", alt: "drone1", category: "Drone" },
        { src: "/images/portfolio/d2.jpg", alt: "drone2", category: "Drone" },
        { src: "/images/portfolio/d3.jpg", alt: "drone3", category: "Drone" },
        { src: "/images/portfolio/d4.jpg", alt: "drone4", category: "Drone" },
       

];

const streams: StreamItem[] = [
  {
    title: "CHRM COLLEGE - October 2025",
    url: "https://www.youtube.com/embed/TgrNub3kYaI",
    thumbnail: "/images/streams/thumb1.jpg",
  },
  {
    title: "JKUAT GRRADUATION - April 2025",
    url: "https://www.youtube.com/embed/tS2S0FmqVUc",
    thumbnail: "/images/streams/thumb2.jpg",
  },
  {
    title: "Burial livestream- October 2025",
    url: "https://www.youtube.com/embed/Ojd-UebXDNs",
    thumbnail: "/images/streams/thumb3.jpg",
  },
    {
    title: "HTCA DIOCESE livestream- October 2025",
    url: "https://www.youtube.com/embed/m_qYgCRmLGQ",
    thumbnail: "/images/streams/thumb4.jpg",
  },
    {
    title: "Burial livestream- May 2025",
    url: "https://www.youtube.com/embed/AMrUEzEY5MQ",
    thumbnail: "/images/streams/thumb5.jpg",
  },
   {
    title: "Burial livestream- May 2025",
    url: "https://www.youtube.com/embed/n6vQyGRREnM",
    thumbnail: "/images/streams/thumb6.jpg",
  },
];

const categories = ["Corporate", "Wedding", "Portraits", "Drone", "Livestreaming"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Corporate");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Decide which items to show based on category
  const filteredImages = images.filter((img) => img.category === activeCategory);
  const filteredStreams = activeCategory === "Livestreaming" ? streams : [];

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
    <section className="py-24 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Portfolio</h2>

      {/* Category Buttons */}
   <div className="flex justify-center gap-4 mb-12">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => {
        setActiveCategory(cat);
        setSelectedIndex(null);
      }}
      className={`px-6 py-2 font-bold rounded transition ${
        activeCategory === cat
          ? "bg-red-600 hover:bg-red-700"
          : "bg-gray-700 hover:bg-gray-600"
      }`}
    >
      {cat}
    </button>
  ))}
</div>


      {/* Grid */}
      {activeCategory !== "Livestreaming" ? (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-6xl mx-auto">
          {filteredImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="w-full mb-4 rounded shadow-md cursor-pointer break-inside-avoid hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedIndex(idx)}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredStreams.map((stream, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={stream.thumbnail}
                alt={stream.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{stream.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}

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

            {/* Navigation Buttons */}
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
