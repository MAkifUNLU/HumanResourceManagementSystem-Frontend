import React, { useState, useEffect } from 'react'
import { Button, Card, Image, Container, Header } from 'semantic-ui-react'
import JobAdvertService from '../services/jobAdvertService'

export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService();
        jobAdvertService.getAll()
            .then(result => setJobAdverts(result.data.data))
            .catch(error => console.log(error.message))
    }, []);


    // useEffect(()=>{
    //     let jobAdvertService = new JobAdvertService();
    //     jobAdvertService.getAll().then((result)=> {
    //         setJobAdverts(result.data.data);
    //     });
    // }, []);

    return (
        <div>
            <Container>
                {
                    jobAdverts.map((jobAdvert) => (
                        <Card fluid >
                            <Card.Content>
                            {/* <Header as='h2' >
                                    <Image  circular floated='left' src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                                </Header>
                                
                            */}
                                <Card.Header>{jobAdvert.description}</Card.Header>
                                <Card.Meta size='large'>{jobAdvert.employer.companyName}</Card.Meta>
                                <Card.Meta>{jobAdvert.city.name}</Card.Meta>
                                <Card.Description>
                                    Son Başvuru Tarihi:  <strong>{jobAdvert.deadline}</strong>
                                </Card.Description>
                                
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        Başvuru Yap
                                    </Button>
                                    <Button basic color='red'>
                                        İncele
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    ))
                }



            </Container>
        </div>

    )
}
