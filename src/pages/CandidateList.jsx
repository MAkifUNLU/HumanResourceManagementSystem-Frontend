import React from 'react'

export default function CandidateList() {
    return (
        <div>
            
        </div>
    )
}


// import React, { useState, useEffect } from 'react'
// import { Button, Container, Header, Image, Segment, Card, Icon, Pagination, Grid } from "semantic-ui-react";
// import CandidateService from '../services/candidateService';

// export default function CandidateList() {

//     const [candidates, setCandidates] = useState([])

//     useEffect(() => {
//         let candidateService = new CandidateService();
//         candidateService
//             .getCandidates()
//             .then((result) => setCandidates(result.data.data));
//     }, []);

//     return (
//         <div>
            
//         </div>
//     )
// }

{/* <div>
            <Segment circle="true" style={{ padding: "8em 14em" }} vertical>
                <Container>
                    <Header circle="true" as="h3" style={{ fontSize: "3em" }}>
                        İş Arayanlar
                    </Header>
                    <Card.Group itemsPerRow={2}>
                        {candidates.map((candidate) => (
                            <Card fluid color="blue" circle="true"
                                style={{
                                    minHeight: 300,
                                    fontSize: "1.2em",
                                    fontWeight: "normal",
                                    padding: "3.4em 1em",
                                }}
                                key={candidate.id}
                            >
                                <Grid>
                                    <Grid.Row width={3}>
                                        <Image
                                            centered
                                            style={{ marginLeft: "7em", marginBottom: "0em", marginTop: "1em" }}
                                            verticalAlign="bottom"
                                            src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png"
                                            size="small"
                                            circular
                                        />
                                        {""}
                                    </Grid.Row>
                                    <Grid.Row width={10}>
                                        <Card.Content style={{ marginTop: "1em" }} >
                                            <Card.Header style={{ fontSize: "2em", marginLeft: "3em" }}>
                                                {candidate.firstName} {candidate.lastName}
                                            </Card.Header>

                                            <Card.Description textAlign="center" style={{ marginTop: "3em" }} >
                                                {" "}
                                                <Icon circular fitted color="violet" name="circle" />{" "}
                                                {candidate.nationalId}
                                            </Card.Description>

                                            <Card.Description textAlign="center" >
                                                {" "}
                                                <Icon fitted circular color="orange" name="mail" />{" "}
                                                {candidate.email}
                                            </Card.Description>

                                            <Card.Description textAlign="center"  >
                                                {" "}
                                                <Icon fitted circular color="green" name="calendar alternate"/>{" "}
                                                {candidate.dateOfBirth}
                                            </Card.Description>
                                            
                                        </Card.Content>
                                    </Grid.Row>
                                    <Grid.Row width={6}> {" "}
                                        <Button style={{ marginTop: "1em",marginLeft: "5em" }} circular animated basic color="red" size="big" >
                                            <Button.Content visible>Detaya Git</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name="arrow right" />
                                            </Button.Content>
                                        </Button>
                                    </Grid.Row>
                                </Grid>
                            </Card>
                        ))}
                    </Card.Group>
                    <br />

                    <Pagination
                        style={{ marginTop: "3.5em" }}
                        defaultActivePage={1}
                        firstItem={null}
                        lastItem={null}
                        pointing
                        secondary
                        totalPages={10}
                        circle="true"
                        size="massive"
                    />
                </Container>
            </Segment>
        </div> */}