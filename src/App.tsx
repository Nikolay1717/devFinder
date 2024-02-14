import { useEffect, useState } from "react";

import { Container } from "components/Container";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { extractLocalUser } from "utils/extract-local-user";
import { isGithubUser } from "utils/typeguards";

const BASE_URL = 'https://api.github.com/users/';
const DEFAULT_LOGIN = 'nikolay1717';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user: GithubUser | GithubError = await res.json();

    if (isGithubUser(user)) {
      const localUser = extractLocalUser(user);
      setUser(localUser);   
    } else {
      setUser(null);
    }
  }

  useEffect(() => {
    fetchUser(DEFAULT_LOGIN);
  }, [])

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && (
        <UserCard {...user} />
      )}
    </Container>
  );
}

export default App;
