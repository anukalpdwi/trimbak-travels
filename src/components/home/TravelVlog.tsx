import React from 'react';
import ReactPlayer from 'react-player';

const TravelVlog: React.FC = () => {
  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/pwNeRmVpO4A',
      title: 'Exploring Maha Kumbh Prayagraj'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/_YQhth4jLLQ',
      title: 'Nashik to Prayagraj Road Trip'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/watch?v=example3',
      title: 'Golden Triangle Tour Highlights'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Travel Vlog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our journeys through India with our travel vlogs and guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative w-full" style={{ aspectRatio: "16/9", height: "350px" }}>
                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="100%"
                  controls={true}
                  light={true}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelVlog;