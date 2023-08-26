import { useState, useEffect } from "react";
export default function CastCard({ name, character, profile_path }) {
    const [actor, setActor] = useState(null);
    useEffect(() => {

        if (profile_path === null) {
            setActor('https://alumni.crg.eu/sites/default/files/default_images/default-picture_0_0.png')
        } else {
            setActor(`https://image.tmdb.org/t/p/w300/${profile_path}`)
        }

    }, [profile_path])
    return (
        <>
            <div className="me-3">
                <img src={actor} alt={name} width="80" height="120" />
            </div>

            <div className="card-body ">
                <h5 className="card-title mb-2 mt-2 fs-6">{name}</h5>
                <p className="card-text text-secondary">{character}</p>
            </div>
        </>
    )
}