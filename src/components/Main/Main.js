import React from "react";
import './Main.css';
import Track from '../Track/Track';
import { useRef } from 'react';

function Main({ isAdminMode, onCheckbox, tracks, handleTrackDelete }) {
    const checked = useRef()
    

    function handleCheckbox() {
        onCheckbox();
    }

console.log(isAdminMode)

    return (
        <main className="main">
            <section className="main__block">
                <div className="main__container">
                    <input onClick={handleCheckbox} type="checkbox" className="main__input" name="checkbox" id="checkbox" ref={checked} defaultChecked></input>
                    <label className="main__label" htmlFor="checkbox">admin mode</label>
                </div>
                <div className={`main__buttons ${isAdminMode ? "main__button_visible" : "main__button_unvisible"}`}>
                    <button className="main__button">Новая заявка</button>
                </div>
            </section>
            <section>
                <table className="main__table">
                    <thead>
                        <tr className="main__table-header">
                            <th className="main__table-text">Номер заявки</th>
                            <th className="main__table-text">Дата и время заявки</th>
                            <th className="main__table-text">Фирма клиента</th>
                            <th className="main__table-text">ФИО перевозчика</th>
                            <th className="main__table-text">Телефон перевозчика</th>
                            <th className="main__table-text">Комментарии</th>
                            <th className="main__table-text">ATI код</th>
                            <th className="main__table-text">admin</th>
                        </tr>
                    </thead>
                    <tbody>
                            {tracks.map(track => (<Track key={track.id} track={track} isAdminMode={isAdminMode} handleTrackDelete={handleTrackDelete}/>))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default Main;