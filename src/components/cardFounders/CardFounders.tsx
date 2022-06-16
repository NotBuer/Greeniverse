import { CCard, CCardBody } from '@coreui/react';
import { CCardGroup } from '@coreui/react';
import { CCardImage } from '@coreui/react';
import { CCardText } from '@coreui/react';
import { CCardTitle } from '@coreui/react';
import './CardsFounders.css';

function CardsFounders(){
    return(
        <>
        <CCardGroup>
        <CCard>
          <CCardImage orientation="top" src="/assets/imgs/Uriel" />
          <CCardBody className='background-body'>
            <CCardTitle>Uriel Pereira</CCardTitle>
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
          <CCardBody className='background-body'>
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