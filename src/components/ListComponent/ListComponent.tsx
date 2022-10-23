import React from 'react';
import { List } from 'antd';

interface ListComponentProps {
    listData: Record<string, string | number>[];
}

const ListComponent = ({listData}: ListComponentProps) => (
    <List
      size="large"
      bordered
      dataSource={listData}
      renderItem={(item: Record<string, string | number>) => {
        return (
            <div key={item._id}>
                {`${item._id} ${item?.name}`}
            </div>
        )}}
    />
);

export default ListComponent;
