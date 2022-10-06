import React from "react";

function HotelItem({ data }) {
  // 解構資料
  const { img, title, location, description, rating, price } = data;
  return (
    <div className="Listing">
      {/* 飯店圖片,名稱,地點,說明 */}
      <img src={img} className="ListingImg" />
      <div className="ListingDetails">
        <p className="ListingName">{title}</p>
        <p className="ListingLocation">{location}</p>
        <p className="ListingDesc">{description}</p>
      </div>
      {/* 飯店評分,價格 */}
      <div className="listing_two">
        <section className="ListingRatingDiv">
          <p style={{ fontWeight: "bold" }}>
            {/* 判斷評分 大於等於4.5=>好極了 小於4.5=>非常好 */}
            {+rating >= 4.5 ? "好極了" : "非常好"}
          </p>
          <p className="ListingRating">{rating}</p>
        </section>
        <p className="ListingPrice">
          <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            NT${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>{" "}
          起
        </p>
      </div>
    </div>
  );
}

export default HotelItem;
