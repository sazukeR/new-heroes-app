import { useParams } from "react-router";

export const HeroPage = () => {
 const { slug = "" } = useParams();

 return <div>{slug}</div>;
};
