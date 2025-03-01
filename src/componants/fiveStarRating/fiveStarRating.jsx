import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // Declare star icon array
  const starList = [];

  // store number of filled stars
  const starFillCount = Math.floor(rating);

  //store if yes or no thre is a hald star
  const hasHalsStar = rating - parseInt(rating) >= 0.5;

  //store the number of emty starts
  const emptyStarCount = 5 - (starFillCount + (hasHalsStar ? 1 : 0));

  //push the filled star icons
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"starFill" + i} />);
  }

  //push on half star icon if necessary
  if (hasHalsStar) {
    starList.push(<StarHalf key={"starhals"} />);
  }

  // push the empty star icon
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"starEmpty" + i} />);
  }

  //renter the star icon array
  return <div>{starList}</div>;
}
