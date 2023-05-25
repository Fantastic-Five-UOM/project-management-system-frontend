import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
        borderRightWidth: 1,
        borderLeftWidth:1,
    },
    s: {
        width: '10%',
        borderRightWidth:1,
        
    },
    description: {
        width: '45%',
        borderRightWidth: 1,
       
    },
   
    amount: {
        width: '45%'
    },
});

const InvoiceTableRow = ({ items }) => {
    const rows = items.map((item,index) =>
        <View style={styles.row} key={item.sno.toString()}>
            <Text style={styles.s}>{index}</Text>
            <Text style={styles.description}>{item.desc}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
        </View>
    );
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow;