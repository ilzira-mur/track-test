import React from 'react';
import './Track.css';

function Track({track, isAdminMode, handleTrackDelete}) {

    return(
        <tr className="track__tr">
            <td className="track__text">{track.id}</td>
            <td className="track__text">{track.date}</td>
            <td className="track__text">{track.company}</td>
            <td className="track__text">{track.name}</td>
            <td className="track__text">{track.phone}</td>
            <td className="track__text">{track.comment}</td>
            <td className="track__text"><a className="track__link" target="blank" href={`https://ati.su/firms/${track.ati}/info`}>{track.ati}</a></td>
            <td className={`main__buttons ${isAdminMode ? "main__button_visible" : "main__button_unvisible"}`}>
                <button className="track__button">Редактировать</button>
                <button className="track__button" onClick={handleTrackDelete}>Удалить</button>
            </td>
        </tr>
    );
}

export default Track;