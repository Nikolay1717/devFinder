import { GithubUser, LocalGithubUser } from "types";

export const extractLocalUser = (user: GithubUser): LocalGithubUser => {
  return {
    ...user,
    avatar: user.avatar_url,
    twitter: user.twitter_username,
    repos: user.public_repos,
    created: user.created_at,
  }
}