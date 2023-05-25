import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';


const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
       
    },
    reportTitle: {
        color: '#3778C2',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});

const InvoiceItemsTable = ({ invoice }) => (
    <View style={styles.tableContainer}>
        <Text style={styles.reportTitle}>CSSSDSSDS </Text>
        <InvoiceTableHeader />
        <InvoiceTableRow items={invoice.items} />
    </View>
);

export default InvoiceItemsTable;