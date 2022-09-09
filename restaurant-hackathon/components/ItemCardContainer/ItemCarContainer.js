import styled from "styled-components";
import { ItemCard } from "./ItemCard";

export const ItemCardContainer = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ItemCard item={item} />
      ))}
    </div>
  );
}