import React from 'react';
import './Track.css';
import initialTracks from '../../utils/utils';

function Track({track}) {

    console.log(track.id)
console.log(initialTracks)
    return(
        <tr className="track__tr">
            <td className="track__text">{track.id}</td>
            <td className="track__text">{track.date}</td>
            <td className="track__text">{track.company}</td>
            <td className="track__text">{track.name}</td>
            <td className="track__text">{track.phone}</td>
            <td className="track__text">{track.comment}</td>
            <td className="track__text"><a className="track__link" target="blank" href={`https://ati.su/firms/${track.ati}/info`}>{track.ati}</a></td>
        </tr>
    );
}

export default Track;