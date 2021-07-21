/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Field from './Field';

export default (props) => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c}
            onOpen={() => props.onOpenField(r, c)}
            onSelect={() => props.onSelectField(r, c)} />;
        });
        return <View style={style.rows} key={r}>{columns}</View>;
    });
    return <View style={style.container}>{rows}</View>;
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    },
    rows: {
        flexDirection: 'row',
    },
});
