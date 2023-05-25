import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
        justifyContent: 'flex-start',
        width: '50%'
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
   
});
 const BillTo = ({ invoice }) => (
    <View style={styles.headerContainer}>
        <Text >{invoice.trans_date}</Text>
        <Text>{invoice.address}</Text>
        <Text>{invoice.client}</Text>
      <Text > <center>{invoice.projectName}</center> </Text>
    </View>   
);
 

  
export default BillTo;
