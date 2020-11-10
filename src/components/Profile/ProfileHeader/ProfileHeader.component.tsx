import React from 'react'
import {
  LeftUserPart,
  Login,
  ProfileCard,
  Stat,
  StatisticsPart,
  StatName,
  StatValue,
  UserName,
  UserPart,
} from './ProfileHeader.styled'
import { User } from '../../../types/user/user.type'
import { Avatar } from '@ui-kitten/components'

type ProfileHeaderProps = {
  user: User
}

const ProfileHeader: React.FC<ProfileHeaderProps> = (props: ProfileHeaderProps) => {
  const { user } = props

  return (
    <ProfileCard>
      <UserPart>
        <Avatar source={{ uri: user.avatar_url, cache: 'force-cache' }} />
        <LeftUserPart>
          <UserName>{user.name}</UserName>
          <Login>@{user.login}</Login>
        </LeftUserPart>
      </UserPart>
      <StatisticsPart>
        <Stat>
          <StatName>Followers</StatName>
          <StatValue>{user.followers}</StatValue>
        </Stat>
        <Stat>
          <StatName>Location</StatName>
          <StatValue>{user.location}</StatValue>
        </Stat>
        <Stat>
          <StatName>Repositories</StatName>
          <StatValue>{user.public_repos}</StatValue>
        </Stat>
      </StatisticsPart>
      <Stat style={{ marginTop: 10 }}>
        <StatName>Bio</StatName>
        <StatValue>{user.bio}</StatValue>
      </Stat>
    </ProfileCard>
  )
}

export default ProfileHeader