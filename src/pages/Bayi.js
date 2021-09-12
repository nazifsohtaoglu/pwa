import React, { useState, useEffect, useRef } from 'react';
import QrReader from 'react-qr-reader';
import { Button } from 'primereact/button';

import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';

import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { ProductService } from '../service/ProductService';

export const Bayi = () => {

    

    
    const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  
 

    const toast = useRef(null);
    const dt = useRef(null);

    const qrRef = useRef(null);

    const handleErrorFile = (error) => {
        console.log(error);
      }
      const handleScanFile = (result) => {
          if (result) {
              setScanResultFile(result);
          }
      }
      const onScanFile = () => {
        qrRef.current.openImageDialog();
      }
      const handleErrorWebCam = (error) => {
        console.log(error);
      }
      const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
       }
    const onayla = ()=>{
        toast.current.show({ severity: 'success', summary: 'Onaya gönderildi', detail: 'Onay için talep eden personele gönderildi.', life: 3000 });
    }

    return (
        <div className="p-grid ">
            <Toast ref={toast} />
            <div className="p-col-12 p-d-flex p-jc-center">
                {/* <div className="card">
              
                        
                        <Button  label="Scan Qr Code" icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => onScanFile} />
                        <QrReader
                          ref={qrRef}
                          delay={300}
                        //   style={{width: '100%'}}
                          onError={handleErrorFile}
                          onScan={handleScanFile}
                          legacyMode
                        />
                        <h3>Scanned Code: {scanResultFile}</h3>
                    
                     
                </div> */}
                <div className="card " style={{width: '600px'}}>
               
                         <h3>Qr Kod Tarama</h3>
                         <QrReader
                         delay={300}
                          
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                         <h3>Taranan Kod : </h3>
                         <br/>
                         <div className="p-mb-3 p-text-bold">{scanResultWebCam}</div>
                         {scanResultWebCam===''?<></>:<div className="p-col p-mb-1 p-d-flex p-jc-center">
                            <Button  onClick={()=>onayla()} label="Onayla"  className="p-button     p-mr-2 p-mb-2" />
                        </div>}
                      
                    
                </div>    
            </div>
        </div>
    );
}
