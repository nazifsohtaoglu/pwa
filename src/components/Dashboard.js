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
    const [il, setIl] = useState(null);
    const [ilce, setIlce] = useState(null);
    const [bayi, setBayi] = useState(null);
    const [text, setText] = useState('');
    const [barkodGoster, setBarkodGoster] = useState(false);
    const iller = [
        { name: 'Ankara', code: 'Ankara' },
        
    ];
   
    const ilceler = [
       
      { name: 'Alt??nda??', code: 'Alt??nda??' },
      { name: 'Aya??', code: 'Aya??' },
      { name: 'Bala', code: 'Bala' },
      { name: 'Beypazar??', code: 'Beypazar??' },
      { name: '??aml??dere', code: '??aml??dere' },
      { name: '??ankaya', code: '??ankaya' },
      { name: '??ubuk', code: '??ubuk' },
      { name: 'Elmada??', code: 'Elmada??' },
      { name: 'G??d??l', code: 'G??d??l' },
      { name: 'Haymana', code: 'Haymana' },
      { name: 'Kalecik', code: 'Kalecik' },
      { name: 'K??z??lcahamam', code: 'K??z??lcahamam' },
      { name: 'Nall??han', code: 'Nall??han' },
      { name: 'Polatl??', code: 'Polatl??' },
      { name: 'Yenimahalle', code: 'Yenimahalle' },
    
      
    ];
    const bayiler = [
        { name: 'A', code: 'A' },
        { name: 'B', code: 'B' },
        { name: 'C', code: 'C' },
        { name: 'D', code: 'D' },
        { name: 'E', code: 'E' },
        { name: 'F', code: 'F' },

        
    ];

    const hideDialog = () => {
        setBarkodGoster(false)
        setText("")
        setProductDialog(false);
    }

    const openDialog = (text) => {
        
        setText(text)
        setProductDialog(true)
    }

    const kodUret = () => {
        setBarkodGoster(true)
        let _text;
        _text= text +" "+ il.name +" "+ ilce.name +" "+ bayi.name

        QRCode.toDataURL(_text).then((data)=>{setQr(data)})
        
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
            

              <Dialog visible={productDialog} style={{ width: '450px' }} header="QR Kod Olu??tur" modal className="p-fluid"  onHide={hideDialog}>
              <div className="p-grid p-dir-col">
                <div className="p-col p-mb-1 p-mt-1">
                    <Dropdown id="state" value={il} onChange={(e) => setIl(e.value)} options={iller} optionLabel="name" placeholder="Se??niz"></Dropdown>      
                </div>
                <div className="p-col p-mb-1">
                    <Dropdown id="state" value={ilce} onChange={(e) => setIlce(e.value)} options={ilceler} optionLabel="name" placeholder="Se??niz"></Dropdown>      
              </div>
              <div className="p-col p-mb-1">
                    <Dropdown id="state" value={bayi} onChange={(e) => setBayi(e.value)} options={bayiler} optionLabel="name" placeholder="Se??niz"></Dropdown>      
              </div>
              <div className="p-col p-mb-1">
                <Button label="QR Kod ??ret" onClick={()=>kodUret() } className="p-button-secondary p-mr-2 p-mb-2" />
              </div>
                <div>
                   
                    {barkodGoster?<img src={qr}style={{ width: '100%' }}></img>:<img style={{ width: '100%' }}></img>}
                </div>    

               </div>      
             </Dialog>

                          
           
            
        </div>
    );
}
