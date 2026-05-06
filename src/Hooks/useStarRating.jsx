import { Star } from "lucide-react";

const HalfStar = ({ size = 12, color = "#f59e0b" }) => (
  <div style={{ position: "relative", width: size, height: size }}>
    <Star size={size} color={color} fill="transparent" />
    
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "50%",
      overflow: "hidden",
    }}>
      <Star size={size} color={color} fill={color} />
    </div>
  </div>
);

const useRenderStars = (rating = 0, { size = 12, color = "#f59e0b" } = {}) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <Star key={i} size={size} color={color} fill={color} aria-hidden="true" />
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <HalfStar key={i} size={size} color={color} />  // Custom half star
      );
    } else {
      stars.push(
        <Star key={i} size={size} color={color} fill="transparent" aria-hidden="true" />
      );
    }
  }

  return stars;
};


export default useRenderStars