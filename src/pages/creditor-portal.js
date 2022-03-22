import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetInTouch from "../components/get-in-touch"

const CreditorPortal = ({data}) => {
  let appointData = [];
  data.allWpAppointment.nodes.map((d) => {
    return appointData.push({ title: d.title, appointmentId: d.appointmentOptions.appointmentId, typeOfJob: d.appointmentOptions.typeOfJob, date: d.appointmentOptions.date, appointee: d.appointmentOptions.appointee, analyst: d.appointmentOptions.analyst, email: d.appointmentOptions.email, phone: d.appointmentOptions.phone });
  });
  const [filterData,setFilterData] = React.useState([]);
  const [isFiltered,setISFiltered] = React.useState(false);
  React.useEffect(() => {
     setFilterData(appointData);
     return () => {
       setFilterData([]);
     } 
  }, [])
  const filterList = (e) => {
     e.preventDefault();
     let v = document.getElementById('search').value.toLowerCase();
     setFilterData(appointData.filter((v1)=>v1.title.toLowerCase().indexOf(v)>=0 || v1.appointmentId.toLowerCase().indexOf(v)>=0 || v1.typeOfJob.toLowerCase().indexOf(v)>=0 || v1.date.toLowerCase().indexOf(v)>=0 || v1.appointee.toLowerCase().indexOf(v)>=0 || v1.analyst.toLowerCase().indexOf(v)>=0 || v1.email.toLowerCase().indexOf(v)>=0 || v1.phone.toLowerCase().indexOf(v)>=0 ))
     if(v!=''){
        setISFiltered(true);
     }
     else{
        setISFiltered(false);
     }
  } 
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "Creditor Portal" }
  ];
  return (<Layout>
     <Seo title="Corporate Restructuring and Advisory" />
     <section id="banner-section" class="identi_bannersec crdit_bannersec">
     <div class="container position-relative">
     <div class="row">
       <div class="col-sm-12 col-md-12 col-lg-5 col-xl-4">
          <div class="banner-content innerpage-banner">
             <h1 class="banner-heading">{data.wpPage.aboutPageOptions.title}</h1>
              
             <div class="banner-desc d-none d-sm-none d-md-none d-lg-block">
                <div dangerouslySetInnerHTML={{__html: data.wpPage.aboutPageOptions.description }} />
             </div>
              <div class="d-none d-sm-none d-md-none d-lg-block">
              <Link to="https://core.ips-docs.com/" target="_blank" className="btn_more">Access now</Link>
              </div>
          </div>
       </div>
       <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7">
          <div class="banner-image">
             <img src={data.wpPage.aboutPageOptions.banner.mediaItemUrl} alt="data.wpPage.aboutPageOptions.banner.altText" /> 
          </div>
          <div class="col-12 d-block d-sm-block d-md-block d-lg-none banner-mdesc">
             <div class="banner-desc"><div dangerouslySetInnerHTML={{__html: data.wpPage.aboutPageOptions.description }} /> 
                </div>
             <div>
             <Link to="https://core.ips-docs.com/" className="btn_more">Access now</Link>
             </div>

          </div>
       </div>
    </div>
    </div>
    </section>

 

   <section class="appoint_faqsec service">
     <div class="container">
        <div class="row">
           <div class="col-sm-12">
             <div class="srch_appblock">
             <label>Recent Appointments?</label>
               <div class="srch_app">
               <form onSubmit={filterList} method="post" autocomplete="off">
                 <input type="text" id="search" placeholder="Search" class="frm_input"/>
                 <input type="submit" class="frm_submit"/>
                 </form>
               </div>
             </div>
             <div class="accordion" id="accordionExample">
               {filterData.map((d, index) => { if(!isFiltered && index>1) return null;
               return (<div class="accordion-item" key={'acc'+index}>
                        <h3 class="accordion-header" id={'heading'+index}><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded="false" aria-controls={"collapse"+index}>{d.title}  | {d.appointmentId} <div class="sub_title">Type of Job:  {d.typeOfJob}</div></button></h3>
                        <div id={"collapse"+index} class="accordion-collapse hide collapse" aria-labelledby={"heading"+index} data-bs-parent="#accordionExample">
                           <div class="accordion-body">
                             
                             <p>Appointment Date:  {d.date}</p>
                             <p>Appointee:{d.appointee}</p>
                             <h3>Appointment Contact</h3>
                             <ul>
                              <li>Analyst: {d.analyst}</li>
                              <li>Number: <a href="tel:{d.phone}">{d.phone}</a></li>
                              <li>Email: <a href="mailto:{d.email}">{d.email}</a></li>
                             </ul>
                           </div>
                        </div>
                     </div>)
               })}
                
            </div>
           </div>
        </div>
     </div>
  </section>
  <GetInTouch
     title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
     text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
   />
  </Layout>)
}
export const query = graphql`
  {
    wpPage(title: {eq: "Creditor Portal"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      aboutPageOptions {
        description
        banner {
          mediaItemUrl
          altText
        }
        title
      }
    }
    allWp {
      nodes {
        themeGeneralSettings {
          themeGeneralSettings {
            copyrightText
            expertAdviceLink
            expertAdviceTitle
            fieldGroupName
            getInTouchDescription
            getInTouchTitle
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
    allWpAppointment(sort: {order:  ASC, fields: menuOrder}) {
      nodes {
        title
        appointmentOptions {
          appointmentId
          typeOfJob
          date
          appointee
          analyst
          phone
          email
        }
      }
    }
  }
`
export default CreditorPortal