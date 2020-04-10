import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Accordion, Card, Button } from "react-bootstrap";
import HeaderReuse from "./header";

export const GET_PROJECTS = gql`
  query GetPosts {
    projects {
      totalprojects
      projects {
        id
        title
        summary
        githuburl
      }
    }
  }
`;
function Projects() {
  const getProjects = useQuery(GET_PROJECTS);
  if (getProjects.loading) return <h1>Loading</h1>;
  if (getProjects.error) return <React.Fragment>Error :( || Could not fine requested data</React.Fragment>;

  const { loading, data } = getProjects;
  return (
    !loading && (
      <div className="condiv blogs">
        <HeaderReuse header="Projects" />
        <div>
          <p>Total Projects: {data.projects.totalprojects}</p>

          {data.projects.projects.map((project) => val(project))}
        </div>
      </div>
    )
  );
}

const val = (post) => (
  <Accordion>
    <Card >
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <span className="hovers white-text">{post.title}</span>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <p>
            Frontend: <span>REACT/REDUX</span>
          </p>
          <p>
            Backend: <span>Express, Typescript</span>
          </p>
          <p>
            Other: <span>Postgres, Docker, Sequelize</span>
          </p>
          <p>
            Summary: <span>{post.summary}</span>
          </p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

export default Projects;
