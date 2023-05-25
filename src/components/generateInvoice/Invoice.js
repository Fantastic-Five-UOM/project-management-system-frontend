import React from "react";
import { Page, Document, StyleSheet, Image, View } from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceNo from "./InvoiceNo";
import BillTo from "./BillTo";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import InvoiceItemsTable from "./InvoiceItemsTable";
import logo from "./logo1.png"

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width:'50px',
        height: 'auto',
        float: "left"
    },
   
});

const PdfDocument = ({ invoicedata }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page} >
                
                <Image style={styles.logo} src={logo} />
                <InvoiceNo invoice={invoicedata} />
                <BillTo invoice={invoicedata} />
                <InvoiceTitle title={'Invoice'} />
                <InvoiceItemsTable invoice={invoicedata} />
                <InvoiceThankYouMsg />
            </Page>
        </Document>
    );
}

export default PdfDocument;