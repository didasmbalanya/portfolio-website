import React from "react";
import HeaderReuse from "./header";
import { useQuery } from "@apollo/react-hooks";
import { Table } from "react-bootstrap";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      totalposts
      posts {
        id
        title
        content
        created_on
        imageurl
      }
    }
  }
`;

function Posts() {
  const getPosts = useQuery(GET_POSTS);
  if (getPosts.loading) return <h1>Loading</h1>;
  if (getPosts.error) return <React.Fragment>Error :(</React.Fragment>;

  const { loading, data } = getPosts;
  return (
    !loading && (
      <div className="condiv blogs">
        <HeaderReuse header="Blogs" />
        <div>
          <p>Total Posts: {data.posts.totalposts}</p>
          
          <Table striped hover borderless responsive variant="dark">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
              </tr>
            </thead>
            <tbody>
              {data.posts.posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <Link className="hovers white-text" to={`/post/${post.id}`}>{post.title}</Link>
                  </td>
                  <td>{post.content}</td>
                </tr>
                
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    )
  );
}

export default Posts;

