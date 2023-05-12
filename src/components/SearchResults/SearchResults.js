import styles from './SearchResults.module.css'
import TrackList from '../TrackList/TrackList';

function SearchResults (props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Search</h2>
            <TrackList tracks={props.tracks} addTrack={props.addTrack} />
        </div>
    )
}

export default SearchResults;