import styles from './TrackList.module.css';
import Track from '../Track/Track';

function TrackList (props) {
    return (
        <div className={styles.trackListContainer}>
            {props.tracks.map((track) => {
                return (
                    <Track 
                        track={track} 
                        isRemove={props.isRemove}
                        addTrack={props.addTrack} 
                        removeTrack={props.removeTrack}   
                        key={track.id}
                    />
                )
            })}
        </div>
    )
}

export default TrackList;