return (
    <tr>
      <td>{ index+1 }</td>
      <td>{ jobTitleUser.name}</td>
      <td>{ jobTitleUser.skills }</td>
      <td>{ jobTitleUser.experience }</td>
      {/* { moment().format()*/} <td>{ moment(jobTitleUser.createdAt).format('L')}</td> 
      <td>  {/* Button trigger Modal */}
<Button primary data-toggle="modal" data-target="#exampleModal">View Details</Button>
{/* Modal */}
<Modal id="exampleModal" fade>
<Modal.Dialog>
<Modal.Content>
<Modal.Header>
<Modal.Title>{jobTitleUser.name} Profile</Modal.Title>
<Modal.Close>
<span aria-hidden="true">&times;</span>
</Modal.Close>
</Modal.Header>
<Modal.Body>
<Container>
<Row>
<Col><b><p>Contact Number</p></b></Col>
<Col>{jobTitleUser.phone}</Col>
</Row>
<Row>
<Col><b><p>Email</p></b></Col>
<Col>{jobTitleUser.email}</Col>
</Row>
<Row>
<Col><p><b>Skills</b></p></Col>
{/* <Col>{jobTitleUser.skills.split(',').map(skill => <p>{ skill }</p>)}</Col> */}
<Col>{jobTitleUser.skills}</Col>
</Row>
<Row>
<Col><b><p>Experience</p></b></Col>
<Col>{jobTitleUser.experience}</Col>
</Row>
</Container>
</Modal.Body>
<Modal.Footer>
<Button secondary data-dismiss="modal">Close</Button>
</Modal.Footer>
</Modal.Content>
</Modal.Dialog>
</Modal>
</td>
{  (jobTitleUser.status == 'applied') && 
      <td><Button success onClick= { () => {
        this.handleStatusChange(jobTitleUser._id, { status: 'shortlisted' }) }}>
      Shortlist</Button> <Button danger onClick= { () => { 
        this.handleStatusChange(jobTitleUser._id, { status: 'rejected' }) }}>
          Reject</Button></td> }
      {  (jobTitleUser.status == 'shortlisted') && 
      <td><Button success>Shortlisted</Button></td> }
      {  (jobTitleUser.status == 'rejected') && 
      <td> <Button danger>Rejected</Button></td> }
    </tr>
  )