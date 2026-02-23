// EpisodeList.tsx
import EpisodeCard from "./EpisodeCard";

const episodes = [
    {
        id: 1,
        title: "To You, in 2000 Years",
        duration: "24 min",
        image: require("../../../assets/images/attack-titan.png"),
        description: "A queda da Muralha Maria muda tudo...",
    },
];

export default function EpisodeList({ season }: { season?: number }) {
    return (
        <>
            {episodes.map((ep) => (
                <EpisodeCard key={ep.id} episode={ep} />
            ))}
        </>
    );
}