import { useEffect, useState } from "react";

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export default function Movies({ results: movies }: { results: Movie[] }) {
    return (
        <div>
            {movies?.map((movie, index) => (
                <div key={index}>{movie.title}</div>
            ))}
        </div>
    );
}
export async function getServerSideProps() {
    const { results }: { results: Movie[] } = await (
        await fetch(`http://localhost:3000/api/movies`)
    ).json();
    return {
        props: {
            results,
        },
    };
}
