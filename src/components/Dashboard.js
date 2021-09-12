import React, { useState, useEffect } from 'react';
import { Panel } from 'primereact/panel';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Chart } from 'primereact/chart';
import { ProgressBar } from 'primereact/progressbar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ProductService } from '../service/ProductService';
import { EventService } from '../service/EventService';
import { Dialog } from 'primereact/dialog';
import QRCode from 'qrcode'



export const Dashboard = () => {

    const cekler=[
        {tip:"Benzin", seriNu:"X7J6bVXmv0ifprwQiFm68A", miktar:"20 Litre"},
        {tip:"Benzin", seriNu:"i8YJDYggHUyl2H2BcXe4ew", miktar:"5 Litre"},
        {tip:"Benzin", seriNu:"QMtyNWExtUO-2tQvK9moWQ", miktar:"1 Litre"},
        {tip:"Benzin", seriNu:"C-8RkOO670-ilxNKYOrXnw", miktar:"1 Litre"},
        {tip:"Benzin", seriNu:"EJR4RAxLDUavqmkI7bsEtA", miktar:"1 Litre"},
        {tip:"Motorin", seriNu:"XUiEnmgkUkCbskGLxgjMyQ", miktar:"20 Litre"},
        {tip:"Motorin", seriNu:"cGXgkxh22kiamA-kgRngeg", miktar:"5 Litre"},
        {tip:"Motorin", seriNu:"qr9g-kj6mk2j-gchr35Ynw", miktar:"5 Litre"},
        {tip:"Motorin", seriNu:"pFd8XYwCzUux74ml1GUpVQ", miktar:"1 Litre"},
    ]
    
    const [productDialog, setProductDialog] = useState(false);
    const [qr, setQr] = useState('');
   

    const hideDialog = () => {
      
        setProductDialog(false);
    }

    const openDialog = (text) => {
        
        QRCode.toDataURL(text).then((data)=>{setQr(data)})
        setProductDialog(true)
    }
    return (
        <div className="p-grid p-fluid dashboard">
            
            {cekler.map((cek, index)=>{
               
                return(
                <div key={index} className="p-col-12 p-lg-4" onClick={()=>openDialog((cek.tip+" "+cek.miktar+"->"+cek.seriNu))}>
                <div className="card summary ">
                    <span className="title">{cek.tip}</span>
                    <span className="detail">{cek.seriNu}</span>
                    <span className={cek.tip==="Benzin"?"count visitors":"count purchases"}>{cek.miktar}</span>
                </div>
            </div>)
            })}
            

              <Dialog visible={productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid"  onHide={hideDialog}>
                        
                <div>
                    <img src={qr}style={{ width: '100%' }}></img>
                </div>       
             </Dialog>

                          
           
            
        </div>
    );
}
