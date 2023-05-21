import { number, string } from "prop-types";
import { Component } from "react";
import { castSearch } from '../../services/api';
import PropTypes from 'prop-types';
import styles from './Cast.module.scss'

class Cast extends Component {
    state = {
        cast: [{
            id: number,
            name: string,
            character: '',
            profile_path: '',
        }],
    }

    componentDidMount() {
        this.fetchCast();
    }

    fetchCast = async () => {
        const id = this.props.id;
        const cast = await castSearch(id).then(res => res.data.cast);
        this.setState({
            cast: [...cast],
        })
    }

    render() {
        const { cast } = this.state;
        return (

            <>

                {cast && <ul className={styles.CastBlock}>
                    {cast.map(({ id, name, character, profile_path }) => (
                        <li key={id} className={styles.Card} >

                            <div className="me-3">
                                <img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt={name} width="80" />
                            </div>

                            <div className="card-body ">
                                <h5 className="card-title mb-2 mt-2 fs-6">{name}</h5>
                                <p className="card-text text-secondary">{character}</p>
                            </div>


                        </li>
                    ))}
                </ul>}



            </>
        )
    }

}

Cast.propTypes = {
    id: PropTypes.string,
}

export default Cast;