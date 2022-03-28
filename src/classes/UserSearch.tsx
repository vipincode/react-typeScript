// @flow
import { Component } from 'react';

interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[];
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

export class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };
  render() {
    return <div>{this.state.user}</div>;
  }
}

// You can Annotate this way as well.

// export class UserSearch extends Component<UserSearchProps, UserSearchState> {
//   state = {
//     name: '',
//     user: undefined,
//   };
//   render() {
//     return <div>{this.state.user}</div>;
//   }
// }
