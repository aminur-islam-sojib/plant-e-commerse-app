import { useSelector } from 'react-redux';

const ImageSlider = () => {
  // store registers the reducer under `imageReducer` in src/app/store.js
  const images = useSelector((state) => state.imagesR.images);
  return (
    <div className=" px-4">
      {images.map((image) => {
        return (
          <img src={image} alt="Plant" className="w-full h-auto rounded-lg" />
        );
      })}
    </div>
  );
};

export default ImageSlider;
