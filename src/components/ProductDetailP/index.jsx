import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ProductDetailP() {
  const [images, setImages] = useState({
    img1: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mtp03tua-apple-iphone-15-128gb-black-638305547889428746.jpg",
    img2: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mtp43tua-apple-iphone-15-128gb-blue-638305552289935305.jpg",
    img3: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mtp13tua-apple-iphone-15-128gb-pink-638305549480718339.jpg",
    img4: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mtpf3tua-apple-iphone-15-512gb-yellow-638305551741325084.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="text-violet-600 font-semibold">Sihirli</span>
          <h1 className="text-3xl font-bold">iPhone 15</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            <FaStar className="w-5 h-5" />
            <FaStar className="w-5 h-5" />
            <FaStar className="w-5 h-5" />
            <FaStar className="w-5 h-5" />
            <FaStar className="w-5 h-5" />
          </div>
          <div className="text-muted-foreground">
            4.9 (2,345 inceleme) | 12,345 sipariş
          </div>
        </div>
        <h6 className="text-2xl font-semibold">$ 799.99</h6>
        <p className="text-gray-700">
          Dayanıklılık hücrelerine işlemiş. Renkler de. iPhone 15’in yenilikçi
          tasarımında, tamamen renkle işlenmiş bir cam arka yüzey bulunuyor.
          Cama özel çift iyon değişimi işlemi ve uzay endüstrisi standartlarında
          alüminyum kenarlar, iPhone 15’i inanılmaz derecede dayanıklı kılıyor.
        </p>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold mb-8">Renk Seçin</h1>
          <div className="flex gap-8">
            <div className="flex flex-col items-center justify-center">
              <div className="w-7 h-7 bg-gray-700 rounded-full mb-2" />
              <span className="text-lg font-medium">Siyah</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-7 h-7 bg-blue-200 rounded-full mb-2" />
              <span className="text-lg font-medium">Mavi</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-7 h-7 bg-pink-300 rounded-full mb-2" />
              <span className="text-lg font-medium">Pembe</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-7 h-7 bg-yellow-200 rounded-full mb-2" />
              <span className="text-lg font-medium">Sarı</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
