import { CCard, CCardBody } from '@coreui/react';
import { CCardGroup } from '@coreui/react';
import { CCardImage } from '@coreui/react';
import { CCardText } from '@coreui/react';
import { CCardTitle } from '@coreui/react';
import './CardsFounders.css';

function CardsFounders(){
    return(
        <>
        <CCardGroup className='background-body'>
        <CCard>
          <CCardImage orientation="top" src="https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_de_retrato_olhando_para_a_camera.jpg?itok=iXWiqVkY" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </CCardText>
            <CCardText>
              <small className="text-medium-emphasis">Last updated 3 mins ago</small>
            </CCardText>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardImage orientation="top" src="/images/react.jpg" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </CCardText>
            <CCardText>
              <small className="text-medium-emphasis">Last updated 3 mins ago</small>
            </CCardText>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardImage orientation="top" src="/images/react.jpg" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.
            </CCardText>
            <CCardText>
              <small className="text-medium-emphasis">Last updated 3 mins ago</small>
            </CCardText>
          </CCardBody>
        </CCard>
      </CCardGroup> 
      </>
     );
   
    
}
export default CardsFounders;