import React from 'react'
import { Nav, BDiv, Modal, Button, Container, Row, Col, Table} from 'bootstrap-4-react'
import moment from 'moment'
import Axios from 'axios'
class AdminDashboard extends React.Component{
    constructor(){
        super()
        this.state = {
          userApplicants : [{"status":"applied","createdAt":"2020-05-22T10:03:57.722Z","_id":"5ec7c6f916378900170a2120","name":"tulip","email":"tulip@gmail.com","phone":"89976579088","jobTitle":"FULL Stack Developer","experience":"2","skills":"python","__v":0},{"status":"applied","createdAt":"2020-05-22T10:03:57.722Z","_id":"5ec7c95b16378900170a2121","name":"suman","email":"suman@outlook.com","phone":"8732479849","skills":"node js, react, java script","jobTitle":"Node.js Developer","experience":"4 years","__v":0},{"status":"applied","createdAt":"2020-05-22T10:03:57.722Z","_id":"5ec7d11716378900170a2122","name":"Subhashri Bhowmick","email":"subhashri@gmail.com","phone":"+91 8090706059","experience":"1 year 2 months","skills":"Html , Css , C++ ","jobTitle":"Front-End Developer","__v":0},{"status":"applied","createdAt":"2020-05-22T10:03:57.722Z","_id":"5ec7d4df16378900170a2124","name":"Sangeeta Sarkar","email":"sangeeta@gmail.com","phone":"+91 9090807888","experience":"2 years 1 month","skills":"java , c , c++","jobTitle":"Node.js Developer","__v":0},{"status":"applied","createdAt":"2020-05-22T10:03:57.722Z","_id":"5ec7d54616378900170a2125","name":"Sangeeta Sarkar","email":"sangeeta@gmail.com","phone":"+91 8889997862","experience":"1 year 2 months","skills":"java , c++ , c","jobTitle":"MEAN Stack Developer","__v":0},{"status":"applied","createdAt":"2020-05-22T10:03:57.722Z","_id":"5ec7d5ef16378900170a2126","name":"Pamoli Nath","email":"pamolin@gmail.com","phone":"+91 7770009898","experience":"2 years 6 months","skills":"java , java script , c , c++","jobTitle":"FULL Stack Developer","__v":0},{"status":"applied","createdAt":"2020-05-22T16:02:58.036Z","_id":"5ec7f7b4cc864e00178f55cc","name":"Ravi Maddi ","email":"ravimaddi@gmail.com","phone":"+91 9080706050","experience":"10 years 10 months","skills":"Java , Js ","jobTitle":"Node.js Developer","__v":0},{"status":"shortlisted","createdAt":"2020-05-23T03:03:22.402Z","_id":"5e1a1cf327dfc587754d9173","name":"anirudha","email":"anirudha@gmail.com","skills":"Javascript, React,Node, HTML, CSS","jobTitle":"FULL Stack Developer","experience":"9.5 years ","__v":0,"phone":"+919090909090"},{"status":"rejected","createdAt":"2020-05-23T03:03:22.402Z","_id":"5e1ac53b875ac9001744b89a","name":"Sam","email":"sam@gmail.com","phone":"+91 9090909090","skills":"Javascript, React,Node, HTML, CSS","jobTitle":"FULL Stack Developer","experience":"2 years ","__v":0},{"status":"shortlisted","createdAt":"2020-05-23T03:03:22.402Z","_id":"5e1ac90d875ac9001744b89b","name":"Sam","email":"sam@gmail.com","phone":"+91 9090909090","skills":"Javascript, React,Node, HTML, CSS","jobTitle":"FULL Stack Developer","experience":"2 years ","__v":0},{"status":"rejected","createdAt":"2020-05-23T03:03:22.402Z","_id":"5e1ac9b2875ac9001744b89c","__v":0,"email":"hello@gmail.com","experience":"2 years ","jobTitle":"FULL Stack Developer","name":"hello","phone":"+91 9090909090","skills":"Javascript, React,Node, HTML, CSS"}],
          //userApplicants: [],
          activeJobTitle: 'Front-End Developer',
         // filteredJobApplyUsers : []
         userDetails : {}
        }
    }

    componentDidMount(){
      Axios.get(`http://dct-application-form.herokuapp.com/users/application-forms`)
      .then(response => {
        const userApplicants = response.data
        //console.log(userApplicants)
        this.setState({ userApplicants })
      })
    // this.handleFilterClick(this.state.activeJobTitle)
    }

    handleStatusUpdate = (userJobApplyId, status) => {
     // console.log(userJobApplyId)
      Axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${userJobApplyId}`, status)
      .then((response) => {
        const updatedJobApply = response.data
       // console.log(updatedJobApply._id)
        this.setState((prevState) => {
          return{
            userApplicants: prevState.userApplicants.map((userApplicant) => {
              if(updatedJobApply._id == userApplicant._id){
                return Object.assign({}, userApplicant, updatedJobApply)
              }else{
                return Object.assign({}, userApplicant)
              }
            }) 
          }
        })
      })
    }

    

    handleFilterClick = (jobTitle) =>{
     // console.log(jobTitle)
      this.setState({activeJobTitle : jobTitle })
      // this.setState(prevState => {
      //   return{
      //     activeJobTitle : jobTitle,
      //     filteredJobApplyUsers :this.state.userApplicants.filter((userAppication) => {
      //       return userAppication.jobTitle == jobTitle
      //     })
      //   }
      // })
    }

    handelModal = (userJobApplyId) => {
      console.log(userJobApplyId)
      Axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${userJobApplyId}`)
      .then((response) => {
        const userDetails = response.data
        this.setState({ userDetails })
      })

    //  this.setState((prevState) => {
    //    return{
    //       userDetails : prevState.userApplicants.find((userApplicant) => {
    //                   return userJobApplyId == userApplicant._id
    //     })
    //    }
    //  })
     
 }

    render() {
      return (
          <BDiv>
          <h2>Admin Dashboard</h2>
          <Nav pills>
            <Nav.ItemLink  style = {{cursor:"pointer"}} onClick = { () => { this.handleFilterClick('Front-End Developer') } } active = { (this.state.activeJobTitle == 'Front-End Developer') ? 'active' : '' }>Front-End Developer</Nav.ItemLink>
            <Nav.ItemLink style = {{cursor:"pointer"}} onClick = { () => { this.handleFilterClick('Node.js Developer') } } active = { (this.state.activeJobTitle == 'Node.js Developer') ? 'active' : '' }>Node.js Developer</Nav.ItemLink>
            <Nav.ItemLink style = {{cursor:"pointer"}} onClick = { () => { this.handleFilterClick('MERN Stack Developer') } } active =  { (this.state.activeJobTitle == 'MERN Stack Developer') ? 'active' : '' }>MERN Stack Developer</Nav.ItemLink>
            <Nav.ItemLink style = {{cursor:"pointer"}} onClick = { () => { this.handleFilterClick('Full Stack Developer') } } active =  { (this.state.activeJobTitle == 'Full Stack Developer') ? 'active' : '' }>Full Stack Developer</Nav.ItemLink>
          </Nav>

          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Technical Skills</th>
                <th>Experience</th>
                <th>Applied Date</th>
                <th>View Details</th>
                <th>Updated Application Status</th>
              </tr>
            </thead>
            <tbody>
          

          {
            this.state.userApplicants.filter((userAppication) => {
              return userAppication.jobTitle == this.state.activeJobTitle
            }).map((jobTitleUser, index)=> {
              return (
                <tr key={jobTitleUser._id}>
                  <td>{ index+1 }</td>
                  <td>{ jobTitleUser.name}</td>
                  <td>{ jobTitleUser.skills }</td>
                  <td>{ jobTitleUser.experience }</td>
                  {/* { moment().format()*/} <td>{ moment(jobTitleUser.createdAt).format('L')}</td> 
                  <td>  {/* Button trigger Modal */}
            <Button primary data-toggle="modal" data-target="#exampleModal" onClick={ () => { this.handelModal(jobTitleUser._id) } }>View Details</Button>
           
            </td>
            {  (jobTitleUser.status == 'applied') && 
                  <td><Button success onClick= { () => {
                    this.handleStatusUpdate(jobTitleUser._id, { status: 'shortlisted' }) }}>
                  Shortlist</Button> <Button danger onClick= { () => { 
                    this.handleStatusUpdate(jobTitleUser._id, { status: 'rejected' }) }}>
                      Reject</Button></td> }
                  {  (jobTitleUser.status == 'shortlisted') && 
                  <td><Button success>Shortlisted</Button></td> }
                  {  (jobTitleUser.status == 'rejected') && 
                  <td> <Button danger>Rejected</Button></td> }
                </tr>
              )
            })
          }
          </tbody>
        </Table>

 {/* Modal */}
 <Modal id="exampleModal" fade>
 <Modal.Dialog>
 <Modal.Content>
 <Modal.Header>
 <Modal.Title>{this.state.userDetails.name} Profile</Modal.Title>
 <Modal.Close>
 <span aria-hidden="true">&times;</span>
 </Modal.Close>
 </Modal.Header>
 <Modal.Body>
 <Container>
 <Row>
 <Col><b><p>Contact Number</p></b></Col>
 <Col>{this.state.userDetails.phone}</Col>
 </Row>
 <Row>
 <Col><b><p>Email</p></b></Col>
 <Col>{this.state.userDetails.email}</Col>
 </Row>
 <Row>
 <Col><p><b>Skills</b></p></Col>
 {/* <Col>{this.state.userDetails.skills.split(',').map(skill => <p>{ skill }</p>)}</Col> */}
 <Col>{ this.state.userDetails.skills }</Col>
 </Row>
 <Row>
 <Col><b><p>Experience</p></b></Col>
 <Col>{this.state.userDetails.experience}</Col>
 </Row>
 </Container>
 </Modal.Body>
 <Modal.Footer>
 <Button secondary data-dismiss="modal">Close</Button>
 </Modal.Footer>
 </Modal.Content>
 </Modal.Dialog>
 </Modal>

          </BDiv>
          
        )
      }
}

export default AdminDashboard
