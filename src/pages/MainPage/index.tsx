// @ts-nocheck
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTitle } from 'ahooks';
import { Table as AntTable } from 'antd';
import { appName } from 'constants/app';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { fetchFootball } from 'store/football/actions';
import storage from 'utils/storage';

const { Column } = AntTable;

const MainPage: FC = () => {
  const dispatch = useDispatch();
  const { items: football, isLoading } = useTypedSelector((state) => state.football);
  const checkedFootball = storage.getItem('selectedRowKeys');
  const [checked, setChecked] = useState(checkedFootball);

  useEffect(() => {
    dispatch(fetchFootball({}));
  }, []);

  useTitle(`${appName} | Главная`);

  return (
    <div>
      <AntTable<Book>
        dataSource={football}
        loading={isLoading}
        rowKey={(item) => item.I}
        rowSelection={{
          onChange: (selectedRowKeys: React.Key[]) => {
            storage.setItem('selectedRowKeys', selectedRowKeys);
            setChecked(storage.getItem('selectedRowKeys'));
          },
          selectedRowKeys: checked,
        }}
        size="middle"
      >
        {/* <Column<Book> dataIndex="L" key="L" title="Турнир" /> */}
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
    </div>
  );
};

export default MainPage;
