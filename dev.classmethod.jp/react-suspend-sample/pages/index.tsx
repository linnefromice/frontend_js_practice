import type { NextPage } from 'next'

type GitHubUser = {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}
const githubUsersApi = async (): Promise<GitHubUser[]> => {
  return fetch("https://api.github.com/users").then((res) => res.json());
}

let users: GitHubUser[] | undefined;

const Home: NextPage = () => {
  if (!users) {
    throw githubUsersApi().then().then((res) => {
      users = res;
    });
  }

  return (
    <div>
      <h1>Github Users</h1>
      <ul>
        {users?.map((user) => {
          return (
            <li key={user.id}>
              <a href={user.html_url}>
                <img src={user.avatar_url} width={100} height={100}/>
                {user.login}</a>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Home
