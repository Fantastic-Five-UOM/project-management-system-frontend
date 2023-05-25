import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRightWidth: 1,
        borderLeftWidth:1,
        borderTop:1,
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
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

const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.s}>#</Text>
        <Text style={styles.description}> Description</Text>
        <Text style={styles.amount}>Amount</Text>
    </View>
);

export default InvoiceTableHeader;