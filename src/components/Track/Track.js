import styles from './Track.module.css';

function Track (props) {

    const onAdd = () => {
        props.addTrack(props.track)
    }

    const onRemove = () => {
        props.removeTrack(props.track)
    }


    const renderButton = () => {
        if (props.isRemove) {
            return (
                <button className={styles.button} onClick={onRemove}> - </button>
            )
        } return (
            <button className={styles.button} onClick={onAdd}> + </button>
        )
    }

    return (
        <div className={styles.trackContainer}>
            <h3 className={styles.h3}>{props.track.name}</h3>
            <h4 className={styles.h4}>{props.track.artist} | {props.track.album} </h4>
            {renderButton()}
        </div>
    )
}

export default Track;