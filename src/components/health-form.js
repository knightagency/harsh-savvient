import * as React from "react"
import { useState } from "react"
import { formHealthContext } from './context';

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const HealthForm = (props) => {
  const [fName, setfName] = useState('');
  const [showfName, setShowfName] = useState('d-none');
  const [lName, setlName] = useState('');
  const [showlName, setShowlName] = useState('d-none');
  const [email, setEmail] = useState('');
  const [showeMail, setShoweMail] = useState('d-none');
  const [phone, setPhone] = useState('');
  const [showPhone, setShowPhone] = useState('d-none');
  const [showSuccess, setShowSuccess] = useState('d-none');
  const [showBtn, setShowBtn] = useState('d-block');
  let ch = 0;
  const sendemail = (e) => {
    e.preventDefault();
    if (fName.trim() !== "" && lName.trim() !== "" && re.test(email) && phoneno.test(phone) && ch === 0) {
      ch = 1;
      //creating an invisible element
      // var element = document.createElement('a');
      // element.setAttribute('href', "/ebook.pdf");
      // element.setAttribute('download', "ebook");

      // // Above code is equivalent to
      // // <a href="path of file" download="file name">

      // document.body.appendChild(element);

      // //onClick property
      // element.click();

      // document.body.removeChild(element);
      e.target.submit();

      //ch = 1;
      //const recipeUrl = 'https://growingcolossus.com/mackaygoodwin/wp-json/mackey/v1/contact-sendemail ';
      // const postBody = {
      //   "first-name": fName,
      //   "surname": lName,
      //   "email": email,
      //   "mobile": phone,
      //   "state": stateName,
      //   "area-help": areaHelp,
      //   "about-situation":about
      // };

      // const requestMetadata = {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(postBody)
      // };

      // fetch(recipeUrl, requestMetadata)
      // .then(res => res.json())
      // .then(recipes => {
      //   ch = 0;
      //   setShowSuccess('d-block');
      //   setShowBtn('d-none');
      // });
    }
  }
  const { fromDetails, setFormDetails } = React.useContext(formHealthContext);

  return (
    <div className={fromDetails === 1 ? "modal fade show peopleModal" : "modal fade "} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setFormDetails(0) }}></button>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h2>{props.title}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2 offset-sm-0 col-sm-12">
                  <h3 dangerouslySetInnerHTML={{ __html: props.text }}></h3>
                  <form action="https://login.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" id="web2caseForm" novalidate="novalidate" onSubmit={(e) => { sendemail(e) }}>
                    <input type="text" name="first_name" placeholder="First Name" required onChange={(e) => { setfName(e.target.value); e.target.value.trim() !== "" ? setShowfName('d-none') : setShowfName('d-block') }} />
                    <div className={"alert alert-danger " + showfName} style={fName.trim() !== "" ? { display: "none" } : {}} role="alert">Please enter first name.</div>
                    <input type="text" name="last_name" placeholder="Surname" required onChange={(e) => { setlName(e.target.value); e.target.value.trim() !== "" ? setShowlName('d-none') : setShowlName('d-block') }} />
                    <div className={"alert alert-danger " + showlName} style={lName.trim() !== "" ? { display: "none" } : {}} role="alert">Please enter last name.</div>
                    <input type="email" name="email" placeholder="Email address" required onChange={(e) => { setEmail(e.target.value); e.target.value.trim() !== "" && re.test(e.target.value) ? setShoweMail('d-none') : setShoweMail('d-block') }} />
                    <div className={"alert alert-danger " + showeMail} style={email.trim() !== "" && re.test(email) ? { display: "none" } : {}} role="alert">Please enter valid email address.</div>
                    <input type="phone" name="phone" placeholder="Mobile Number" required onChange={(e) => { setPhone(e.target.value); e.target.value.trim() !== "" && phoneno.test(e.target.value) ? setShowPhone('d-none') : setShowPhone('d-block') }} />
                    <div className={"alert alert-danger " + showPhone} style={phone !== "" && phoneno.test(phone) ? { display: "none" } : {}} role="alert">Please enter valid phone.</div>
                    <div class="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="emailOptOut" />
                      <label className="form-check-label mt-0" for="emailOptOut">
                        Please contact me to set up a free consultation.
                      </label>
                    </div>
                    <input type="hidden" name="oid" value="00D2w000000ny8T" />
                    <input type="hidden" name="retURL" value="https://mackey.herokuapp.com/thank-you/" />
                    <input id="lead_source" name="lead_source" type="hidden" value="Web Form" />
                    <input id="00N2w00000DXDbL" name="00N2w00000DXDbL" type="hidden" value="MG" />
                    <input id="00N2w00000DXDbM" name="00N2w00000DXDbM" type="hidden" value="Health Check 2021" />
                    <button type="submit" className={"btn btn-primary " + showBtn}>Register Now</button>
                    <div className={"alert alert-success " + showSuccess} role="alert">Thank you for providing the details, we have received it and one of our consultants will be in touch shortly</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mfooter d-flex">
              <a href="#" onClick={(e) => { e.preventDefault(); slide.current.slickPrev() }}><i className="fa fa-chevron-left" aria-hidden="true"></i> Previous bio</a>
              <a href="#" className="ms-auto" onClick={(e) => { e.preventDefault(); slide.current.slickNext() }}>Next bio <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div> */}
        </div>
      </div>
    </div>
    // <section id="get-in-touch">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12">
    //         <h2>{props.title}</h2>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-8 offset-md-2 offset-sm-0 col-sm-12">
    //         <h3 dangerouslySetInnerHTML={{__html:props.text}}></h3>
    //         <form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" id="web2caseForm" novalidate="novalidate" onSubmit={(e) => {sendemail(e)}}>
    //           <input type="text" name="first_name" placeholder="First Name" required onChange={(e) => { setfName(e.target.value); e.target.value.trim() !== ""?setShowfName('d-none'):setShowfName('d-block') }} />
    //           <div className={"alert alert-danger " + showfName} style={fName.trim() !== ""? {display: "none"}:{}} role="alert">Please enter first name.</div>
    //           <input type="text" name="last_name" placeholder="Surname" required onChange={(e) => {setlName(e.target.value); e.target.value.trim() !== ""?setShowlName('d-none'):setShowlName('d-block')} } />
    //           <div  className={"alert alert-danger " + showlName} style={lName.trim() !== ""? {display: "none"}:{}} role="alert">Please enter last name.</div>
    //           <input type="email" name="email" placeholder="Email address" required onChange={(e) => {setEmail(e.target.value); e.target.value.trim() !== "" && re.test(e.target.value)?setShoweMail('d-none'):setShoweMail('d-block')}} />
    //           <div className={"alert alert-danger " + showeMail} style={email.trim() !== "" && re.test(email)? {display: "none"}:{}} role="alert">Please enter valid email address.</div>
    //           <div class="form-check">
    //             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    //             <label className="form-check-label mt-0" for="flexCheckDefault">
    //               Please contact me to set up a free consultation
    //             </label>
    //           </div>
    //           <input type="hidden" name="oid" value="00D2w000000ny8T" />
    //           <input type="hidden" name="retURL" value="https://mackaygoodwin.com.au/" />
    //           <input id="lead_source" name="lead_source" type="hidden" value="Web Form" />
    //           <input id="00N2w00000DXDbL" name="00N2w00000DXDbL" type="hidden" value="MG" />
    //           <input id="00N2w00000DXDbM" name="00N2w00000DXDbM" type="hidden" value="Capability Statement 2021" />
    //           <button type="submit" className={"btn btn-primary "+ showBtn}>Download e-guide</button>
    //           <div className={"alert alert-success "+ showSuccess} role="alert">Thank you for providing the details, we have received it and one of our consultants will be in touch shortly</div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}
export default HealthForm
