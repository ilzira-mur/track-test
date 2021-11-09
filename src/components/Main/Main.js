import React from "react";
import './Main.css';
import initialTracks from "../../utils/utils";
import Track from '../Track/Track';

function Main() {
    console.log(initialTracks)
    return (
        <main>
            <section>
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
                        </tr>
                    </thead>
                    <tbody>
                            {initialTracks.map(track => (<Track key={track.id} track={track}/>))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default Main;