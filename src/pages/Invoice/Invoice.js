import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './Invoice.css';
import PdfDocument from '../../components/generateInvoice/Invoice';

function Invoice() {
  const InvoiceData = {
    id: "5df3180a09ea16dc4b95f910",
    invoice_no: "201906-28",
    balance: "$2,283.74",
    title:"deufe",
    trans_date: "26-11-2023",
    address: "Lanka Safety Equipment, \n No 23A,\n Pagoda Road,\n Nugegoda,\nSri Lanka\n\n",
    client:"Client: Lanka Safety Equipment\n\n",
    projectName:"Invoice for Website Development & Hosting",

    due_date: "26-11-2021",
    companyID: "10001",
    companyName: "xyz company",
  
    items: [
        {
            sno: 1,
            desc: "Website Development Cost",
           
           
        },
        {
            sno: 2,
            desc: "Hosting Fee for Year 2019",
           
           
        },
        {
            sno: 3,
            desc: "TOTAL COST",
           
        },
        {
          sno: 4,
          desc: "Payment Received (2019/01/08)-ACKG3T11 ",
         
      },
      {
        sno: 5,
        desc: "Due Amount",
       
    }
    ]
}
  const fileName = "Invoice.pdf";

  return (
    <div className="App"> 
      <PDFViewer width={800} height={500} showToolbar={false}>
        <PdfDocument invoicedata={InvoiceData} />
      </PDFViewer>

      <div className='download-link'>
        <PDFDownloadLink
          document={<PdfDocument invoicedata={InvoiceData} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Invoice"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default Invoice;