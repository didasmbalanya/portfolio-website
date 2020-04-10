import ApolloClient,{ gql } from 'apollo-boost';

const local = "http://localhost:3030/graphql";
// const deployed = ""
export default new ApolloClient({
  uri: local,
});



export const VIEW_USER = gql`
  query ($id: ID){
    getUser(id: $id) {
      id,
      name,
      job_title,
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation CreateUser($userInput: RegisterInputData) {
    createUser (name: $name, email: $email, job_title: $job_title)
  }
`;

// export const DELETE_USER = gql`
//   mutation($id: Int) {
//     deleteUser(id: $id)
//   }
// `