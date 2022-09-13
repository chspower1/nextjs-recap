import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export interface Detail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: null | string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export default function Detail({ movie, params }: { movie: Detail; params: string[] }) {
    const [title, id] = params || [];
    return (
        <>
            <h1>{title}</h1>
            <p>{movie.overview}</p>
        </>
    );
}
export async function getServerSideProps({ params: { params } }) {
    console.log(params);
    const [title, id] = params;
    const movie: Detail = await (
        await fetch(`http://localhost:3000/api/movies/${id as String}`)
    ).json();
    console.log(movie);
    return {
        props: {
            params,
            movie,
        },
    };
}
