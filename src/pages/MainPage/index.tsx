// @ts-nocheck
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTitle } from 'ahooks';
import { Table as AntTable } from 'antd';
import { appName } from 'constants/app';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { fetchFootball } from 'store/football/actions';

const { Column } = AntTable;

const MainPage: FC = () => {
  const dispatch = useDispatch();
  const { items: football, isLoading } = useTypedSelector((state) => state.football);
  console.log(football);

  useEffect(() => {
    dispatch(fetchFootball({}));
  }, []);

  useTitle(`${appName} | Главная`);

  return (
    <div
      style={{
        padding: '30px',
      }}
    >
      <AntTable<Book> dataSource={football} loading={isLoading} rowKey={(item) => item.I} size="middle">
        <Column<Book> dataIndex="L" key="L" title="Турнир" />
        <Column<Book> key="O1" render={(game) => `${game.O1} -- ${game.O2}`} title="Команды" />
        <Column<Book>
          key={(game) => game.SC.ST[0].Value.find((item) => item.ID === 70)}
          render={(game) => {
            const corners = game.SC.ST[0].Value.find((item) => item.ID === 70);
            return `${corners.S1}-${corners.S2}`;
          }}
          title="Угловые"
        />
        <Column<Book> key="Счет" render={(game) => `${game.SC.FS.S1 ?? 0}:${game.SC.FS.S2 ?? 0}`} title="Счет" />
        <Column<Book> key="Время" render={(game) => `${Math.round(game.SC.TS / 60)} мин`} title="Время" />
      </AntTable>
      {/* <ul>
        {football.map((game, index) => {
          const isStats = game.SC.ST;

          if (isStats) {
            const corners = game.SC.ST[0].Value.find((item) => item.ID === 70);
            const isTime = game.SC.TS;
            const isTimeLessThan70 = game.SC.TS < 4200;
            const firstScore = game.SC.FS.S1;
            const secondScore = game.SC.FS.S2;

            if (corners && isTime && isTimeLessThan70) {
              const isManyCorners = corners.S1 >= 5 || corners.S2 >= 5;

              if (isManyCorners) {
                return (
                  <li
                    key={index}
                    style={{
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '20px',
                      border: '1px solid gray',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <p style={{ color: 'GrayText', maxWidth: '450px' }}>{game.L}</p>
                      <p style={{ marginTop: 'auto', maxWidth: '450px' }}>{`${game.O1} -- ${game.O2}`}</p>
                    </div>
                    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
                      <span style={{ padding: '5px' }}>Угловые {`${corners.S1} ${corners.S2}`}</span>
                      <span style={{ padding: '5px' }}>Счет {`${firstScore ?? 0} ${secondScore ?? 0}`}</span>
                      <span style={{ padding: '5px' }}>Время {Math.round(game.SC.TS / 60)} мин</span>
                    </div>
                  </li>
                );
              }
            }
          } else {
            return '';
          }
        })}
      </ul> */}
    </div>
  );
};

export default MainPage;
