import React from "react";
import './Main.css';

function Main() {
    return (
        <main>
            <section>

            </section>
            <section>
                <table className="main__table">
                    <tr>
                        <th className="main__table-text">Номер заявки</th>
                        <th className="main__table-text">Дата и время заявки</th>
                        <th className="main__table-text">Фирма клиента</th>
                        <th className="main__table-text">ФИО перевозчика</th>
                        <th className="main__table-text">Телефон перевозчика</th>
                        <th className="main__table-text">Комментарии</th>
                        <th className="main__table-text">ATI код</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default Main;