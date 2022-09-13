import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
const Wrap = styled.section`
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 30px;
    padding-top: 20px;
`;
const MovieBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MovieTitle = styled.h1`
    position: absolute;
    right: 50%;
    color: white;
    transform: translateX(50%);
    text-align: center;
`;

const Poster = styled.img`
    width: 250px;
    height: 375px;
    transition: all 0.5s ease;
    border-radius: 6px;
    filter: brightness(0.8);
    cursor: pointer;
    &:hover {
        filter: brightness(1);
    }
`;

export default function Popular({ results: movies }: { results: Movie[] }) {
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const router = useRouter();
    const onClick = (id: number, title: string) => {
        router.push(`/movies/${title.toLowerCase().replace(reg, "").split(" ").join("-")}/${id}`);
    };

    return (
        <Wrap>
            {movies?.map((movie, index) => (
                <MovieBox key={index} onClick={() => onClick(movie.id, movie.title)}>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                </MovieBox>
            ))}
        </Wrap>
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
