import React from 'react'
import JobApplyForm from './JobApplyForm'
import axios from 'axios'

class JobApply extends React.Component{
    constructor(){
        super()
        this.state = {
            userApplicants: []
        }
    }

    addJobApply = (userJobData) => {
        console.log(userJobData)
        axios.post('http://dct-application-form.herokuapp.com/users/application-form',userJobData)
        .then((response) => {
            const userAppliedJob = response.data
            this.setState((pervState) => {
               userApplicants: pervState.userApplicants.concat(userAppliedJob)
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render(){
        return(
            <div>
                <JobApplyForm addJobApply = { this.addJobApply }/>
            </div>
        )
    }
}

export default JobApply