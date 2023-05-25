import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 12
    },
    reportTitle: {
        fontSize: 12,
        textAlign: 'left',
        textTransform: 'uppercase',
    },
    middle: {
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});

const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>
       Please be kind enough to draw the cheque in favor of “G3 Technologies (PVT) LTD” 
        or deposit to the A/C below. </Text>
        <Text style={styles.middle}>       A/C No : 0211 1000 1905 </Text>
        <Text style={styles.middle}>       Name : G3 Technologies (Pvt) Ltd </Text>
        <Text style={styles.middle}>       Bank : Sampath Bank </Text>
        <Text style={styles.middle}>       Branch : Thalahena Branch </Text>
            
     <Text style={styles.reportTitle}>  Thanking You </Text>
     <Text style={styles.reportTitle}>  Yours respectfully  </Text>

         <Text style={styles.reportTitle}>  Nadun Wijetunge</Text>
         <Text style={styles.reportTitle}> Director </Text>
         <Text style={styles.reportTitle}> G3 Technologies (Pvt) Ltd, No 485/9/E, Mulleriyawa Road, Thalahena, Malabe. </Text>
    </View>
);

export default InvoiceThankYouMsg;