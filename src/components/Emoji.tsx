import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";

interface Props {
  rating: number;
}

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "average", boxSize: "25px" },
  4: { src: thumbsUp, alt: "good", boxSize: "25px" },
  5: { src: bullsEye, alt: "Excellent", boxSize: "35px" },
};

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} marginTop={1}></Image>;
};

export default Emoji;
