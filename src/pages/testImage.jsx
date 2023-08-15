import React, { useEffect, useState } from "react";

export default function TestImage() {
  const [roomImages, setRoomImages] = useState([]);

  useEffect(() => {
    fetchRoomImages();
  }, []);

  const fetchRoomImages = async () => {
    try {
      const response = await fetch(
        "https://web-hotel-rpl.my.id/api/room-image"
      );
      const data = await response.json();
      console.log("room images data", data.data);
      setRoomImages(data.data);
    } catch (error) {
      console.error("Error fetching room images:", error);
    }
  };

  return (
    <div>
      <h1>Room Images</h1>
      <div className="image-list">
        {roomImages.map((image) => (
          <div key={image.id} className="image-item">
            <img
              src={`https://web-hotel-rpl.my.id/storage/room/image/${image.url_image}`}
              alt={`Room ${image.room.room_number}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
