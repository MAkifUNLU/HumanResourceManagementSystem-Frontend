import React from 'react'
import { Segment,Container,List,Grid,Header, GridColumn, Button} from 'semantic-ui-react'
export default function Footer() {
    return (
        <div>
        <Segment inverted vertical style={{ padding: '5em 0em',marginBottom:"0em"}}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
                <Header inverted as='h4' content='About'>Site Hakkında</Header>
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <GridColumn  width={3}>
            <Header inverted as='h4' >İltişim Bilgileri</Header>
              <List link inverted>
                <List.Item as='a' icon='phone'>Telefon: 0507 635 00 00</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </GridColumn>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Bizimle İletişime Geçin
              </Header>
              <GridColumn width={3}>
              <Button circular color="facebook" icon="facebook" />

              <Button circular color="instagram" icon="instagram" target="blank" href="https://www.instagram.com/m.akifunlu/" />

              <Button circular color="twitter" icon="twitter" />

              <Button circular color="linkedin" icon="linkedin" target="blank"  href="www.linkedin.com/in/mehmet-akif-ünlü" />

              <Button
                circular color="github" icon="github" target="blank" href="https://github.com/MAkifUNLU" />

              <Button circular color="google plus" icon="google plus" />
              
              </GridColumn>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  
   
   
        </div>
    )
}