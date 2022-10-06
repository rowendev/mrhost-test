import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import HotelItem from "./HotelItem";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

const dummy_data = [
  {
    title: "台北西門町意舍酒店",
    location: "台北市",
    description:
      "台北西門町意舍酒店距離捷運西門站步行 7分鐘,設有餐廳、洗衣服務和全館免費 WiFi,提供現代化的環保住宿。台北西門町意舍酒店位於西門町商圈的中心地帶,交通便利,距離西門紅樓步行 7 分鐘；距離華西街觀光夜市 7分鐘車程,距離桃園國際機場約 45 分鐘車程。",
    rating: "4.5",
    price: 1733,
    id: "1",
    img: img1,
    freeWifi: false,
    noSmoke: true,
    kitchen: false,
    laundry: false,
    parking: true,
    pet: true,
  },
  {
    title: "德立莊昆明館",
    location: "台北市",
    description:
      "HOTEL PAPA WHALE，其命名靈感來自海中霸王最大哺乳類動物-鯨魚，象徵如鯨魚自在暢游於藍海中一般，酒店外觀以白色鍍鋅浪板營造出簡約風格，由名設計師操刀將老建築改造，重新堆砌成輕工業風及SOHO都會風的空間，建構出獨樹一格的現代設計風格酒店。捷運西門站及北門站步行即可抵達，為旅客旅行台北及西門町最佳選擇。",
    rating: "4.1",
    price: 1040,
    id: "2",
    img: img2,
    freeWifi: true,
    noSmoke: true,
    kitchen: true,
    laundry: false,
    parking: true,
    pet: false,
  },
  {
    title: "鳳凰閣溫泉旅店",
    location: "台北市",
    description:
      "身為北投歷史最悠久的溫泉旅館之一，「鳳凰閣」始終不隨波逐流，保留溫泉時代的細膩美感，全館使用日式原木地板，搭配原石岩片溫泉浴池，典雅榻榻米懷舊風格， 詮釋無與倫比的考究美學。",
    rating: "4.0",
    price: 2682,
    id: "3",
    img: img3,
    freeWifi: true,
    noSmoke: true,
    kitchen: true,
    laundry: false,
    parking: false,
    pet: true,
  },
  {
    title: "城市商旅-南東館",
    location: "台北市",
    description:
      "城市商旅－南東館位於台北市，附設餐廳。步行至饒河街觀光夜市約需 7 分鐘。館內提供免費 WiFi。每間客房均配備電視和空調，並設有休息區。房內還提供冰箱。私人衛浴設有淋浴設施，並備有吹風機。城市商旅－南東館設有 24 小時接待櫃台。館內其他設施包括行李寄存服務。",
    rating: "4.2",
    price: 2800,
    id: "4",
    img: img4,
    freeWifi: true,
    noSmoke: true,
    kitchen: false,
    laundry: true,
    parking: true,
    pet: true,
  },
  {
    title: "天雲旅棧台北西門",
    location: "台北市",
    description:
      "天雲旅棧台北西門位於台北的西門町購物區，距離捷運西門站有 6 分鐘步行路程。飯店的設計概念源自中世紀的哥德式修道院。全館提供免費 WiFi。天雲旅棧台北西門距離台北車站僅有 1 站捷運車程，距離台北松山機場有 7 站捷運車程，距離台灣桃園國際機場則有 50 分鐘車程。飯店可應要求提供機場接送服務。",
    rating: "4.5",
    price: 3200,
    id: "5",
    img: img5,
    freeWifi: true,
    noSmoke: true,
    kitchen: false,
    laundry: true,
    parking: true,
    pet: false,
  },
];

function Hotels({ tags }) {
  const [sort, setSort] = useState("為您精選");
  const [hotels, setHotels] = useState(dummy_data);
  const [newHotel, setNewHotel] = useState([]);
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  // tags => array
  return (
    <div className="hotels">
      {/* 標題 */}
      <div className="hotels_heading">
        <h1>找到 56 間住宿</h1>
        <h4>{tags}</h4>
        <FormControl>
          <Select
            defaultValue="為您精選"
            value={sort}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="為您精選">為您精選</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* 飯店物件 */}
      {/* {filtedHotel.length === 0 ? (
        <div className="hotels_item">
          {hotels.map((hotel) => (
            <HotelItem key={hotel.price} data={hotel} />
          ))}
        </div>
      ) : (
        <div className="hotels_item">
          {filtedHotel.map((hotel) => (
            <HotelItem key={hotel.price} data={hotel} />
          ))}
        </div>
      )} */}
      <div className="hotels_item">
        {hotels.map((hotel) => (
          <HotelItem data={hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
