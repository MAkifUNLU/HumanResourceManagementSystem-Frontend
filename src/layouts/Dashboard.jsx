import React from 'react'
import CandidateList from '../pages/CandidateList'
import SideBar from './SideBar'
import JobAdvertList from '../pages/JobAdvertList'
import { Container, GridColumn, Grid, GridRow } from 'semantic-ui-react'


export default function Dashboard() {
  return (
    <div>
      <Container>
        <Grid>
          <GridRow>
            <GridColumn width={4}>
              <SideBar></SideBar>
            </GridColumn>
            <GridColumn width={12}>
              <JobAdvertList></JobAdvertList>
            </GridColumn>
          </GridRow>

        </Grid>

      </Container>





      <CandidateList></CandidateList>


    </div>
  )
}
// <JobAdvertList></JobAdvertList>