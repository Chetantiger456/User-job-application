import React from 'react'
import {BDiv, Form, Button} from 'bootstrap-4-react'
import validator from 'validator'

class JobApplyForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            skills: [],
            jobTitle: '',
            experience: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [ event.target.name ] : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            skills: this.state.skills,
            jobTitle: this.state.jobTitle,
            experience: this.state.experience,
            //status: 'applied'
        }
        //console.log(formData)
        this.props.addJobApply(formData)

        this.state = {
            name: '',
            email: '',
            phone: '',
            skills: [],
            jobTitle: '',
            experience: ''
        }
    } 

    render(){
        return(
            <BDiv >
                <h2>Apply for Job</h2>
                <Form onSubmit = { this.handleSubmit } m="5" p="3" bg ="light" border="light" shadow="lg" rounded>
                    <Form.Group>
                        <label>Full Name </label>
                        <Form.Input type="text" name="name" value = { this.state.name } onChange={ this.handleChange } />
                    </Form.Group>
                    <Form.Group>
                        <label>Email Address </label>
                        <Form.Input type="text" name="email" value = { this.state.email } onChange={ this.handleChange } />
                    </Form.Group>
                    <Form.Group>
                        <label>Phone Number </label>
                        <Form.Input type="text" name="phone" value = { this.state.phone } onChange={ this.handleChange } />
                    </Form.Group>
                    <Form.Group>
                        <label>Applying For Job </label>
                        <Form.Select name="jobTitle" value = { this.state.jobTitle } onChange={ this.handleChange } >
                            <option>-- Skills --</option>
                            <option value="Front-End Developer">Front-End Developer</option>
                            <option value="Node.js Developer">Node.js Developer</option>
                            <option value="MERN Stack Developer">MERN Stack Developer</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                        </Form.Select>
                    </Form.Group>    
                    <Form.Group>
                        <label>Experience</label>
                        <Form.Input name="experience" value= { this.state.experience} onChange={ this.handleChange } />
                    </Form.Group>
                    <Form.Group>
                        <label>Technical Skills</label>
                        <Form.Input name="skills" value ={ this.state.skills } onChange={ this.handleChange } />
                    </Form.Group>
                    <Button primary as="input" type="submit" value="Send Application" />
                </Form>
            </BDiv>
        )
    }
}
export default JobApplyForm