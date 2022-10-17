export const backgroundCard = (type: string) => {
  switch (type) {
    case "normal":
      return {
        bg: "bg-gray-200",
        bgType: "bg-gray-500",
        outFace: "bg-gray-100/50",
      };
    case "rock":
      return {
        bg: "bg-gray-300",
        bgType: "bg-gray-500",
        outFace: "bg-gray-100/50",
      };
    case "poison":
      return {
        bg: "bg-purple-200",
        bgType: "bg-purple-500",
        outFace: "bg-gray-100/50",
      };
    case "ghost":
      return {
        bg: "bg-purple-400",
        bgType: "bg-purple-500",
        outFace: "bg-gray-100/50",
      };
    case "psychic":
      return {
        bg: "bg-purple-300",
        bgType: "bg-purple-500",
        outFace: "bg-gray-100/50",
      };
    case "electric":
      return {
        bg: "bg-yellow-200",
        bgType: "bg-yellow-500",
        outFace: "bg-yellow-100/50",
      };
    case "fairy":
      return {
        bg: "bg-pink-200",
        bgType: "bg-pink-500",
        outFace: "bg-pink-100/50",
      };
    case "fire":
      return {
        bg: "bg-red-300",
        bgType: "bg-red-500",
        outFace: "bg-red-100/50",
      };
    case "water":
      return {
        bg: "bg-sky-200",
        bgType: "bg-sky-500",
        outFace: "bg-sky-100/50",
      };
    case "ground":
      return {
        bg: "bg-amber-200",
        bgType: "bg-amber-500",
        outFace: "bg-amber-100/50",
      };
    case "grass":
      return {
        bg: "bg-green-200",
        bgType: "bg-green-500",
        outFace: "bg-green-100/50",
      };
    case "bug":
      return {
        bg: "bg-green-300",
        bgType: "bg-green-500",
        outFace: "bg-green-100/50",
      };
    case "fighting":
      return {
        bg: "bg-amber-300",
        bgType: "bg-amber-500",
        outFace: "bg-amber-100/50",
      };
    case "flying":
      return {
        bg: "bg-sky-300",
        bgType: "bg-sky-500",
        outFace: "bg-sky-100/50",
      };
    default:
      return {
        bg: "bg-gray-200",
        bgType: "bg-gray-500",
        outFace: "bg-gray-100/50",
      };
  }
};
