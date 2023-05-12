import styles from './PlayList.module.css';
import TrackList from '../TrackList/TrackList';

function PlayList (props) {

    const nameOfPlayList = (event) => {
        props.namePlayList(event.target.value)
    }


    return (
        <div className={styles.container}>
            <input 
                type="text"
                placeholder="Name your playlist"
                className={styles.input}
                onChange={nameOfPlayList}
                value={props.playListName}
            />
            <TrackList 
                tracks={props.addedTracks} 
                isRemove={true} 
                removeTrack={props.removeTrack}    
            />
            <button className={styles.button} onClick={props.savePlayList}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default PlayList;